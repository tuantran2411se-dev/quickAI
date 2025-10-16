import logo from "./logo.svg";
import gradientBackground from "./gradientBackground.png";
import user_group from "./user_group.png";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import profile_img_1 from "./profile_img_1.png";
import arrow_icon from "./arrow_icon.svg";
import {
  SquarePen,
  Hash,
  Image,
  Eraser,
  Scissors,
  FileText,
} from "lucide-react";
import ai_gen_img_1 from "./ai_gen_img_1.png";
import ai_gen_img_2 from "./ai_gen_img_2.png";
import ai_gen_img_3 from "./ai_gen_img_3.png";

export const assets = {
  logo,
  gradientBackground,
  user_group,
  star_icon,
  star_dull_icon,
  profile_img_1,
  arrow_icon,
};

export const AiToolsData = [
  {
    title: "Viết Bài Bằng AI",
    description:
      "Tạo các bài viết chất lượng cao, hấp dẫn về bất kỳ chủ đề nào với công nghệ viết AI của chúng tôi.",
    Icon: SquarePen,
    bg: { from: "#3588F2", to: "#0BB0D7" },
    path: "/ai/write-article",
  },
  {
    title: "Tạo Tiêu Đề Blog",
    description:
      "Tìm tiêu đề hoàn hảo, hấp dẫn cho bài đăng blog của bạn với công cụ tạo tiêu đề AI.",
    Icon: Hash,
    bg: { from: "#B153EA", to: "#E549A3" },
    path: "/ai/blog-titles",
  },
  {
    title: "Tạo Ảnh Bằng AI",
    description:
      "Tạo hình ảnh tuyệt đẹp với công cụ tạo ảnh AI của chúng tôi, Trải nghiệm sức mạnh của AI",
    Icon: Image,
    bg: { from: "#20C363", to: "#11B97E" },
    path: "/ai/generate-images",
  },
  {
    title: "Xóa Phông Nền",
    description:
      "Dễ dàng xóa phông nền khỏi hình ảnh của bạn với công cụ AI của chúng tôi.",
    Icon: Eraser,
    bg: { from: "#F76C1C", to: "#F04A3C" },
    path: "/ai/remove-background",
  },
  {
    title: "Xóa Đối Tượng",
    description:
      "Xóa các đối tượng không mong muốn khỏi hình ảnh của bạn một cách liền mạch với công cụ AI.",
    Icon: Scissors,
    bg: { from: "#5C6AF1", to: "#427DF5" },
    path: "/ai/remove-object",
  },
  {
    title: "Đánh Giá CV",
    description:
      "Nhận đánh giá CV từ AI để cải thiện cơ hội có được công việc mơ ước của bạn.",
    Icon: FileText,
    bg: { from: "#12B7AC", to: "#08B6CE" },
    path: "/ai/review-resume",
  },
];

export const dummyTestimonialData = [
  {
    image: assets.profile_img_1,
    name: "John Doe",
    title: "Giám Đốc Marketing, TechCorp",
    content:
      "ContentAI đã cách mạng hóa quy trình làm việc nội dung của chúng tôi. Chất lượng bài viết vượt trội và tiết kiệm hàng giờ làm việc mỗi tuần.",
    rating: 4,
  },
  {
    image: assets.profile_img_1,
    name: "Jane Smith",
    title: "Người Sáng Tạo Nội Dung, TechCorp",
    content:
      "ContentAI đã làm cho quá trình tạo nội dung của chúng tôi trở nên dễ dàng. Các công cụ AI đã giúp chúng tôi sản xuất nội dung chất lượng cao nhanh hơn bao giờ hết.",
    rating: 5,
  },
  {
    image: assets.profile_img_1,
    name: "David Lee",
    title: "Biên Tập Viên Nội Dung, TechCorp",
    content:
      "ContentAI đã thay đổi quá trình tạo nội dung của chúng tôi. Các công cụ AI đã giúp chúng tôi sản xuất nội dung chất lượng cao nhanh hơn bao giờ hết.",
    rating: 4,
  },
];

