/** Fetch only declared supplemental commentary; existing source sync owns translations. */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { loadLock, upstreamFile } from '../src/lib/canon/load';

interface SupplementalManifest {
  schemaVersion: 1;
  commit: string;
  files: Record<string, string>;
}

const root = process.cwd();
const lock = loadLock();
const manifest = JSON.parse(readFileSync(path.join(root, 'source/explanation-references.json'), 'utf8')) as SupplementalManifest;
const allowedPath = /^comment\/en\/sujato\/sutta\/(mn|dn)\/\1[1-9]\d*_comment-en-sujato\.json$/;
const blobHash = (bytes: Buffer) => createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
const checkOnly = process.argv.includes('--check');

if (manifest.schemaVersion !== 1 || manifest.commit !== lock.commit || !manifest.files || Array.isArray(manifest.files)) {
  throw new Error('Supplemental explanation references must match the current Pāli source lock.');
}

let downloaded = 0;
const entries = Object.entries(manifest.files);
for (const [relative, expected] of entries) {
  if (!allowedPath.test(relative) || !/^[a-f0-9]{40}$/.test(expected)) throw new Error(`Invalid supplemental source entry: ${relative}`);
  const destination = upstreamFile(relative);
  if (existsSync(destination) && blobHash(readFileSync(destination)) === expected) continue;
  if (checkOnly) throw new Error(`Supplemental source missing or changed: ${relative}. Run npm run explanations:sync.`);
  const url = `https://raw.githubusercontent.com/suttacentral/bilara-data/${manifest.commit}/${relative}`;
  const response = await fetch(url, { headers: { 'user-agent': 'kinh-tang-pali-explanations' }, signal: AbortSignal.timeout(45000) });
  if (!response.ok) throw new Error(`Supplemental source HTTP ${response.status}: ${relative}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (blobHash(bytes) !== expected) throw new Error(`Supplemental source does not match pinned git blob: ${relative}`);
  const text = bytes.toString('utf8');
  const content = JSON.parse(text) as unknown;
  if (!content || typeof content !== 'object' || Array.isArray(content)
    || Object.values(content).some(value => typeof value !== 'string') || text !== text.normalize('NFC')) {
    throw new Error(`Supplemental source is not an NFC segment map: ${relative}`);
  }
  mkdirSync(path.dirname(destination), { recursive: true });
  const temporary = `${destination}.fetching`;
  writeFileSync(temporary, bytes);
  renameSync(temporary, destination);
  downloaded += 1;
}
console.log(`Explanation references: ${entries.length} verified, ${downloaded} downloaded at ${manifest.commit.slice(0, 12)}.`);
