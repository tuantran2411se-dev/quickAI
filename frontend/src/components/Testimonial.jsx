import React from "react";
import { dummyTestimonialData } from "../assets/assets";
import { assets } from "../assets/assets";

const Testimonial = () => {
  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24">
      {/* Phần tiêu đề */}
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Được Yêu Thích Bởi Người Sáng Tạo
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Đừng chỉ tin lời chúng tôi. Đây là những gì người dùng của chúng tôi
          đang nói.
        </p>
      </div>

      {/* Danh sách các testimonial */}
      <div className="flex flex-wrap mt-10 justify-center">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            {/* Phần hiển thị đánh giá sao */}
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={
                      starIndex < testimonial.rating
                        ? assets.star_icon
                        : assets.star_dull_icon
                    }
                    alt="star"
                  />
                ))}
            </div>

            {/* Nội dung đánh giá */}
            <p className="text-gray-500 text-sm my-5">
              "{testimonial.content}"
            </p>

            {/* Đường phân cách */}
            <hr className="mb-5 border-gray-300" />

            {/* Thông tin người đánh giá */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                className="w-12 h-12 object-cover rounded-full"
                alt={testimonial.name}
              />
              <div className="text-sm text-gray-600">
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-xs text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
