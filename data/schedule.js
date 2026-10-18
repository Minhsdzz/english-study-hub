const WEEKLY_SCHEDULE = [
  {
    id: "mon-wed-fri",
    days: [1, 3, 5], // Thứ 2, Thứ 4, Thứ 6
    dayLabel: "Thứ 2, Thứ 4, Thứ 6",
    focus: "Tập trung Từ vựng, Nghe & Chép chính tả",
    sessions: [
      {
        period: "Sáng (25–30 phút)",
        title: "Từ vựng & Phát âm",
        goal: "5–10 từ mới/ngày",
        tasks: [
          {
            id: "mwf-m1",
            name: "Chọn 5–10 từ vựng mục tiêu",
            detail: "Lấy từ Danh sách từ cơ bản Cambridge hoặc 1000 từ thông dụng nhất.",
            duration: 10,
            links: [
              { label: "Cambridge PDF", url: "https://www.cambridgeenglish.org/Images/220994-vocabulary-list.pdf" },
              { label: "1000 từ thông dụng", url: "https://www.1000mostcommonenglishwords.com/" }
            ]
          },
          {
            id: "mwf-m2",
            name: "Tra từ & Ghi chép",
            detail: "Tra ngữ nghĩa, IPA, phát âm chuẩn và câu ví dụ trên Longman. Ghi lại collocations/phrasal verbs đi kèm.",
            duration: 10,
            links: [
              { label: "Từ điển Longman", url: "https://www.ldoceonline.com/" }
            ]
          },
          {
            id: "mwf-m3",
            name: "Luyện tập ngữ cảnh",
            detail: "Thực hành bài tập trắc nghiệm trên Vocabulary.com để củng cố ngữ cảnh sử dụng của từ.",
            duration: 10,
            links: [
              { label: "Vocabulary.com", url: "https://www.vocabulary.com/learner/" }
            ]
          }
        ]
      },
      {
        period: "Tối (30–45 phút)",
        title: "Luyện nghe & Chép chính tả",
        goal: "1 bài nghe short/medium",
        tasks: [
          {
            id: "mwf-e1",
            name: "Chép chính tả (20 phút)",
            detail: "Hoàn thành 1 bài nghe ngắn tại Daily Dictation. Nghe từng câu, gõ lại chính xác, kiểm tra lỗi nối âm và ngữ âm.",
            duration: 20,
            links: [
              { label: "Daily Dictation", url: "https://dailydictation.com/exercises/" }
            ]
          },
          {
            id: "mwf-e2",
            name: "Nghe thụ động & Nhại lại - Shadowing (15–20 phút)",
            detail: "Xem 1 video hội thoại trên English Easy Practice hoặc Learn English with Jessica. Bật phụ đề, đọc nhại lại theo nhân vật.",
            duration: 20,
            links: [
              { label: "English Easy Practice", url: "https://youtube.com/@englisheasypractice" },
              { label: "Learn English with Jessica", url: "https://youtube.com/@learnenglishwithjessica" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "tue-thu-sat",
    days: [2, 4, 6], // Thứ 3, Thứ 5, Thứ 7
    dayLabel: "Thứ 3, Thứ 5, Thứ 7",
    focus: "Tập trung Đọc hiểu, Ngữ pháp & Giao tiếp phản xạ",
    sessions: [
      {
        period: "Sáng (25–30 phút)",
        title: "Đọc hiểu & Ngữ pháp",
        goal: "1 bài đọc ngắn + 1 điểm ngữ pháp",
        tasks: [
          {
            id: "tts-m1",
            name: "Luyện đọc Skimming & Scanning (15 phút)",
            detail: "Đọc 1 bài theo trình độ trên Lingua hoặc British Council. Đọc lướt lấy ý chính, đọc chi tiết tìm từ mới và trả lời câu hỏi.",
            duration: 15,
            links: [
              { label: "Lingua Reading", url: "https://lingua.com/english/reading/" },
              { label: "British Council", url: "https://learnenglish.britishcouncil.org/" }
            ]
          },
          {
            id: "tts-m2",
            name: "Củng cố ngữ pháp (15 phút)",
            detail: "Làm 1 bài tập thực hành ngữ pháp/cấu trúc liên quan tại Ereading Worksheets để ghi nhớ quy tắc.",
            duration: 15,
            links: [
              { label: "Ereading Worksheets", url: "https://www.ereadingworksheets.com/" }
            ]
          }
        ]
      },
      {
        period: "Tối (45–60 phút)",
        title: "Luyện nói & Giao tiếp phản xạ",
        goal: "1–2 chủ đề hội thoại + 1 phiên nói 20 phút",
        tasks: [
          {
            id: "tts-e1",
            name: "Chuẩn bị mẫu câu (15–20 phút)",
            detail: "Học mẫu câu theo 1–2 chủ đề trong 75 chủ đề hội thoại hoặc PDF Hội thoại Anh - Mỹ. Đọc to nhiều lần để quen cơ miệng.",
            duration: 20,
            links: [
              { label: "75 Chủ đề hội thoại", url: "https://basicenglishspeaking.com/daily-english-conversation-topics/" },
              { label: "PDF Hội thoại Anh - Mỹ", url: "https://americanenglish.state.gov/files/ae/resource_files/everyday_conversations_-_learning_american_english.pdf" }
            ]
          },
          {
            id: "tts-e2",
            name: "Thực hành giao tiếp trực tiếp (25–30 phút)",
            detail: "Ghép cặp luyện nói 1-on-1 với người nước ngoài trên Episoden hoặc tham gia phòng nói chuyện trên Free4talk.",
            duration: 30,
            links: [
              { label: "Episoden (1-on-1)", url: "https://www.episoden.com/faq/1-1" },
              { label: "Free4talk", url: "https://www.free4talk.com/" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "sunday",
    days: [0], // Chủ Nhật
    dayLabel: "Chủ Nhật",
    focus: "Ôn tập & Kiểm tra trình độ định kỳ",
    sessions: [
      {
        period: "Sáng (30 phút)",
        title: "Ôn tập từ vựng & Chỉnh sửa phát âm với AI",
        goal: "Ôn 15–30 từ vựng trong tuần",
        tasks: [
          {
            id: "sun-m1",
            name: "Phản xạ từ vựng (15 phút)",
            detail: "Tạo chủ đề ngẫu nhiên bằng Speech Topic Generator. Nói tự do 1–2 phút mỗi chủ đề, lồng ghép 15–30 từ đã học trong tuần.",
            duration: 15,
            links: [
              { label: "Speech Topic Generator", url: "https://speechtopicgen.com/" }
            ]
          },
          {
            id: "sun-m2",
            name: "Luyện ngữ điệu AI (15 phút)",
            detail: "Dán đoạn văn bản đã viết/đọc trong tuần vào Natural Readers để nghe AI đọc mẫu, thu âm giọng bản thân và so sánh.",
            duration: 15,
            links: [
              { label: "Natural Readers", url: "https://www.naturalreaders.com/" }
            ]
          }
        ]
      },
      {
        period: "Tối (30–45 phút)",
        title: "Kiểm tra trình độ & Đánh giá tiến độ",
        goal: "1 bài kiểm tra ngắn",
        tasks: [
          {
            id: "sun-e1",
            name: "Thực hiện bài test tổng hợp",
            detail: "Làm 1 bài test ngắn (Nghe/Đọc/Ngữ pháp) trên Test English hoặc Use English để đánh giá tiến bộ theo tuần.",
            duration: 35,
            links: [
              { label: "Test-English", url: "https://test-english.com" },
              { label: "Use English", url: "https://useenglish.com" }
            ]
          }
        ]
      }
    ]
  }
];