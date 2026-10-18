# Lô 02 — MN11 đến MN20

Ngày đối chiếu: **2026-10-18**. Phạm vi: **10 bài, 30 bản diễn giải**, theo thứ tự MN11 → MN20, tiếp nối [lô 01](batch-01-mn1-mn10.md) trong kế hoạch MN1–MN152 rồi DN1–DN34.

**Đã hoàn tất cả 10 bài:** 30 bản diễn giải có trạng thái `published`, với đánh giá hiện hành và không còn lỗi chặn trong phạm vi đã kiểm. Đã đối chiếu đủ **30 fingerprint nội dung và 50 phụ thuộc nguồn**, ghi và áp dụng từng lần duyệt theo thứ tự MN11 → MN20. Báo cáo toàn kho sau lô này ghi **20/186 bài hoàn tất, 60/558 bản đã duyệt**, không có bản diễn giải lỗi thời hoặc không hợp lệ.

## Điểm từng bài

Áp dụng [rubric và cổng xuất bản](../modern-explanation-quality.md). Điểm một bản là trung bình mười tiêu chí và phải từ 9,0 trở lên; bốn tiêu chí trọng yếu cũng phải từ 9,0 trở lên, không còn lỗi chặn và lần duyệt phải khớp nội dung cùng nguồn. Bảng tính trực tiếp từ mười điểm của đánh giá đang được chọn trong metadata, làm tròn hai chữ số để đọc; cổng dùng trung bình chưa làm tròn. Điểm hoàn tất của bài là **điểm thấp nhất của ba bản đã duyệt và còn hiệu lực**. Liên kết ở tên bài dẫn tới metadata chứa điểm, lý do từng tiêu chí, lịch sử duyệt và hash nội dung/nguồn.

| Bài | Trẻ em | Người trưởng thành | Người lớn tuổi | Điểm hoàn tất |
| --- | ---: | ---: | ---: | ---: |
| [MN11](../../content/meta/explanations/sutta/mn/mn11.json) | 9,37 | 9,43 | 9,42 | 9,37 |
| [MN12](../../content/meta/explanations/sutta/mn/mn12.json) | 9,43 | 9,50 | 9,46 | 9,43 |
| [MN13](../../content/meta/explanations/sutta/mn/mn13.json) | 9,38 | 9,44 | 9,44 | 9,38 |
| [MN14](../../content/meta/explanations/sutta/mn/mn14.json) | 9,42 | 9,50 | 9,48 | 9,42 |
| [MN15](../../content/meta/explanations/sutta/mn/mn15.json) | 9,35 | 9,39 | 9,40 | 9,35 |
| [MN16](../../content/meta/explanations/sutta/mn/mn16.json) | 9,36 | 9,40 | 9,41 | 9,36 |
| [MN17](../../content/meta/explanations/sutta/mn/mn17.json) | 9,46 | 9,51 | 9,51 | 9,46 |
| [MN18](../../content/meta/explanations/sutta/mn/mn18.json) | 9,39 | 9,46 | 9,45 | 9,39 |
| [MN19](../../content/meta/explanations/sutta/mn/mn19.json) | 9,47 | 9,52 | 9,50 | 9,47 |
| [MN20](../../content/meta/explanations/sutta/mn/mn20.json) | 9,50 | 9,55 | 9,52 | 9,50 |

Mười hồ sơ trong [metadata diễn giải MN](../../content/meta/explanations/sutta/mn) chứa đủ 30 đánh giá, mỗi đánh giá có mười điểm, mười lý do cụ thể, fingerprint nội dung và hash nguồn đã đọc. Cả 30 điểm trung bình và bốn tiêu chí trọng yếu của từng bản đạt ngưỡng rubric; không hồ sơ nào ghi lỗi chặn còn lại. Đã xác nhận từng đánh giá được chọn còn khớp nội dung và nguồn; cả mười bài đều có `complete: true`.

