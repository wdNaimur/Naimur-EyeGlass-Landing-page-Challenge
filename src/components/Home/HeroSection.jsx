import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./HeroSwiper.css";
import { RiShoppingCart2Fill } from "react-icons/ri";

const HeroSection = () => {
  return (
    <div className="bg-background sm:h-[900px] h-[760px] w-full">
      <Swiper
        direction="vertical"
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        modules={[Pagination]}
        className="h-full"
      >
        <SwiperSlide className="text-text-color bg-background">
          <section className="bg-[url('/hero/hero-img-1.png')] xl:bg-contain bg-no-repeat 2xl:bg-center sm:bg-[length:720px] sm:bg-right-bottom bg-left-top h-full container mx-auto sm:px-4 px-0 sm:w-11/12 sm:my-10">
            <div className="relative max-w-[556px] xl:pt-[275px] sm:pt-16 pt-[40%] sm:text-left text-center z-10 sm:w-full sm:mx-0 mx-auto px-4">
              <h1 className="sm:text-[54px]  text-[40px] font-bold sm:leading-16 leading-10">
                Personalized Eyeglass Shopping
              </h1>
              <button className="bg-text-color text-white sm:font-bold font-medium sm:text-lg sm:px-10 px-6 py-3 rounded-2xl cursor-pointer mt-6 hover:bg-text-color/90 transition-all duration-300 hover:scale-105 active:scale-100">
                <span className="flex items-center gap-2">
                  <RiShoppingCart2Fill className="w-7 h-7" />
                  <span>Buy Now</span>
                </span>
              </button>
            </div>
            <div className="sm:hidden absolute inset-0 bg-primary/35 z-0"></div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-3xl font-bold text-text-color bg-background">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-3xl font-bold text-text-color bg-background">
          Slide 3
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
