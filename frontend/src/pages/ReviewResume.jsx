import React, { useState } from "react";
import { Sparkles, FileText } from "lucide-react";

const ReviewResume = () => {
  // State lưu trữ file CV được tải lên
  const [input, setInput] = useState("");

  // Hàm xử lý khi submit form
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    // Thêm logic đánh giá CV ở đây
  };

  return (
    // Container chính - có thể cuộn dọc, padding 6, flex wrap để responsive
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Phần Form - Nhập liệu */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        {/* Tiêu đề form với icon Sparkles màu xanh lá */}
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#00DA83]" aria-hidden="true" />
          <h1 className="text-xl font-semibold">Đánh Giá CV</h1>
        </div>

        {/* Label cho input file */}
        <p className="mt-6 text-sm font-medium">Tải lên CV</p>
        {/* Input để chọn file PDF */}
        <input
          accept="application/pdf" // Chỉ chấp nhận file PDF
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
          required // Bắt buộc phải nhập
          type="file"
          onChange={(e) => setInput(e.target.files[0])} // Lưu file được chọn vào state
        />
        {/* Ghi chú hướng dẫn loại file được hỗ trợ */}
        <p className="text-xs text-gray-500 font-light mt-1">
          Chỉ hỗ trợ file PDF.
        </p>

        {/* Nút submit form - có gradient background màu xanh lá và icon FileText */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <FileText className="w-5" aria-hidden="true" />
          Đánh Giá CV
        </button>
      </form>

      {/* Phần hiển thị kết quả phân tích CV */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        {/* Tiêu đề phần kết quả với icon FileText màu xanh lá */}
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-[#00DA83]" aria-hidden="true" />
          <h1 className="text-xl font-semibold">Kết Quả Phân Tích</h1>
        </div>

        {/* Vùng hiển thị kết quả - căn giữa theo cả 2 chiều */}
        <div className="flex-1 flex justify-center items-center">
          {/* Placeholder khi chưa có kết quả */}
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <FileText className="w-9 h-9" aria-hidden="true" />
            <p>Tải lên CV và nhấp "Đánh Giá CV" để bắt đầu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
