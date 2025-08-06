import React from "react";

const steps = [
  {
    id: 1,
    icon: (
      <img
        className="h-10 w-10"
        src="/icons/search-icon.svg"
        alt="search icon"
      ></img>
    ),
    title: "Search you sunglass",
    description: "Shop Stylish Eyewear Now",
  },
  {
    id: 2,
    icon: (
      <img
        className="h-11 w-11"
        src="/icons/sunglass-icon.svg"
        alt="sunglass icon"
      ></img>
    ),
    title: "Select Sunglass",
    description: "Shade Your Style",
  },
  {
    id: 3,
    icon: (
      <img
        className="h-10 w-10 opacity-80"
        src="/icons/card-icon.svg"
        alt="card icon"
      ></img>
    ),
    title: "Make Payment",
    description: "Securely Checkout Now",
  },
  {
    id: 4,
    icon: (
      <img
        className="h-10 w-10 opacity-80"
        src="/icons/truck-icon.svg"
        alt="truck icon"
      ></img>
    ),
    title: "Received Product",
    description: "See the World Clearly",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="container mx-auto sm:px-4 px-0 sm: -translate-y-16 z-30 relative">
      <div className="relative lg:grid lg:grid-cols-4 grid grid-cols-2 justify-center lg:justify-between items-center lg:gap-5 gap-y-10">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative z-10 flex flex-col items-center mx-auto text-center w-52"
          >
            {/* Dotted line (only between items) */}
            {index !== steps.length - 1 && (
              <img
                className="hidden lg:block absolute top-16 2xl:right-[-90%] xl:right-[-60%] right-[-35%] w-full z-0 -translate-y-1/2"
                src="/icons/devider.svg"
                alt="devider"
              />
            )}

            {/* Icon Circle */}
            <div className="bg-orange-200 rounded-full h-32 w-32 flex items-center justify-center mb-4 z-10 sm:shadow-none shadow-xl shadow-text-color/5">
              {step.icon}
            </div>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
