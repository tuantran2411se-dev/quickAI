import React, { useState } from "react";
import { Sparkles, Scissors } from "lucide-react";

const RemoveObject = () => {
  // State lưu trữ file hình ảnh được tải lên
  const [input, setInput] = useState("");
  // State lưu trữ tên đối tượng cần xóa
  const [objectName, setObjectName] = useState("");

  // Hàm xử lý khi submit form
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    // Thêm logic xóa đối tượng ở đây
  };

  return (
    // Container chính - có thể cuộn dọc, padding 6, flex wrap để responsive
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Phần Form - Nhập liệu */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        {/* Tiêu đề form với icon Sparkles */}
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Xóa Đối Tượng</h1>
        </div>

        {/* Label cho input file */}
        <p className="mt-6 text-sm font-medium">Tải lên hình ảnh</p>
        {/* Input để chọn file hình ảnh */}
        <input
          accept="image/*" // Chỉ chấp nhận file hình ảnh
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
          required // Bắt buộc phải nhập
          type="file"
          onChange={(e) => setInput(e.target.files[0])} // Lưu file được chọn vào state
        />

        {/* Label cho textarea mô tả đối tượng */}
        <p className="mt-6 text-sm font-medium">Mô tả tên đối tượng cần xóa</p>
        {/* Textarea để nhập tên đối tượng cần xóa */}
        <textarea
          rows="4" // Chiều cao 4 dòng
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="ví dụ: đồng hồ hoặc thìa, Chỉ tên một đối tượng duy nhất"
          required // Bắt buộc phải nhập
          value={objectName} // Giá trị từ state
          onChange={(e) => setObjectName(e.target.value)} // Cập nhật state khi người dùng nhập
        />

        {/* Nút submit form - có gradient background và icon Scissors */}
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Scissors className="w-5" />
          Xóa đối tượng
        </button>
      </form>

      {/* Phần hiển thị hình ảnh đã xử lý */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        {/* Tiêu đề phần kết quả với icon Scissors */}
        <div className="flex items-center gap-3">
          <Scissors className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Hình Ảnh Đã Xử Lý</h1>
        </div>

        {/* Vùng hiển thị kết quả - căn giữa theo cả 2 chiều */}
        <div className="flex-1 flex justify-center items-center">
          {/* Placeholder khi chưa có kết quả */}
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Scissors className="w-9 h-9" />
            <p>Tải lên hình ảnh và nhấp "Xóa Đối Tượng" để bắt đầu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveObject;
