import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About Us</Link>
      </li>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/">Features</Link>
      </li>
      <li>
        <Link to="/">Reviews</Link>
      </li>
      <li>
        <Link to="/">Contact Us</Link>
      </li>
    </>
  );
  return (
    <nav className="py-4 font-primary text-text-color fixed w-screen bg-white">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        {/* Logo + Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none cursor-pointer flex items-center justify-center"
            >
              {!isMenuOpen ? (
                <HiBars3 className="w-7 h-7" />
              ) : (
                <IoMdClose className="w-7 h-7" />
              )}
            </button>
          </div>
          {/* Logo */}
          <img className="h-10" src="/eye-glass-logo.png" alt="Logo" />
        </div>
        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6 text-lg">{navLink}</ul>
        {/* Cart Button */}
        <div className="flex items-center gap-5">
          <button>
            <img
              className="h-5.5 w-5.5 cursor-pointer hover:scale-110 transition-all"
              src="/icons/shop-icon.svg"
              alt="cart button"
            />
          </button>
          <button>
            <img
              className="h-5.5 w-5.5 cursor-pointer hover:scale-110 transition-all"
              src="/icons/profile-icon.svg"
              alt="Profile button"
            />
          </button>
        </div>
      </div>
      {/* Mobile Nav Links */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 w-full mx-auto px-2 absolute top-14 left-0 bg-white/20 backdrop-blur-2xl shadow-lg">
          <ul className="flex flex-col gap-2 text-lg h-screen w-11/12 mx-auto py-2">
            {navLink}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
