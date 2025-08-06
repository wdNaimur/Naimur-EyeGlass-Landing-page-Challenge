import React from "react";
import Navbar from "../components/Shared/Navbar";
import HeroSection from "../components/Home/hero/HeroSection";

import CategorySection from "../components/Home/category/CategorySection";
import HowItWorksSection from "../components/Home/HowItWorks/HowItWorksSection";
import AboutUsSection from "../components/Home/aboutUs/AboutUsSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-17 font-primary">
        <HeroSection />
        <HowItWorksSection />
        <CategorySection />
        <AboutUsSection />
      </main>
    </>
  );
};

export default HomePage;
