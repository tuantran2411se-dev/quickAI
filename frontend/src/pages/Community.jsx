import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { dummyPublishedCreationData } from "../assets/assets";

const Community = () => {
  // State để lưu trữ danh sách các sáng tạo
  const [creations, setCreations] = useState([]);

  // Lấy thông tin người dùng hiện tại từ Clerk
  const { user } = useUser();

  // Hàm để tải danh sách các sáng tạo
  const fetchCreations = async () => {
    // Hiện tại đang sử dụng dữ liệu mẫu, sau này có thể thay bằng API call thực tế
    setCreations(dummyPublishedCreationData);
  };

  // useEffect để tải dữ liệu khi component được mount và khi có thông tin user
  useEffect(() => {
    if (user) {
      fetchCreations(); // Chỉ tải dữ liệu khi đã có thông tin người dùng
    }
  }, [user]); // Chạy lại khi user thay đổi

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      {/* Tiêu đề trang */}
      <h1 className="text-2xl font-semibold">Sáng tạo</h1>

      {/* Container chứa grid các sáng tạo với background trắng và có thể scroll */}
      <div className="bg-white h-full w-full rounded-xl overflow-y-scroll">
        {/* Grid layout responsive: 1 cột trên mobile, 2 cột trên tablet, 3 cột trên desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Lặp qua từng sáng tạo và hiển thị */}
          {creations.map((creation, index) => (
            <div
              key={index}
              className="relative group inline-block pl-3 pt-3 w-full"
            >
              {/* Hình ảnh sáng tạo */}
              <img
                className="w-full h-full object-cover rounded-lg"
                src={creation.content} // URL của hình ảnh
                alt={creation.prompt} // Text mô tả cho accessibility
              />

              {/* Overlay hiển thị thông tin khi hover */}
              <div className="absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg transition-all duration-300">
                {/* Prompt (câu lệnh tạo ảnh) - chỉ hiển thị khi hover */}
                <p className="text-sm hidden group-hover:block">
                  {creation.prompt}
                </p>

                {/* Phần hiển thị số lượt thích và nút like */}
                <div className="flex gap-1 items-center">
                  {/* Số lượt thích */}
                  <p>{creation.likes.length}</p>

                  {/* Icon trái tim - đổi màu đỏ nếu user đã like */}
                  <Heart
                    className={`min-w-5 h-5 hover:scale-110 cursor-pointer text-white ${
                      creation.likes.includes(user?.id)
                        ? "text-red-600 fill-red-600" // Màu đỏ và fill nếu đã like
                        : "text-white" // Màu trắng nếu chưa like
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