Bản trẻ em của MN12 có `audience_fit = 8,9`: lượng tên riêng, thuật ngữ và chi tiết khổ hạnh vẫn lớn, phù hợp đọc từng phần cùng người lớn hơn là trẻ nhỏ tự đọc một mạch. Điểm này được giữ nguyên trong đánh giá đã ghi nhận; điểm tổng và bốn tiêu chí trọng yếu được xét theo đúng rubric, không nâng từng tiêu chí để làm đẹp bảng.

## Phạm vi bản đồ ý

Số đếm được tính lại từ mười tệp diễn giải và các tệp Pāli thực trong snapshot: **215 đơn vị nghĩa, 1.589 khóa nguồn**. Mỗi bài có đủ ba đối tượng; bản đồ của từng bài bao phủ đúng một lần mọi khóa Pāli, gồm phần dẫn, câu lặp, khóa gộp có dấu lược, đoạn kết và nhãn của ấn bản. Các phần giảng hoặc làm rõ của từng bản cùng bao phủ toàn bộ bản đồ.

| Bài | Đơn vị nghĩa | Khóa Pāli |
| --- | ---: | ---: |
| MN11 — Tiểu Kinh Sư Tử Hống | 17 | 132 |
| MN12 — Đại Kinh Sư Tử Hống | 34 | 372 |
| MN13 — Đại Kinh Khổ Uẩn | 25 | 152 |
| MN14 — Tiểu Kinh Khổ Uẩn | 18 | 144 |
| MN15 — Kinh Tư Lượng | 24 | 263 |
| MN16 — Kinh Tâm Hoang Vu | 20 | 83 |
| MN17 — Kinh Khu Rừng | 17 | 83 |
| MN18 — Kinh Mật Hoàn | 23 | 150 |
| MN19 — Kinh Song Tầm | 20 | 123 |
| MN20 — Kinh An Trú Tầm | 17 | 87 |
| **Tổng** | **215** | **1.589** |

Đây là số khóa của bản nguồn, không phải số câu văn hay số đoạn diễn giải. Các khóa gộp như `mn17:7-10.1` được tính một lần theo dữ liệu thực; không tự tạo thêm segment để thay chỗ lược. Đủ mã liên kết là kiểm tra cấu trúc; việc giữ đúng nghĩa vẫn phải được người kiểm đọc toàn văn.

## Phạm vi đối chiếu nghĩa và các quyết định diễn giải

Bảng tổng hợp từ bản đồ ý, ghi chú nguồn, toàn văn ba bản và hồ sơ đánh giá cuối của từng bài. Người kiểm đã đối chiếu các nhóm nghĩa, lời lặp, điều kiện, chủ thể và đoạn kết, đồng thời đọc lại những đoạn được sửa trước khi khóa fingerprint. Không còn lỗi chặn được xác định trong phạm vi này; các giới hạn dịch thuật và độ dễ đọc vẫn được lưu trong lý do chấm từng tiêu chí.

