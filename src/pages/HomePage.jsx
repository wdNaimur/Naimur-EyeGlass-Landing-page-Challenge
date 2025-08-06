import React from "react";
import Navbar from "../components/Shared/Navbar";
import HeroSection from "../components/Home/hero/HeroSection";

import CategorySection from "../components/Home/category/CategorySection";
import HowItWorksSection from "../components/Home/HowItWorks/HowItWorksSection";
import AboutUsSection from "../components/Home/aboutUs/AboutUsSection";
import OurProductsSection from "../components/Home/ourProducts/OurProductsSection";

const HomePage = () => {
  return (
    <>
      <main className="min-h-screen pt-17 font-primary">
        <HeroSection />
        <HowItWorksSection />
        <CategorySection />
        <AboutUsSection />
        <OurProductsSection />
      </main>
    </>
  );
};

export default HomePage;
