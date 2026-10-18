/** Record and select actual editorial reviews; this command never invents a grade. */
import { randomUUID } from 'node:crypto';
import { existsSync, mkdirSync, openSync, closeSync, readFileSync, readdirSync, renameSync, unlinkSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import {
  AUDIENCES, auditExplanations, explanationContentHash, explanationPaths,
  explanationScore, explanationStatus, validateExplanationReview,
  type Audience, type ExplanationMetadata, type ExplanationReview,
} from '../src/lib/canon/explanations';
import { supportTools } from '../src/lib/canon/tooling';

type Collection = 'mn' | 'dn';
const ROOT = process.cwd();
const args = process.argv.slice(2);
const readJson = <T>(file: string): T => JSON.parse(readFileSync(file, 'utf8')) as T;
const catalog = (collection: Collection) => readJson<{ texts: Array<{ uid: string }> }>(path.join(ROOT, 'content/catalog/sutta', `${collection}.json`)).texts;

function identify(uid: string, audience: string): { collection: Collection; audience: Audience } {
  const collection = uid.match(/^(mn|dn)[1-9]\d*$/)?.[1] as Collection | undefined;
  if (!collection || !catalog(collection).some(text => text.uid === uid)) throw new Error(`Unknown MN/DN UID: ${uid}`);
  if (!AUDIENCES.includes(audience as Audience)) throw new Error(`Unknown audience: ${audience}`);
  return { collection, audience: audience as Audience };
}

function locations(): { texts: Array<{ collection: Collection; uid: string }>; errors: string[] } {
  const errors: string[] = [];
  const texts: Array<{ collection: Collection; uid: string }> = [];
  for (const collection of ['mn', 'dn'] as const) texts.push(...catalog(collection).map(({ uid }) => ({ collection, uid })));
  for (const base of ['content/comment/vi/project/explanations/sutta', 'content/meta/explanations/sutta']) {
    const directory = path.join(ROOT, base);
    if (!existsSync(directory)) continue;
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (!entry.isDirectory() || !['mn', 'dn'].includes(entry.name)) { errors.push(`${base}/${entry.name}: only MN/DN collection directories are allowed`); continue; }
      for (const file of readdirSync(path.join(directory, entry.name), { withFileTypes: true })) {
        const uid = file.name.replace(/\.json$/, '');
        if (!file.isFile() || !file.name.endsWith('.json') || !texts.some(text => text.collection === entry.name && text.uid === uid)) errors.push(`${base}/${entry.name}/${file.name}: unknown explanation file`);
      }
    }
  }
  return { texts, errors };
}

/** A stale selected review may be replaced; all underlying source/structure errors remain blocking. */
function recordingErrors(errors: string[]): string[] {
  return errors.filter(error => !error.endsWith('published state lacks a complete current review satisfying the explanation gate'));
}

function editMetadata(collection: Collection, uid: string, audience: Audience, edit: (metadata: ExplanationMetadata, audit: NonNullable<ReturnType<typeof auditExplanations>>) => void) {
  const files = explanationPaths(collection, uid);
  mkdirSync(path.dirname(files.metadata), { recursive: true });
  const lock = `${files.metadata}.lock`;
  const handle = openSync(lock, 'wx');
  let temporary: string | undefined;
  try {
    const original = existsSync(files.metadata) ? readFileSync(files.metadata, 'utf8') : null;
    const audit = auditExplanations(collection, uid);
    if (!audit || !audit.content.audiences[audience]) throw new Error(`${uid}/${audience}: write the explanation before reviewing it`);
    const errors = recordingErrors(audit.errors);
    if (errors.length) throw new Error(errors.join('\n'));
    const reviewedHash = explanationContentHash(audit.content, audience);
    edit(audit.metadata, audit);
    const latest = auditExplanations(collection, uid);
    if (!latest || explanationContentHash(latest.content, audience) !== reviewedHash || latest.sourceErrors.length
      || (existsSync(files.metadata) ? readFileSync(files.metadata, 'utf8') : null) !== original) {
      throw new Error('Content, sources or metadata changed during review recording; concurrent work was preserved');
    }
    temporary = `${files.metadata}.${randomUUID()}.tmp`;
    writeFileSync(temporary, `${JSON.stringify(audit.metadata, null, 2)}\n`, { flag: 'wx' });
    renameSync(temporary, files.metadata);
  } finally {
    if (temporary && existsSync(temporary)) unlinkSync(temporary);
    closeSync(handle);
    unlinkSync(lock);
  }
}