| Bài | Trọng tâm và quyết định |
| --- | --- |
| MN11 | Cuộc hỏi đáp với du sĩ được trình bày như giả định của bài, không dựng một cuộc tranh luận đã xảy ra. Giữ bốn căn cứ, một cứu cánh với tám nét, hai kiến với năm mặt, bốn thủ và các trường hợp thiếu ba/hai/một thủ. Phân biệt giới cấm thủ với việc giữ giới. Chuỗi nguồn gốc có tám quan hệ, lần về vô minh; điều kiện đoạn vô minh và minh sinh đi trước buông thủ, không dao động và tự chứng Niết-bàn. |
| MN12 | Giữ đúng lời Sunakkhatta được thuật lại, lời đáp của Đức Phật và người hỏi tên cuối bài là Nāgasamāla. Cặp `sauttara/anuttara` theo Pāli, tránh đảo theo bản Anh ở hai ô tương ứng. Đủ mười lực, bốn vô úy, tám hội chúng, bốn cách sinh; năm thú và Niết-bàn được nói riêng. Khổ hạnh được kể cùng kết luận chưa đạt thánh tuệ, không chuyển thành bài tập hành xác. Giữ ngoại lệ Tịnh cư và tính giả định của bốn đệ tử sống trăm năm; lời về trí tuệ tuổi tám mươi của Đức Phật không thành lời hứa cho mọi người lớn tuổi. |
| MN13 | Giữ ba đề tài dục, sắc, thọ, mỗi đề tài có vị ngọt, nguy hại và lối thoát; niềm vui có thật được thừa nhận. Đúng người thuật ở `5.1`, chiều khổ phát sinh vì dục, bước tranh cãi rồi tấn công và các cặp không thể/có thể hướng dẫn. Ví dụ thân người qua già, bệnh, chết là giả định; giữ chín tình trạng sau chết và bốn thiền. Sự vô hại lúc an trú thiền là lời khẳng định, không thêm điều kiện “nếu”. Hình phạt cổ được kể gọn theo ý gây khổ, không thêm cơ chế tra tấn hoặc dùng vẻ ngoài để định giá con người. |
| MN14 | Lời đáp Mahānāma giữ cả tuệ thấy đúng và hỷ lạc ly dục hoặc điều tịch tịnh hơn; không đặt thêm tên quả Thánh cho “không trở lại với dục”. Phân biệt ba lớp lời trong hồi ức: Đức Phật kể, các Nigaṇṭha đáp và họ dẫn Nāṭaputta. Chủ trương tiêu nghiệp bằng đau đớn là điều đang bị chất vấn. Giữ đủ năm nhóm câu hỏi kiểm chứng, các mốc bảy xuống một rồi một lên bảy ngày đêm, cùng điều kiện không động thân/không nói trong so sánh năng lực. Các tu sĩ không biết không được dùng để phủ nhận nghiệp và tái sinh, hoặc quy mọi đau bệnh thành món nợ phải chịu. |
| MN15 | Người giảng là Mahāmoggallāna. Giữ mười sáu phẩm chất với mặt đối lại, phép suy từ điều không ưa ở người trở về mình và hai nhánh tự kiểm cho từng điều. Không có bất thiện thì vui và tiếp tục ngày đêm học thiện; có thì nỗ lực bỏ. Giữ gương hoặc bát nước trong và cả hai phản ứng. Lời “nhuốm giận dữ” giữ sắc thái `kodhasāmantā`; bướng bỉnh và ngạo mạn là hai phẩm chất được nêu cùng, không tự thêm quan hệ nhân quả. Khả năng giải trình dựa trên sự việc không biến thành yêu cầu nhận mọi lời buộc lỗi. |
| MN16 | Giữ hai nhóm năm điều cùng mặt chưa/đã từ bỏ, sáu nét dính mắc với dục lạc/thân/sắc và bốn mặt công phu xuyên suốt. Bốn như ý túc đều có định và hoạt động tinh cần; sự hăng hái được cộng riêng, không tạo như ý túc thứ năm. Động cơ sinh thiên không bị thu hẹp bằng chữ “chỉ”. Đủ mười lăm yếu tố dẫn đến **khả năng** phá vỏ, giác ngộ, an ổn khỏi ách. Ví dụ gà ấp đúng giữ tám/mười/mười hai trứng, dù không khởi ước vẫn có khả năng nở; không nhập nhánh ấp sai từ bài khác. |
| MN17 | Giữ bốn trường hợp giữa thành tựu tu tập và mức dễ/khó kiếm bốn vật dụng, áp dụng cho rừng, làng, thị trấn, thành phố, xứ sở và một người nương tựa. Niệm, định, đoạn tận lậu hoặc và an ổn tối thượng không bị rút thành cảm giác dễ chịu. Phân biệt rời ngay, cân nhắc rồi rời, cân nhắc rồi ở và ở/theo suốt đời. Theo Pāli, nhánh `23.7` không cần từ biệt, nhánh `24.9` từ biệt rồi rời. Câu theo ngay cả khi bị xua đuổi giữ đủ điều kiện của nguồn; không bịa động cơ thử học trò hoặc biến thành yêu cầu chịu bị làm hại trong đời thường. |
| MN18 | Phân biệt lời tóm tắt của Đức Phật, lời giải của Mahākaccāna, sự xác nhận của Đức Phật và ví dụ bánh mật do Ānanda nêu. Cử chỉ của Daṇḍapāṇi không được gán thêm động cơ. Giữ sáu miền giác quan cùng ba thời, thức/xúc/thọ/tưởng/suy nghĩ/phóng diễn, hai chiều điều kiện có/không, bảy tùy miên và tám hành vi tranh chấp. `Saṅkhā` không đổi thành `saṅkhāra`; khác biệt `bhavābhava` được ghi có giới hạn. Phần phủ định không thành chỉ dẫn làm mất giác quan hay cấm mọi tư duy; đoạn kết vẫn coi trọng khảo sát bằng trí tuệ. |
| MN19 | Giữ hai nhóm dục/sân/hại và ly dục/không sân/không hại, cả hai chiều huân tập. Hai người chăn bò ở hai mùa cho thấy cách canh thay đổi theo điều kiện. Suy tư thiện kéo dài có thể gây thân mệt, tâm xao, xa định; điều thiện không vì thế thành bất thiện. Đủ bốn thiền, ba minh theo ba canh, bốn sự thật và bốn mặt về lậu hoặc; giữ vế biết đã giải thoát dù bản Anh lược. Toàn phép ví đàn nai và tám tà/tám chánh được giải đúng đối ứng, không gán tính xấu cho nam/nữ hoặc coi mọi niềm vui là bẫy. |
| MN20 | Đủ năm cách, năm phép ví và kết quả lặp; chỉ chuyển sang cách sau khi tầm bất thiện vẫn khởi trong lúc dùng cách trước. Cách đầu phải đổi sang điều thiện; cách bốn giữ lựa chọn “làm lắng sự tạo tác” cùng giới hạn dịch. Cách năm thuật đủ nghiến răng, ép lưỡi, dùng tâm chế tâm trong ngữ cảnh tu tăng thượng tâm; không đổi thành bài tập tự gây đau hay cưỡng ép người khác. Đọc các câu rút `5.6`/`6.22` cùng công thức đầy đủ. Giữ đích đoạn ái, kiết sử, thấu hiểu mạn, hết khổ và kệ nhắc mười bài cuối phẩm. |

