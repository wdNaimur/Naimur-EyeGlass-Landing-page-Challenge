import React, { useState, useEffect } from "react";
import products from "../../../data/productsData.json";
import {
  addToCart,
  toggleWishlist,
  getFromStorage,
} from "../../../utils/localStorageHelpers";
import { CiHeart } from "react-icons/ci";
import { HiHeart } from "react-icons/hi2";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import context
import { useCartWishlist } from "../../../utils/context/CartWishlistContext";
import { Pagination } from "swiper/modules";
import "./swiperStyle.css";

const categories = ["best-sell", "special", "latest"];

const OurProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("special");
  const [wishlist, setWishlist] = useState([]);
  const { updateCounts } = useCartWishlist();

  useEffect(() => {
    setWishlist(getFromStorage("wishlist"));
  }, []);

  const handleWishlist = (product) => {
    const updated = toggleWishlist(product);
    setWishlist(updated);
    updateCounts(); // update global counts
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Successfully added!");
    updateCounts(); // update global counts
  };

  const filteredProducts = products
    .filter((product) => product.categories.includes(activeCategory))
    .slice(0, 6);

  return (
    <section className="container mx-auto px-4 2xl:my-36 xl:my-32 lg:my-28 md:my-24 my-10 text-text-color">
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p>
            Experience crystal clear vision and elevated style with our premium
            collection of eyeglasses.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`capitalize px-4 py-2 border rounded-lg cursor-pointer transition-all duration-150 ${
                activeCategory === category
                  ? "bg-text-color text-white"
                  : "bg-white text-text-color"
              }`}
            >
              {category.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all">
        {filteredProducts.map((product) => {
          const isWishlisted = wishlist.some((p) => p.id === product.id);

          return (
            <div
              key={product.id}
              className="bg-transparent relative rounded-xl overflow-hidden"
            >
              <div className="absolute top-2 left-2 bg-[#FED29C] text-sm font-semibold w-10 h-10 flex items-center justify-center rounded-full">
                {product.discountPercent}%
              </div>

              <div className="absolute top-2 right-2 text-xl cursor-pointer z-20">
                <button
                  className="w-9.5 h-9.5 flex items-center justify-center rounded-full border border-text-color/40 cursor-pointer"
                  onClick={() => handleWishlist(product)}
                >
                  {isWishlisted ? (
                    <HiHeart className="h-5.5 w-5.5 hover:scale-110 transition-all fill-[#FED29C]" />
                  ) : (
                    <CiHeart className="h-5.5 w-5.5 hover:scale-110 transition-all" />
                  )}
                </button>
              </div>

              <div className="bg-[#F7F7F7]">
                <Swiper
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  className="mySwiper custom-swiper-pagination"
                >
                  {product.imageUrls.map((url, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={url}
                        alt={product.name}
                        className="w-full object-contain px-8 2xl:pt-36 2xl:pb-28 xl:pt-28 xl:pb-24 pt-20 pb-16"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <h3 className="text-lg font-semibold text-text-color mt-2">
                {product.name}
              </h3>
              <span className="flex items-center gap-2">
                <p className="text-sm text-[#545454] line-through opacity-80">
                  ${product.originalPrice}
                </p>
                <p className="text-base font-bold text-text-color">
                  ${product.price}
                </p>
              </span>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-2 text-sm text-[#5A5A5A] underline underline-offset-2 hover:text-text-color cursor-pointer mb-3"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurProductsSection;