export const dummyCreationData = [
  {
    id: 9,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt: "Tạo tiêu đề blog cho từ khóa blog trong danh mục Công nghệ.",
    content:
      "Dưới đây là một số lựa chọn tiêu đề blog cho blog công nghệ, với nhiều góc độ khác nhau:\n\n**Chung & Rộng:**\n\n*   Blog Công Nghệ: Tin Tức, Đánh Giá và Nhận Định\n*   Công Nghệ Hôm Nay: Liều Lượng Công Nghệ Hàng Ngày\n*   Tương Lai Là Bây Giờ: Khám Phá Thế Giới Công Nghệ\n*   Chuyện Công Nghệ: Mở Ra Những Đổi Mới Mới Nhất\n\n**Cụ Thể & Hấp Dẫn Hơn:**\n\n*   Giải Mã Công Nghệ: Hiểu Rõ Thế Giới Số\n*   Vượt Xa Thiết Bị: The",
    type: "blog-title",
    publish: false,
    likes: [],
    created_at: "2025-07-01T11:09:50.492Z",
    updated_at: "2025-07-01T11:09:50.492Z",
  },
  {
    id: 8,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt: "Tạo tiêu đề blog cho từ khóa blog trong danh mục Tổng hợp.",
    content:
      "Dưới đây là một số lựa chọn tiêu đề blog cho blog về các blog trong danh mục Tổng hợp, từ đơn giản đến sáng tạo hơn:\n\n**Đơn Giản:**\n\n*   Blog Về Blog: Mọi Thứ Bạn Cần Biết Về Blogging\n*   Góc Nhìn Blogging: Mẹo, Thủ Thuật và Xu Hướng\n*   Hướng Dẫn Của Bạn Về Thế Giới Blogging\n\n**Sáng Tạo Hơn:**\n\n*   Vượt Qua Bài Viết: Khám Phá Nghệ Thuật Blogging\n*   Mở Khóa Blogosphere: Điều Hướng Thế Giới Viết Online",
    type: "blog-title",
    publish: false,
    likes: [],
    created_at: "2025-07-01T11:08:10.450Z",
    updated_at: "2025-07-01T11:08:10.450Z",
  },
  {
    id: 7,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt: "Viết một bài viết về AI Với Lập Trình Ngắn Gọn (500-800 từ).",
    content:
      "## AI và Lập Trình: Mối Quan Hệ Cộng Sinh Định Hình Tương Lai\n\nTrí tuệ nhân tạo (AI) và lập trình, từng là các lĩnh vực riêng biệt, giờ đây đã gắn kết chặt chẽ, tạo nên mối quan hệ cộng sinh mạnh mẽ đang cách mạng hóa các ngành công nghiệp và thúc đẩy đổi mới. Hiểu được mối liên hệ này là rất quan trọng đối với bất kỳ ai muốn định hướng trong tương lai của công nghệ.\n\nỞ cốt lõi, AI là khả năng của máy móc bắt chước hành vi thông minh của con người. Điều này đạt được thông qua các thuật toán, về bản chất là tập hợp các hướng dẫn được các lập trình viên - những người viết mã - tạo ra một cách tỉ mỉ. Do đó, lập trình là xương sống của AI, cung cấp ngôn ngữ và cấu trúc cần thiết để biến các thuật toán này thành hiện thực.\n\n**Lập Trình Thúc Đẩy AI: Xây Dựng Nền Tảng**\n\nCác mô hình AI không xuất hiện một cách kỳ diệu. Chúng được xây dựng, huấn luyện và triển khai bằng mã. Đây là cách:\n\n*   **Tiền Xử Lý Dữ Liệu:** Dữ liệu thô, nguồn sống của AI, thường lộn xộn và không thể sử dụng ở dạng ban đầu. Các lập trình viên sử dụng ngôn ngữ lập trình như Python với các thư viện như Pandas và NumPy để làm sạch, chuyển đổi và chuẩn bị dữ liệu này để huấn luyện. Điều này bao gồm xử lý các giá trị thiếu, loại bỏ sự không nhất quán và định dạng dữ liệu vào cấu trúc phù hợp.\n*   **Phát Triển Mô Hình:** Các lập trình viên sử dụng ngôn ngữ lập trình như Python và R, kết hợp với các thư viện học máy như TensorFlow, PyTorch và scikit-learn, để xây dựng và huấn luyện các mô hình AI. Các thư viện này cung cấp các chức năng và công cụ được xây dựng sẵn giúp đơn giản hóa quá trình tạo các thuật toán phức tạp.\n*   **Triển Khai và Tích Hợp:** Sau khi được huấn luyện, các mô hình AI cần được triển khai và tích hợp vào các ứng dụng thực tế. Điều này liên quan đến việc viết mã để kết nối mô hình với các hệ thống hiện có, xử lý đầu vào của người dùng và trình bày kết quả một cách thân thiện với người dùng.\n*   **Bảo Trì và Tối Ưu Hóa:** Các mô hình AI không phải là các thực thể tĩnh. Chúng đòi hỏi giám sát, bảo trì và tối ưu hóa liên tục để đảm bảo chúng vẫn chính xác và hiệu quả. Các lập trình viên đóng vai trò quan trọng trong việc xác định và giải quyết các vấn đề về hiệu suất, huấn luyện lại các mô hình với dữ liệu mới và điều chỉnh chúng theo các yêu cầu thay đổi.\n\n**AI Trao Quyền Cho Lập Trình: Cách Mạng Hóa Phát Triển**\n\nMối quan hệ không chỉ một chiều. AI cũng đang biến đổi cách thực hiện lập trình, làm cho các nhà phát triển hiệu quả và năng suất hơn.\n\n*   **Hoàn Thành và Đề Xuất Mã:** Các công cụ được hỗ trợ bởi AI như GitHub Copilot và Tabnine phân tích ngữ cảnh mã và đề xuất các đoạn mã, giảm các tác vụ lặp đi lặp lại và tăng tốc phát triển. Các công cụ này học từ các kho mã khổng lồ và có thể dự đoán những gì nhà phát triển có thể viết tiếp theo, tiết kiệm đáng kể thời gian và công sức.\n*   **Kiểm Thử và Gỡ Lỗi Tự Động:** AI có thể tự động hóa quá trình kiểm thử mã và xác định lỗi. Bằng cách phân tích các mẫu mã và xác định các lỗ hổng tiềm ẩn, các công cụ AI có thể giúp các nhà phát triển phát hiện lỗi sớm và cải thiện chất lượng mã.\n*   **Tạo Mã:** AI ngày càng có khả năng tạo mã từ các mô tả ngôn ngữ tự nhiên. Điều này cho phép các nhà phát triển tập trung vào các khía cạnh cấp cao hơn của thiết kế phần mềm và để lại các tác vụ viết mã tẻ nhạt hơn cho AI.\n*   **Học Tập Được Cá Nhân Hóa:** AI có thể cá nhân hóa trải nghiệm học tập cho các lập trình viên đầy tham vọng bằng cách điều chỉnh nội dung giáo dục và cung cấp phản hồi cá nhân. Điều này có thể làm cho việc học lập trình hiệu quả và hấp dẫn hơn.\n\n**Tương Lai: Hợp Tác và Chuyên Môn Hóa**\n\nTương lai của AI và lập trình là sự hợp tác và chuyên môn hóa ngày càng tăng. Khi AI trở nên tinh vi hơn, các lập trình viên sẽ cần tập trung vào các nhiệm vụ cấp cao hơn như thiết kế kiến trúc AI, quản lý các đường ống dữ liệu và đảm bảo các cân nhắc đạo đức được giải quyết.\n\nNhu cầu về các chuyên gia có kỹ năng hiểu cả AI và lập trình đang tăng nhanh. Các cá nhân với bộ kỹ năng này được định vị tốt để dẫn đầu trong việc phát triển các giải pháp sáng tạo được hỗ trợ bởi AI trên nhiều ngành công nghiệp.\n\n**Tóm lại,** AI và lập trình không phải là các thực thể riêng biệt mà là hai mặt của cùng một đồng xu. Lập trình cung cấp nền tảng cho AI, trong khi AI trao quyền cho lập trình, dẫn đến một quá trình phát triển hiệu quả và sáng tạo hơn. Hiểu mối quan hệ cộng sinh này là điều cần thiết đối với bất kỳ ai muốn phát triển trong bối cảnh công nghệ đang phát triển nhanh chóng. Khi AI tiếp tục tiến bộ, nhu cầu về các chuyên gia có kỹ năng có thể kết nối",
    type: "article",
    publish: false,
    likes: [],
    created_at: "2025-07-01T11:07:51.312Z",
    updated_at: "2025-07-01T11:07:51.312Z",
  },
];

