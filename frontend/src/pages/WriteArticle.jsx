import React, { useState } from "react";
import { Sparkles, SquarePen } from "lucide-react";

const WriteArticle = () => {
  // Các tùy chọn độ dài bài viết
  const articleLength = [
    { length: 500, text: "Ngắn (500-800 từ)" },
    { length: 1200, text: "Trung bình (800-1200 từ)" },
    { length: 1600, text: "Dài (1600+ từ)" },
  ];

  // State để lưu độ dài bài viết được chọn
  const [selectedLength, setSelectedLength] = useState(articleLength[0]);
  // State để lưu nội dung input từ người dùng
  const [input, setInput] = useState("");

  // Hàm xử lý khi submit form
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Phần Form cấu hình */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        {/* Tiêu đề form */}
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Cấu hình bài viết</h1>
        </div>

        {/* Input chủ đề bài viết */}
        <p className="mt-6 text-sm font-medium">Chủ đề bài viết</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="Tương lai của trí tuệ nhân tạo là..."
          required
          type="text"
          defaultValue=""
        />

        {/* Chọn độ dài bài viết */}
        {/* Label cho phần chọn độ dài bài viết */}
        <p className="mt-4 text-sm font-medium">Độ dài bài viết</p>

        {/* Container chứa các nút chọn độ dài bài viết */}
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {/* Duyệt qua mảng articleLength để render các nút chọn */}
          {articleLength.map((item, index) => (
            <span
              // Khi click vào nút, cập nhật state selectedLength với item được chọn
              onClick={() => setSelectedLength(item)}
              // Áp dụng class động: nếu item hiện tại được chọn thì hiển thị màu xanh,
              // ngược lại hiển thị màu xám
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                selectedLength.text === item.text
                  ? "bg-blue-50 text-blue-500" // Style khi được chọn
                  : "text-gray-500 border-gray-300" // Style khi không được chọn
              }`}
              // Key duy nhất cho mỗi phần tử trong danh sách
              key={index}
            >
              {/* Hiển thị text mô tả độ dài bài viết (VD: "Ngắn (500-800 từ)") */}
              {item.text}
            </span>
          ))}
        </div>

        <br />

        {/* Nút submit để tạo bài viết */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <SquarePen className="w-5" aria-hidden="true" />
          Tạo bài viết
        </button>
      </form>

      {/* Phần hiển thị kết quả */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        {/* Tiêu đề phần output */}
        <div className="flex items-center gap-3">
          <SquarePen className="w-5 h-5 text-[#4A7AFF]" aria-hidden="true" />
          <h1 className="text-xl font-semibold">Kết quả bài viết</h1>
        </div>

        {/* Nội dung placeholder khi chưa có bài viết */}
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <SquarePen className="w-9 h-9" aria-hidden="true" />
            <p>Nhập chủ đề và nhấn "Tạo bài viết" để bắt đầu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;