## Những sửa chữa đã được kiểm lại

Các thay đổi dưới đây được ghi trong hồ sơ đánh giá và đã được người kiểm đọc lại. Điểm trong bảng áp dụng cho bản sau sửa; không dùng fingerprint của bản trước để duyệt nội dung mới.

| Bài | Sửa chữa và kết quả kiểm lại |
| --- | --- |
| MN11 | Làm rõ giữ giới khác giới cấm thủ; bổ sung giải nghĩa cho bản trẻ và sửa cách nói bênh/chống để theo đúng quan hệ trong bài. Sau lượt kiểm MN14, sửa thêm `children/causes`: thọ trung tính là không dễ chịu cũng không khó chịu, không phải chưa nhận rõ mình vui hay khổ. |
| MN12 | Sửa `older-adults/other-minds` thành các trạng thái tâm có/không tham, sân, si; không đổi thành đoạn tận vĩnh viễn. Bổ sung nghĩa nhập môn của bốn niệm xứ cho trẻ. Mật độ tên riêng và chi tiết khổ hạnh còn cao, nên giữ nguyên `audience_fit = 8,9` của bản trẻ. |
| MN13 | Sửa tiêu đề `children/escape-desire` từ “bớt tham đắm” thành “từ bỏ tham đắm”, đúng phạm vi `mn13:16.2`. Giải ngắn tỳ-kheo, khất thực, Như Lai, Māra, Phạm thiên và diễn các cõi tái sinh xấu bằng từ dễ hiểu hơn; nội dung tái sinh vẫn được giữ. |
| MN14 | Sửa định nghĩa thọ trung tính trong `children/theory` và `older-adults/theory` thành không dễ chịu cũng không khó chịu. Người kiểm tìm cùng cách diễn đạt trong MN1–MN20 và sửa thêm đúng chỗ tương ứng của MN11. |
| MN15 | Ở bản trẻ và trưởng thành, đổi lời “đầy giận dữ” thành “nhuốm giận dữ” để giữ sắc thái `kodhasāmantā` tại `mn15:3.17–3.19`. Ở bản trẻ, đổi quan hệ “cứng đầu vì thấy mình hơn người” thành hai phẩm chất “cứng đầu và tự thấy mình hơn người”, theo `mn15:3.44–3.46`. |
| MN16 | Bỏ chữ “chỉ” trong tiêu đề đơn vị nghĩa và đoạn bản trẻ về mong muốn sinh thiên. `mn16:12.1–12.3` và `24.1–24.3` nêu động cơ ấy, không giới hạn vào trường hợp đó là động cơ duy nhất. |
| MN17 | Sửa lời giải khất thực trong `children/four-changes`, thay cách giải lặp chính từ cần giải bằng việc người tu nhận thức ăn từ người tự nguyện cúng. Các điều kiện ở/rời và bốn nhánh vẫn giữ nguyên. |
| MN18 | Bổ sung lời giải khất thực, tỳ-kheo và Như Lai tại ba chỗ dùng trong bản trẻ. Sửa `older-adults/meeting` để nói rõ Đức Phật vào Đại Lâm khi trở về từ khất thực, tránh gợi ý Ngài đã về tu viện rồi mới đi tiếp (`mn18:2.2`, `6.4`). Người kiểm đọc lại trọn bốn đoạn sửa trước khi khóa hồ sơ cuối. |
| MN19 | Bổ sung nghĩa tỳ-kheo, niệm, định và các danh hiệu cho trẻ; giải hỷ/lạc và tầm/tứ ở bản trưởng thành. Bỏ lời suy đoán về cách nhân vật nhìn căn cước của mình, chuyển về nhận xét có giới hạn về trọng tâm đoạn kể. |
| MN20 | Không phát hiện thay đổi bắt buộc sau lượt đối chiếu cuối. Hồ sơ ghi rõ đã kiểm điều kiện chuyển phương pháp, các câu rút và giới hạn của cách thứ tư/thứ năm. Những giới hạn đọc hiểu còn lại vẫn được ghi trong lý do chấm điểm. |

