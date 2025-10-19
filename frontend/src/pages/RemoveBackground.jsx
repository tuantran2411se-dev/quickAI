import React, { useState } from "react";
import { Sparkles, Eraser } from "lucide-react";

const RemoveBackground = () => {
  // State để lưu file ảnh được upload
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
          <Sparkles className="w-6 text-[#FF4938]" aria-hidden="true" />
          <h1 className="text-xl font-semibold">Xóa nền ảnh</h1>
        </div>

        {/* Input upload ảnh */}
        <p className="mt-6 text-sm font-medium">Tải ảnh lên</p>
        <input
          accept="image/*"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
          required
          type="file"
          onChange={(e) => setInput(e.target.files[0])}
        />
        {/* Text hướng dẫn định dạng file */}
        <p className="text-xs text-gray-500 font-light mt-1">
          Hỗ trợ định dạng JPG, PNG và các định dạng ảnh khác
        </p>

        {/* Nút submit để xóa nền ảnh */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <Eraser className="w-5" aria-hidden="true" />
          Xóa nền ảnh
        </button>
      </form>

      {/* Phần hiển thị ảnh đã xử lý */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        {/* Tiêu đề phần hiển thị */}
        <div className="flex items-center gap-3">
          <Eraser className="w-5 h-5 text-[#FF4938]" aria-hidden="true" />
          <h1 className="text-xl font-semibold">Ảnh đã xử lý</h1>
        </div>

        {/* Trạng thái rỗng - hiển thị khi chưa có ảnh */}
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            {/* Icon placeholder */}
            <Eraser className="w-9 h-9" aria-hidden="true" />
            {/* Text hướng dẫn người dùng */}
            <p>Tải ảnh lên và nhấp "Xóa nền ảnh" để bắt đầu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;
