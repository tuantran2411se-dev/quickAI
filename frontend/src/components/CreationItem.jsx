import React, { useState } from "react";
import Markdown from "react-markdown";

const CreationItem = ({ item }) => {
  // State quản lý trạng thái mở rộng/thu gọn của item
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer"
    >
      {/* Phần header của item */}
      <div className="flex justify-between items-center gap-4">
        <div>
          {/* Hiển thị prompt/nội dung yêu cầu */}
          <h2>{item.prompt}</h2>
          {/* Hiển thị loại tác phẩm và ngày tạo */}
          <p className="text-gray-500">
            {item.type}-{new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        {/* Nút badge hiển thị loại tác phẩm */}
        <button className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full">
          {item.type}
        </button>
      </div>
      {/* Phần nội dung chi tiết - chỉ hiển thị khi expanded = true */}
      {expanded && (
        <div>
          {/* Nếu là hình ảnh thì hiển thị img */}
          {item.type === "image" ? (
            <img
              src={item.content}
              alt="image"
              className="mt-3 w-full max-w-md"
            />
          ) : (
            // Nếu là text thì hiển thị dưới dạng Markdown
            <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-700">
              {/* reset-tw để reset các style Tailwind cho Markdown */}
              <div className="reset-tw">
                <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;