## Năm nguồn và cách đánh giá

Mỗi bài trong lô hiện khai báo đúng **năm phụ thuộc nguồn**, với đường dẫn và SHA-256 trong tệp diễn giải. Pāli là thẩm quyền cuối theo [quy trình dịch](../../skill/translation.md); bản tham khảo và chú thích giúp đối chiếu lựa chọn nghĩa.

| Nguồn | Đường dẫn mẫu và xuất xứ |
| --- | --- |
| Pāli Mahāsaṅgīti | `.cache/upstream/suttacentral/root/pli/ms/sutta/mn/{uid}_root-pli-ms.json`; Bilara `11c9d708978cde8ba61096d8a75f7ddfb846f639`. |
| Việt dự án | `content/translation/vi/project/sutta/mn/{uid}_translation-vi-project.json`; nhận diện chính xác nội dung thực dùng bằng SHA-256. |
| English Sujato | `.cache/upstream/suttacentral/translation/en/sujato/sutta/mn/{uid}_translation-en-sujato.json`; cùng commit Bilara đã khóa. |
| Việt Thích Minh Châu toàn văn | `.cache/upstream/sc-data/html_text/vi/pli/sutta/mn/{uid}.html`; `sc-data` `4d481d7cfbaeccad19fa85adc215d3c15ff43457`. Đây là văn bản HTML liên tục, không được tự gán segment Bilara. |
| Chú thích Việt dự án | `content/comment/vi/project/sutta/mn/{uid}_comment-vi-project.json`; nguồn biên tập hiện đại có hash riêng, không phải lời kinh. |