export const dummyPublishedCreationData = [
  {
    id: 1,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt:
      "Tạo hình ảnh Một cậu bé đang ở trên thuyền, và đang câu cá theo phong cách Anime.",
    content: ai_gen_img_1,
    type: "image",
    publish: true,
    likes: [
      "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
      "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
    ],
    created_at: "2025-06-19T09:02:25.035Z",
    updated_at: "2025-06-19T09:58:37.552Z",
  },
  {
    id: 2,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt:
      "Tạo hình ảnh Một cậu bé đang đạp xe trên đường và chiếc xe đạp đến từ năm 2201 theo phong cách Anime.",
    content: ai_gen_img_2,
    type: "image",
    publish: true,
    likes: [
      "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
      "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
    ],
    created_at: "2025-06-19T08:16:54.614Z",
    updated_at: "2025-06-19T09:58:40.072Z",
  },
  {
    id: 3,
    user_id: "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
    prompt:
      "Tạo hình ảnh một cậu bé lái xe trên bầu trời theo phong cách Thực tế.",
    content: ai_gen_img_3,
    type: "image",
    publish: true,
    likes: ["user_2yaW5EHzeDfQbXdAJWYFnZo2bje"],
    created_at: "2025-06-23T11:29:23.351Z",
    updated_at: "2025-06-23T11:29:44.434Z",
    __v: 1,
  },
];
