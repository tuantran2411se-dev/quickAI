import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  // Hook để điều hướng giữa các trang
  const navigate = useNavigate();

  // State quản lý trạng thái đóng/mở sidebar (đặc biệt cho mobile)
  const [sidebar, setSidebar] = useState(false);

  // Lấy thông tin user từ Clerk
  const { user } = useUser();

  // Nếu user đã đăng nhập, hiển thị layout chính
  return user ? (
    <div className="flex flex-col items-start justify-start h-screen">
      {/* Thanh navigation phía trên */}
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200">
        {/* Logo - click để về trang chủ */}
        <img
          src={assets.logo}
          alt=""
          onClick={() => navigate("/")}
          className="cursor-pointer"
        />
        {/* Nút toggle sidebar cho mobile - hiển thị X khi sidebar mở, Menu khi sidebar đóng */}
        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        )}
      </nav>
      {/* Phần nội dung chính - sidebar và content */}
      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        {/* Sidebar bên trái */}
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        {/* Vùng hiển thị nội dung chính */}
        <div className="flex-1 bg-[#F4F7FB]">
          {/* Outlet để render các route con */}
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    // Nếu user chưa đăng nhập, hiển thị form đăng nhập
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
};

export default Layout;