Các commit và ấn bản được ghi trong [khóa nguồn](../../source/suttacentral.lock.json); blob Bilara được đối chiếu bằng [manifest](../../source/upstream-manifest.json). Khoảng trống và dấu lược của bản tham khảo không được coi là xác nhận nghĩa. Chẳng hạn, MN15 có 201 ô Anh trống trong khi Pāli ghi đầy đủ 263 khóa; MN16 có chín chỗ Pāli lược và tám ô Anh trống. Những khác biệt như chủ thể lời nói, phủ định, thời điểm, mức khả năng và nghĩa thuật ngữ được xử lý theo nguồn đã khóa.

Mười hồ sơ cuối ghi việc đọc đủ năm tệp thực dùng, toàn bộ bản đồ ý và toàn văn ba bản của từng bài. Những tài liệu chỉ được chú thích nhắc tới — chẳng hạn từ điển, chú giải, kinh khác hoặc trang Budsas — không tự được tính là đã mở và đối chiếu độc lập trong lượt này. Năm mươi phụ thuộc nguồn tương ứng với năm tệp được kiểm hash cho mỗi bài trong lô.

Tác giả và người kiểm là các tác tử khác nhau của cùng **GPT-6 Astra Pro**, khai báo bằng ID `gpt-6-astra-pro` trong [danh mục công cụ](../../source/tooling.yaml). Đây là đánh giá biên tập giữa các tác tử cùng công cụ; chưa có học giả Pāli con người độc lập phê chuẩn hoặc thử đọc trực tiếp với ba nhóm tuổi. Điểm phù hợp lứa tuổi và dễ đọc phản ánh lượt đọc biên tập, có ghi những giới hạn còn lại. Các ví dụ hiện đại và gợi ý thực hành mang loại mục riêng; chúng giúp mở một phần ý nghĩa, không tự chứng minh đã có thiền định, trí tuệ hay giải thoát được kinh trình bày.

Các lời giải thuật ngữ chủ yếu ở mức nhập môn. Những chỗ còn nhiều cách dịch, như `bhavābhava`, `papañcasaññāsaṅkhā` và các danh xưng liên hệ `brahma` trong MN18, hoặc cách thứ tư của MN20, có ghi giới hạn theo nguồn thực đọc; hồ sơ không tuyên bố đã loại hết cách hiểu khác. Bản trẻ của các bài nhiều danh mục và thuật ngữ, đặc biệt MN12 và MN18, vẫn thích hợp đọc từng phần hoặc cùng người lớn hơn là bảo đảm mọi trẻ có thể tự đọc hiểu. Các bản trưởng thành và lớn tuổi cũng chưa có dữ liệu thử đọc; ví dụ phù hợp đời sống là lựa chọn biên tập, không phải kết luận thực nghiệm về cả nhóm tuổi.

## Kiểm tra dữ liệu và trạng thái đóng lô

Những kết quả đã được ghi nhận khi đóng lô:

- Tính lại từ JSON thực: 10 bài, 30 bản, 215 đơn vị nghĩa, 1.589 khóa Pāli; không thiếu hoặc trùng khóa trong bản đồ của từng bài.
- Chạy `auditExplanations("mn", uid)` cho từng UID từ `mn11` đến `mn20`: cả mười kết quả có `errors: []` và `sourceErrors: []`. Mỗi bài có năm phụ thuộc nguồn khớp hash, đủ cấu trúc và mã ý hợp lệ. Đây là kiểm cấu trúc/nguồn, không tự cấp điểm nghĩa hay trạng thái xuất bản.
- Người phụ trách lô đã đối chiếu lại cả mười bộ đề xuất cuối: **30 fingerprint nội dung và 50 phụ thuộc nguồn** khớp dữ liệu hiện hành. Mỗi bản có đủ mười điểm cùng lý do riêng; không còn lỗi chặn ghi trong hồ sơ. Bảng điểm đã được đối chiếu lại với 30 đánh giá được chọn trong metadata sau khi ghi nhận, gồm cả hồ sơ cuối của MN18.

