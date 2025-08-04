import React from "react";
import Navbar from "../components/Shared/Navbar";
import HeroSection from "../components/Home/HeroSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-17 font-primary">
        <HeroSection />
      </main>
    </>
  );
};

export default HomePage;
