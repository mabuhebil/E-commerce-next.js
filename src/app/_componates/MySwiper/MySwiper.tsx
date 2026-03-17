"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function MySwiper({
  imageList,
  spaceBetween = 50,
  slidesPerView = 1,
}: {
  imageList: string[];
  spaceBetween?: number;
  slidesPerView?: number;
}) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={{
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className} w-5! bg-white! h-5!"></span>`;
        },
      }}
    >
      {imageList.map((imgSrc) => (
        <SwiperSlide key={imgSrc}>
          <img src={imgSrc} alt="" className="w-full h-100" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
