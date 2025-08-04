import React from "react";
import Navbar from "../components/Shared/Navbar";
import HeroSection from "../components/Home/HeroSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </>
  );
};

export default HomePage;
