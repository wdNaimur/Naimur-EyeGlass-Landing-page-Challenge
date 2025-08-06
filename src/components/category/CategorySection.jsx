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
    className: "row-span-5 2xl:h-150 xl:h-125 lg:h-96",
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
    className: "row-span-5 2xl:h-150 xl:h-125 lg:h-96",
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto px-4 sm:my-10">
      <div className="grid lg:grid-cols-12 grid-cols-6 grid-rows-6 gap-6 auto-rows-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`relative w-full rounded-md shadow-md col-span-6 md:h-auto h-96 overflow-hidden ${category.className} `}
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
              <button className="mt-2 px-6 py-2 bg-black text-white rounded">
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
