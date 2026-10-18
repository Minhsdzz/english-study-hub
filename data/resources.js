const STUDY_RESOURCES = [
  // 1. Xây dựng Kho Từ Vựng Chi Tiết
  {
    id: "res-vocab-1",
    category: "vocab",
    categoryName: "Từ vựng & Phát âm",
    title: "Vocabulary.com",
    description: "Trang web học và làm bài tập trắc nghiệm củng cố ngữ cảnh từ vựng.",
    url: "https://www.vocabulary.com/learner/",
    tag: "Bài tập từ vựng"
  },
  {
    id: "res-vocab-2",
    category: "vocab",
    categoryName: "Từ vựng & Phát âm",
    title: "Từ điển Longman (LDOCE)",
    description: "Tra từ chuẩn xác: ngữ nghĩa, IPA, phát âm audio, collocations và câu ví dụ.",
    url: "https://www.ldoceonline.com/",
    tag: "Từ điển chính"
  },
  {
    id: "res-vocab-3",
    category: "vocab",
    categoryName: "Từ vựng & Phát âm",
    title: "Speech Topic Generator",
    description: "Tạo chủ đề ngẫu nhiên để học từ vựng và luyện phản xạ nói mỗi ngày.",
    url: "https://speechtopicgen.com/",
    tag: "Phản xạ"
  },
  {
    id: "res-vocab-4",
    category: "vocab",
    categoryName: "Từ vựng & Phát âm",
    title: "Natural Readers",
    description: "Trang web luyện giọng đọc AI (Text-to-Speech) giúp đối chiếu ngữ điệu và phát âm.",
    url: "https://www.naturalreaders.com/",
    tag: "AI Voice"
  },
  {
    id: "res-vocab-5",
    category: "vocab",
    categoryName: "Từ vựng & Phát âm",
    title: "Danh sách từ vựng cơ bản Cambridge (PDF)",
    description: "Tài liệu tổng hợp từ vựng nền tảng chuẩn của Cambridge.",
    url: "https://www.cambridgeenglish.org/Images/220994-vocabulary-list.pdf",
    tag: "PDF Từ vựng"
  },
  {
    id: "res-vocab-6",
    category: "vocab",
    categoryName: "Từ vựng & Phát âm",
    title: "1000 từ tiếng Anh thông dụng nhất",
    description: "Danh sách 1000 từ vựng cốt lõi sử dụng thường xuyên nhất trong tiếng Anh.",
    url: "https://www.1000mostcommonenglishwords.com/",
    tag: "Cơ bản"
  },

  // 2. Đọc và Học Ngữ Pháp Không Nhàm Chán
  {
    id: "res-read-1",
    category: "reading",
    categoryName: "Đọc & Ngữ pháp",
    title: "Lingua Reading",
    description: "Kho bài đọc phân theo trình độ (A1-C1) kèm câu hỏi kiểm tra đọc hiểu.",
    url: "https://lingua.com/english/reading/",
    tag: "Luyện đọc"
  },
  {
    id: "res-read-2",
    category: "reading",
    categoryName: "Đọc & Ngữ pháp",
    title: "Ereading Worksheets",
    description: "Kho bài tập thực hành ngữ pháp và cấu trúc đọc hiểu phong phú.",
    url: "https://www.ereadingworksheets.com/",
    tag: "Bài tập ngữ pháp"
  },
  {
    id: "res-read-3",
    category: "reading",
    categoryName: "Đọc & Ngữ pháp",
    title: "British Council LearnEnglish",
    description: "Nguồn tài liệu đọc hiểu và ngữ pháp chuẩn quốc tế theo từng cấp độ.",
    url: "https://learnenglish.britishcouncil.org/",
    tag: "Chuẩn quốc tế"
  },

  // 3. Bứt Phá Luyện Nghe & Giao Tiếp Phản Xạ
  {
    id: "res-listen-1",
    category: "listening",
    categoryName: "Nghe & Giao tiếp",
    title: "Episoden",
    description: "Kết nối và trò chuyện tiếng Anh 1-on-1 miễn phí với bạn bè quốc tế.",
    url: "https://www.episoden.com/faq/1-1",
    tag: "Giao tiếp 1-1"
  },
  {
    id: "res-listen-2",
    category: "listening",
    categoryName: "Nghe & Giao tiếp",
    title: "Free4talk",
    description: "Tham gia các phòng trò chuyện trực tuyến miễn phí với người học toàn cầu.",
    url: "https://www.free4talk.com/",
    tag: "Phòng nói chuyện"
  },
  {
    id: "res-listen-3",
    category: "listening",
    categoryName: "Nghe & Giao tiếp",
    title: "YouTube: English Easy Practice",
    description: "Luyện nghe thụ động và nhại lại (Shadowing) qua các bài hội thoại thực tế.",
    url: "https://youtube.com/@englisheasypractice",
    tag: "Shadowing"
  },
  {
    id: "res-listen-4",
    category: "listening",
    categoryName: "Nghe & Giao tiếp",
    title: "YouTube: Learn English with Jessica",
    description: "Kênh luyện nghe và hội thoại hoạt hình theo tình huống đời sống.",
    url: "https://youtube.com/@learnenglishwithjessica",
    tag: "Hội thoại"
  },
  {
    id: "res-listen-5",
    category: "listening",
    categoryName: "Nghe & Giao tiếp",
    title: "Speak English with Vanessa",
    description: "Bài học hội thoại tiếng Anh chuyên sâu (1.5 HOUR English Conversation Lesson).",
    url: "https://www.youtube.com/@SpeakEnglishWithVanessa",
    tag: "Video bài giảng"
  },
  {
    id: "res-listen-6",
    category: "listening",
    categoryName: "Nghe & Giao tiếp",
    title: "75 Chủ đề hội thoại thông dụng",
    description: "Danh sách 75 chủ đề giao tiếp hàng ngày có kèm audio nghe và phụ đề.",
    url: "https://basicenglishspeaking.com/daily-english-conversation-topics/",
    tag: "75 Chủ đề"
  },
  {
    id: "res-listen-7",
    category: "listening",
    categoryName: "Nghe & Giao tiếp",
    title: "Daily Dictation",
    description: "Bài tập nghe từng câu và gõ chép chính tả giúp bắt âm, nối âm cực nhạy.",
    url: "https://dailydictation.com/exercises/",
    tag: "Chép chính tả"
  },
  {
    id: "res-listen-8",
    category: "listening",
    categoryName: "Nghe & Giao tiếp",
    title: "Everyday Conversations (PDF Chính phủ Mỹ)",
    description: "Tài liệu PDF các cuộc hội thoại Anh - Mỹ chuẩn từ American English.",
    url: "https://americanenglish.state.gov/files/ae/resource_files/everyday_conversations_-_learning_american_english.pdf",
    tag: "PDF Hội thoại"
  },

  // 4. Tự Check-up & Kiểm Tra Trình Độ Định Kỳ
  {
    id: "res-test-1",
    category: "test",
    categoryName: "Kiểm 