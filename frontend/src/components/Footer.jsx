import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    // Footer với padding responsive và margin top
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-20">
      {/* Container chính với layout responsive và border bottom */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        {/* Phần logo và mô tả */}
        <div className="md:max-w-96">
          <img className="h-9" alt="" src={assets.logo} />
          <p className="mt-6 text-sm">
            Trải nghiệm sức mạnh của AI với QuickAi.
            <br />
            Biến đổi việc tạo nội dung của bạn với bộ công cụ AI cao cấp. Viết
            bài viết, tạo hình ảnh và nâng cao quy trình làm việc của bạn.
          </p>
        </div>

        {/* Phần menu và newsletter */}
        <div className="flex-1 flex items-start md:justify-end gap-10 sm:gap-20">
          {/* Menu Company */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Công ty</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Trang chủ</a>
              </li>
              <li>
                <a href="#">Về chúng tôi</a>
              </li>
              <li>
                <a href="#">Liên hệ</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
            </ul>
          </div>

          {/* Phần đăng ký newsletter */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">
              Đăng ký nhận bản tin
            </h2>
            <div className="text-sm space-y-2">
              <p>
                Tin tức mới nhất, bài viết và tài nguyên, được gửi đến hộp thư
                của bạn hàng tuần.
              </p>
              {/* Form đăng ký email */}
              <div className="flex items-center gap-2 pt-4">
                <input
                  className="border border-gray-500/30 placeholder-gray-500 outline-none w-full min-w-28 max-w-64 h-9 rounded px-2"
                  placeholder="Nhập email của bạn"
                  type="email"
                />
                <button className="bg-blue-600 px-4 h-9 text-white rounded">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần copyright */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Bản quyền 2025 © QuickAi. Đã đăng ký bản quyền.
      </p>
    </footer>
  );
}
