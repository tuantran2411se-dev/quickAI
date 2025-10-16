import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate(); // Hook để chuyển hướng trang
  const { openSignIn } = useClerk(); // Lấy hàm openSignIn từ Clerk
  const { user } = useUser(); // Lấy thông tin người dùng

  return (
    // Thanh điều hướng cố định trên đầu trang, có hiệu ứng mờ nền và các style đã định nghĩa
    <div className="fixed z-50 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer">
      {/* Logo, khi bấm sẽ quay về trang chủ */}
      <img
        className="w-32 sm:w-44 cursor-pointer"
        alt="logo"
        src={assets.logo}
        onClick={() => navigate("/")}
      />
      {/* Hiển thị UserButton nếu đã đăng nhập, ngược lại hiển thị nút "Get started" */}
      {user ? (
        <UserButton />
      ) : (
        <button
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
          onClick={() => openSignIn()}
        >
          Get started
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
