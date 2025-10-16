import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { AiToolsData } from "../assets/assets";

const AITools = () => {
  // Hook để điều hướng giữa các trang
  const navigate = useNavigate();
  // Lấy thông tin người dùng từ Clerk
  const { user } = useUser();

  // Xử lý khi người dùng click vào một công cụ
  const handleToolClick = (path) => {
    // Chỉ điều hướng nếu người dùng đã đăng nhập
    if (user) {
      navigate(path);
    }
  };

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24 mt-0">
      {/* Phần tiêu đề */}
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Công cụ AI mạnh mẽ
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Mọi thứ bạn cần để tạo, nâng cao và tối ưu hóa nội dung của bạn với
          công nghệ AI tiên tiến.
        </p>
      </div>

      {/* Danh sách các công cụ AI */}
      <div className="flex flex-wrap mt-10 justify-center">
        {AiToolsData.map((tool, index) => {
          // Lấy component Icon từ dữ liệu công cụ
          const Icon = tool.Icon;
          return (
            <div
              key={index}
              onClick={() => handleToolClick(tool.path)}
              className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Icon của công cụ với gradient background */}
              <Icon
                className="w-12 h-12 p-3 text-white rounded-xl"
                aria-hidden="true"
                style={{
                  background: `linear-gradient(${tool.bg.from}, ${tool.bg.to})`,
                }}
              />
              {/* Tiêu đề công cụ */}
              <h3 className="mt-6 mb-3 text-lg font-semibold">{tool.title}</h3>
              {/* Mô tả công cụ */}
              <p className="text-gray-400 text-sm max-w-[95%]">
                {tool.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AITools;
