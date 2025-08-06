import React from "react";
import Navbar from "../components/Shared/Navbar";
import HeroSection from "../components/Home/HeroSection";
import HowItWorksSection from "../components/HowItWorks/HowItWorksSection";
import CategorySection from "../components/category/CategorySection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-17 font-primary">
        <HeroSection />
        <HowItWorksSection />
        <CategorySection />
      </main>
    </>
  );
};

export default HomePage;
