import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  Users,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

// Danh sách các mục điều hướng trong sidebar
const navItems = [
  { to: "/ai", label: "Trang Chủ", Icon: House },
  { to: "/ai/write-article", label: "Viết Bài", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Tiêu Đề Blog", Icon: Hash },
  { to: "/ai/generate-images", label: "Tạo Hình Ảnh", Icon: Image },
  { to: "/ai/remove-background", label: "Xóa Nền", Icon: Eraser },
  { to: "/ai/remove-object", label: "Xóa Đối Tượng", Icon: Scissors },
  { to: "/ai/review-resume", label: "Đánh Giá CV", Icon: FileText },
  { to: "/ai/community", label: "Cộng Đồng", Icon: Users },
];

// Component Sidebar - thanh điều hướng bên trái
const Sidebar = ({ sidebar, setSidebar }) => {
  // Lấy thông tin user từ Clerk
  const { user } = useUser();

  // Lấy hàm signOut và openUserProfile từ Clerk để đăng xuất và mở profile
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sidebar ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all duration-300 ease-in-out`}
    >
      {/* Phần thông tin user và menu điều hướng */}
      <div className="my-7 w-full">
        {/* Ảnh đại diện user */}
        <img src={user.imageUrl} alt="" className="w-13 rounded-full mx-auto" />
        {/* Tên đầy đủ của user */}
        <h1 className="mt-1 text-center">{user.fullName}</h1>
        {/* Danh sách các link điều hướng */}
        <div className="px-6 mt-5 text-sm text-gray-600 font-medium">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              to={to}
              key={to}
              end={to === "/ai"} // Chỉ active khi đường dẫn khớp chính xác cho trang chủ
              onClick={() => setSidebar(false)} // Đóng sidebar khi click (trên mobile)
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${
                  isActive
                    ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Icon của menu */}
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
                  {/* Nhãn của menu */}
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      {/* Phần footer của sidebar hiển thị thông tin user và nút đăng xuất */}
      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        {/* Phần thông tin user - click để mở profile */}
        <div
          onClick={openUserProfile}
          className="flex gap-2 items-center cursor-pointer"
        >
          {/* Ảnh đại diện user */}
          <img src={user.imageUrl} alt="" className="w-8 rounded-full" />
          <div>
            {/* Tên user */}
            <h1 className="text-sm font-medium">{user.fullName}</h1>
            {/* Hiển thị loại gói: Cao Cấp hoặc Miễn Phí */}
            <p className="text-xs text-gray-500">
              <Protect
                condition={(has) => has({ plan: "cao_cap" })}
                fallback="Miễn Phí"
              >
                Cao Cấp
              </Protect>
            </p>
          </div>
        </div>
        {/* Nút đăng xuất */}
        <LogOut
          onClick={signOut}
          className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
