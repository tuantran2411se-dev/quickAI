import React, { useState } from "react";
import { Sparkles, Image } from "lucide-react";

const GenerateImages = () => {
  // State để lưu nội dung mô tả hình ảnh từ người dùng
  const [input, setInput] = useState("");
  // State để lưu phong cách hình ảnh được chọn
  const [selectedStyle, setSelectedStyle] = useState("Thực tế");
  // State để lưu trạng thái công khai hình ảnh
  const [publish, setPublish] = useState(false);

  // Danh sách các phong cách hình ảnh có sẵn
  const imageStyles = [
    "Thực tế",
    "Phong cách Ghibli",
    "Phong cách Anime",
    "Phong cách Hoạt hình",
    "Phong cách Giả tưởng",
    "Phong cách 3D",
    "Phong cách Chân dung",
    "Phong cách Trừu tượng",
  ];

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
          <Sparkles className="w-6 text-[#00AD25]" />
          <h1 className="text-xl font-semibold">Tạo hình ảnh AI</h1>
        </div>

        {/* Input mô tả hình ảnh */}
        <p className="mt-6 text-sm font-medium">Mô tả hình ảnh của bạn</p>
        <textarea
          rows="4"
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="Mô tả những gì bạn muốn thấy trong hình ảnh.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>

        {/* Chọn phong cách hình ảnh */}
        {/* Label cho phần chọn phong cách */}
        <p className="mt-4 text-sm font-medium">Phong cách</p>

        {/* Container chứa các nút chọn phong cách */}
        <div className="mt-3 grid grid-cols-3 gap-3">
          {/* Duyệt qua mảng imageStyles để render các nút chọn */}
          {imageStyles.map((item) => (
            <span
              // Key duy nhất cho mỗi phần tử trong danh sách
              key={item}
              // Khi click vào nút, cập nhật state selectedStyle với item được chọn
              onClick={() => setSelectedStyle(item)}
              // Áp dụng class động: nếu item hiện tại được chọn thì hiển thị màu xanh lá,
              // ngược lại hiển thị màu xám
              className={`text-xs text-center px-4 py-1 border rounded-full cursor-pointer ${
                selectedStyle === item
                  ? "bg-green-50 text-green-700" // Style khi được chọn
                  : "text-gray-500 border-gray-300" // Style khi không được chọn
              }`}
            >
              {/* Hiển thị tên phong cách */}
              {item}
            </span>
          ))}
        </div>

        {/* Toggle Switch để công khai hình ảnh */}
        <div className="my-6 flex items-center gap-2">
          {/* Label chứa checkbox ẩn và toggle switch tùy chỉnh */}
          <label className="relative cursor-pointer">
            {/* Checkbox thực tế bị ẩn, sử dụng class sr-only (screen reader only) */}
            <input
              className="sr-only peer"
              type="checkbox"
              checked={publish}
              onChange={(e) => setPublish(e.target.checked)}
            />
            {/* Nền của toggle switch - chuyển màu khi được check */}
            <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition"></div>
            {/* Nút tròn di chuyển - dịch sang phải khi được check */}
            <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></span>
          </label>
          {/* Text mô tả chức năng toggle */}
          <p className="text-sm">Công khai hình ảnh này</p>
        </div>

        {/* Nút Generate - tạo hình ảnh */}
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Image className="w-5" />
          Tạo hình ảnh
        </button>
      </form>

      {/* Phần hiển thị hình ảnh đã tạo */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        {/* Tiêu đề phần hiển thị */}
        <div className="flex items-center gap-3">
          <Image className="w-5 h-5 text-[#00AD25]" />
          <h1 className="text-xl font-semibold">Hình ảnh đã tạo</h1>
        </div>

        {/* Trạng thái rỗng - hiển thị khi chưa có hình ảnh */}
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            {/* Icon hình ảnh placeholder */}
            <Image className="w-9 h-9" />
            {/* Text hướng dẫn người dùng */}
            <p>Nhập chủ đề và nhấp "Tạo hình ảnh" để bắt đầu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateImages;