if (args[0] === '--check' || args[0] === '--report') {
  const inventory = locations();
  const errors = [...inventory.errors];
  const rows = inventory.texts.map(({ collection, uid }) => {
    try {
      const audit = auditExplanations(collection, uid);
      if (audit) errors.push(...audit.errors);
      return {
        collection, uid,
        complete: audit?.bundle.complete ?? false,
        minimumScore: audit?.bundle.minimumScore ?? null,
        audiences: Object.fromEntries(AUDIENCES.map(audience => [audience, {
          status: audit?.bundle.audiences[audience].status ?? 'not-started',
          score: audit?.bundle.audiences[audience].score ?? null,
          reviewId: audit?.bundle.audiences[audience].reviewId ?? null,
        }])),
      };
    } catch (error) {
      errors.push(`${uid}: ${error instanceof Error ? error.message : String(error)}`);
      return { collection, uid, complete: false, minimumScore: null, audiences: Object.fromEntries(AUDIENCES.map(audience => [audience, { status: 'invalid', score: null, reviewId: null }])) };
    }
  });
  const counts = Object.fromEntries(['not-started', 'draft', 'review', 'published', 'stale', 'invalid'].map(status => [status,
    rows.reduce((sum, row) => sum + Object.values(row.audiences).filter(view => view.status === status).length, 0),
  ]));
  if (args[0] === '--report') console.log(JSON.stringify({ schemaVersion: 1, scope: { suttas: rows.length, audiences: rows.length * AUDIENCES.length }, completeSuttas: rows.filter(row => row.complete).length, counts, errors, rows }, null, 2));
  else {
    console.log(`Modern explanations: ${counts.published} published audience versions; ${rows.filter(row => row.complete).length}/${rows.length} complete suttas; ${errors.length} errors.`);
    if (errors.length) console.error(errors.join('\n'));
  }
  if (errors.length) process.exitCode = 1;
} else if (args[0] === '--record' && args.length === 4) {
  const uid = args[1];
  const { collection, audience } = identify(uid, args[2]);
  const input = readJson<Pick<ExplanationReview, 'reviewedAt' | 'reviewers' | 'scores' | 'rationale' | 'blockingErrors' | 'notes'>>(args[3]);
  let saved: ExplanationReview | undefined;
  editMetadata(collection, uid, audience, (metadata, audit) => {
    const review: ExplanationReview = {
      id: randomUUID(), audience,
      reviewedAt: input.reviewedAt, reviewers: input.reviewers,
      scores: input.scores, rationale: input.rationale,
      blockingErrors: input.blockingErrors, notes: input.notes,
      contentHash: explanationContentHash(audit.content, audience), sourceHashes: audit.sourceHashes,
    };
    const errors = validateExplanationReview(review, new Set(supportTools().map(tool => tool.id)));
    if (errors.length) throw new Error(errors.join('\n'));
    metadata.reviews.push(review);
    saved = review;
  });
  console.log(`${uid}/${audience}: recorded review ${saved!.id}; score ${explanationScore(saved!.scores)}. Apply the review explicitly to select it.`);
} else if (args[0] === '--apply' && args.length === 4) {
  const uid = args[1];
  const { collection, audience } = identify(uid, args[2]);
  let status: string | undefined;
  editMetadata(collection, uid, audience, (metadata, audit) => {
    const review = metadata.reviews.find(entry => entry.id === args[3] && entry.audience === audience);
    if (!review) throw new Error(`${uid}/${audience}: review ${args[3]} does not exist for this audience`);
    const hashes = (values: ExplanationReview['sourceHashes']) => JSON.stringify([...values].sort((a, b) => a.path.localeCompare(b.path)));
    if (review.contentHash !== explanationContentHash(audit.content, audience) || hashes(review.sourceHashes) !== hashes(audit.sourceHashes)) throw new Error('Review is stale; review the current explanation/source bytes first');
    status = explanationStatus(review);
    metadata.audiences[audience] = { status: explanationStatus(review), selectedReviewId: review.id };
  });
  console.log(`${uid}/${audience}: ${status}; selected review ${args[3]}`);
} else {
  throw new Error('Use --check | --report | --record <uid> <audience> <review.json> | --apply <uid> <audience> <review-id>');
}
