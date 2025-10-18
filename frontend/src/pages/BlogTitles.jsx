import React, { useState } from "react";
import { Sparkles, Hash } from "lucide-react";

const BlogTitles = () => {
  // State để lưu nội dung input từ người dùng
  const [input, setInput] = useState("");
  // State để lưu danh mục blog được chọn
  const [selectedCategory, setSelectedCategory] = useState("Chung");

  // Danh sách các danh mục blog có sẵn
  const blogCategories = [
    "Chung",
    "Công nghệ",
    "Kinh doanh",
    "Sức khỏe",
    "Phong cách sống",
    "Giáo dục",
    "Du lịch",
    "Ẩm thực",
  ];

  // Hàm xử lý khi submit form
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ input, category: selectedCategory });
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
          <Sparkles className="w-6 text-[#8E37EB]" aria-hidden="true" />
          <h1 className="text-xl font-semibold">Tạo tiêu đề blog</h1>
        </div>

        {/* Input từ khóa */}
        <p className="mt-6 text-sm font-medium">Từ khóa</p>
        <input
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="Tương lai của trí tuệ nhân tạo là..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Chọn danh mục blog */}
        {/* Label cho phần chọn danh mục */}
        <p className="mt-4 text-sm font-medium">Danh mục</p>

        {/* Container chứa các nút chọn danh mục */}
        <div className="mt-3 grid grid-cols-3 gap-3">
          {/* Duyệt qua mảng blogCategories để render các nút chọn */}
          {blogCategories.map((item) => (
            <span
              // Key duy nhất cho mỗi phần tử trong danh sách
              key={item}
              // Khi click vào nút, cập nhật state selectedCategory với item được chọn
              onClick={() => setSelectedCategory(item)}
              // Áp dụng class động: nếu item hiện tại được chọn thì hiển thị màu tím,
              // ngược lại hiển thị màu xám
              className={`text-xs text-center px-4 py-2 border rounded-full cursor-pointer ${
                selectedCategory === item
                  ? "bg-purple-50 text-purple-700" // Style khi được chọn
                  : "text-gray-500 border-gray-300" // Style khi không được chọn
              }`}
            >
              {/* Hiển thị tên danh mục */}
              {item}
            </span>
          ))}
        </div>

        <br />

        {/* Nút submit để tạo tiêu đề */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <Hash className="w-5" aria-hidden="true" />
          Tạo tiêu đề
        </button>
      </form>

      {/* Phần hiển thị tiêu đề được tạo */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 h-96">
        {/* Tiêu đề phần output */}
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-[#8E37EB]" aria-hidden="true" />
          <h1 className="text-xl font-semibold">Tiêu đề được tạo</h1>
        </div>

        {/* Nội dung placeholder khi chưa có tiêu đề được tạo */}
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Hash className="w-9 h-9" aria-hidden="true" />
            <p>Nhập chủ đề và nhấn "Tạo tiêu đề" để bắt đầu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitles;
