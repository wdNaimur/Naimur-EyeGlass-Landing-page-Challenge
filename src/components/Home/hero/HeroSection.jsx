import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./HeroSwiper.css";
import { RiShoppingCart2Fill } from "react-icons/ri";

const heroSlides = [
  {
    id: 1,
    title: "Personalized Eyeglass Shopping",
    image: "/hero/hero-img-1.png",
    buttonText: "Buy Now",
    buttonIcon: <RiShoppingCart2Fill className="w-7 h-7" />,
    overlay: true,
  },
  {
    id: 2,
    title: "Try Frames From Home",
    image: "/hero/hero-img-2.png",
    buttonText: "Try Now",
    buttonIcon: <RiShoppingCart2Fill className="w-7 h-7" />,
    overlay: true,
  },
  {
    id: 3,
    title: "Shop Your Style Instantly",
    image: "/hero/hero-img-3.png",
    buttonText: "Explore",
    buttonIcon: <RiShoppingCart2Fill className="w-7 h-7" />,
    overlay: true,
  },
];

const HeroSection = () => {
  return (
    <section className="bg-background sm:h-[820px] h-[760px] w-full">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        direction="vertical"
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        modules={[Pagination, Autoplay]}
        className="h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="text-text-color bg-background">
            <section
              className="relative xl:bg-contain bg-no-repeat 2xl:bg-center md:bg-[length:670px] sm:bg-[length:640px]   sm:bg-right-bottom bg-cover bg-left-bottom h-full container mx-auto sm:px-4 px-0 sm: sm:my-10"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay only on small screens */}
              {slide.overlay && (
                <div className="sm:hidden absolute inset-0 bg-primary/35 z-0"></div>
              )}

              <div className="relative md:max-w-[720px] sm:max-w-[556px] xl:pt-[275px] sm:pt-16 pt-[40%] sm:text-left text-center z-10 sm:w-full sm:mx-0 mx-auto px-4">
                <h1 className="sm:text-[54px] text-[40px] font-bold sm:leading-[64px] sm:max-w-full max-w-105 mx-auto leading-10">
                  {slide.title}
                </h1>
                <button className="bg-text-color text-white sm:font-bold font-medium sm:text-lg sm:px-10 px-6 py-3 rounded-2xl cursor-pointer mt-6 hover:bg-text-color/90 transition-all duration-300 hover:scale-105 active:scale-100">
                  <span className="flex items-center gap-2">
                    {slide.buttonIcon}
                    <span>{slide.buttonText}</span>
                  </span>
                </button>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
