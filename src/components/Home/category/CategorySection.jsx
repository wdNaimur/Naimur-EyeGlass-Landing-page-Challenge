import React from "react";

const categories = [
  {
    name: "Bravo Sunglasses",
    discount: "Up to 80% off on selected item",
    img: "/category/Bravo-sunglasses.png",
    className: "row-span-6",
  },
  {
    name: "Tommy Hilfiger",
    discount: "Up to 30% off on selected item",
    img: "/category/tommy-hilfiger.png",
    className: "row-span-5 2xl:h-150 xl:h-130 lg:h-100",
  },
  {
    name: "John Jacobs",
    discount: "Up to 40% off on selected item",
    img: "/category/john-jacobs.png",
    className: "row-span-6",
  },
  {
    name: "Vincent Chase",
    discount: "Up to 10% off on selected item",
    img: "/category/vincent-chase.png",
    className: "row-span-5 2xl:h-150 xl:h-130 lg:h-100",
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto px-4 2xl:my-36 xl:my-32 lg:my-28 md:my-24 my-10">
      <div className="grid lg:grid-cols-12 grid-cols-6 grid-rows-6 gap-6 auto-rows-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`relative w-full rounded-md shadow-lg shadow-text-color/10 col-span-6 md:h-auto h-[95vw] overflow-hidden ${category.className} `}
          >
            <img
              src={category.img}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 bg-white px-6 py-6 rounded-md shadow text-center min-w-[60%] w-[300px] max-h-56">
              <h3 className="font-semibold text-gray-900 2xl:text-3xl text-2xl">
                {category.name}
              </h3>
              <p className="text-base text-gray-600">{category.discount}</p>
              <button className="px-6 py-2 bg-text-color text-white rounded hover:bg-text-color/80 transition cursor-pointer mt-2">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