Kết quả kiểm tra local của lô:

| Phần việc | Kết quả thực tế |
| --- | --- |
| Ghi nhận/áp dụng đánh giá | Đã ghi và áp dụng 30 lần duyệt qua CLI, theo thứ tự MN11 → MN20; cả mười bài có `complete: true`, ba bản `published` và đánh giá còn hiệu lực. |
| Validation | `npm run validate`: exit 0. Sau khi ghi và áp dụng metadata, chạy thêm `node --import tsx scripts/explanations.ts --check`: exit 0. |
| Unit test | `npm test`: **450 test, 449 đạt, 1 bỏ qua, 0 lỗi**. |
| Kiểm tra Astro | `npm run check`: exit 0; **118 tệp, 0 lỗi, 0 cảnh báo, 5 gợi ý**. |
| Build production của lô | API `build()` của Astro với cấu hình gốc và bộ dựng mặc định, lọc `getStaticPaths()` bằng hook công khai `setPrerenderer` xuống đúng MN11–MN20: **exit 0, dựng đủ 10 trang**. Runner tạm nằm ngoài repo; không thay component, cấu hình ảnh hoặc cấu hình production đã commit. |
| HTML production của 30 bản | Đối chiếu toàn bộ **877 đoạn văn** với JSON đã duyệt, gồm thứ tự, tiêu đề, loại mục, điểm và ngày đánh giá: khớp. **8.442 liên kết nguồn** khớp bản đồ và trỏ tới ID có thật trên trang. Cả 30 bản hiện đúng `published`; phần diễn giải giữ `data-pagefind-ignore`. |
| Báo cáo tiến độ | `node --import tsx scripts/explanations.ts --report`: **20/186 bài hoàn tất, 60 bản published, 498 bản chưa bắt đầu, 0 draft/review/stale/invalid; errors rỗng**. |
| Trình duyệt | Lô này kiểm HTML production của cả mười trang; chưa có lượt kiểm trình duyệt mới. Các kết quả trình duyệt đã ghi ở lô 01 giữ nguyên phạm vi lô 01. |
| GitHub Actions | **Không kiểm tra và không chờ**, theo chỉ dẫn bổ sung của người dùng ngày 2026-10-18. Đây không phải một kết quả CI đạt. |

**Giới hạn của kiểm build:** kết quả đạt ở trên là build production có phạm vi mười trang, không phải hoàn tất `npm run build` toàn site. Lượt build toàn site khởi chạy từ lô 01 đã được dừng ở giai đoạn tối ưu ảnh (exit 130); HTML cũ chưa có nội dung lô 02 nên không được dùng làm bằng chứng cho lô này. Runner giới hạn không chạy Pagefind và không xác nhận trạng thái triển khai production. Những kiểm tra về cấu trúc, nguồn, test và Astro được chạy riêng như bảng trên.

Có thể tái lập trạng thái đánh giá hiện hành bằng `npm run explanations:report`. Bảng điểm đã được đối chiếu với [metadata diễn giải MN](../../content/meta/explanations/sutta/mn); báo cáo này ghi phạm vi lô 02 tại ngày đóng lô, còn metadata và hash quyết định trạng thái hiện hành khi nguồn hoặc nội dung thay đổi.

## Tiếp tục

Lô kế tiếp theo thứ tự là **MN21–MN30**, sau khi PR của lô MN11–MN20 được merge. Việc chuẩn bị nguồn cho bài sau không được tính thành một bài diễn giải hoàn tất. Chỉ dẫn không kiểm tra/chờ GitHub Actions không thay việc đọc nguồn, kiểm chéo, chấm điểm và kiểm tra local.
