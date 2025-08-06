import React from "react";

const AboutUsSection = () => {
  return (
    <section className="2xl:my-36 xl:my-32 lg:my-28 md:my-24 my-10">
      <div className="relative lg:max-h-[600px] min-h-[550px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-[600px] min-h-[550px] bg-[#FED29C]">
          <div></div>
          {/* Right Image */}
          <div className="w-full h-full flex-col flex items-center justify-center bg-[url('/about/background.png')] bg-cover bg-center lg:opacity-100 opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-16 2xl:my-36 xl:my-32 lg:my-28 md:my-24 my-10 absolute flex top-0 left-0 right-0 bottom-0 items-center justify-center">
          {/* Left Content */}
          <div className="space-y-6 lg:w-1/2 w-full pr-10 absolute left-0 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 max-w-170">
              Experience clear vision with OptiChroma Vision Frames
            </h2>
            <p className="text-text-color text-base md:text-lg max-w-160">
              At OptiChroma, we believe that everyone deserves clear vision and
              stylish eyewear. That’s why we’ve designed a collection of frames
              that prioritize both form and function.
            </p>
            <p className="text-text-color text-base md:text-lg leading-relaxed">
              Our team of experts is dedicated to helping you find the perfect
              pair of glasses.
            </p>
            <button className="px-6 py-2 bg-text-color text-white rounded hover:bg-text-color/80 transition cursor-pointer">
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
