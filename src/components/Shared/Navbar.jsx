import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router";
import { useCartWishlist } from "../../utils/context/CartWishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { IoCart, IoCartOutline, IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  const { wishlistCount, cartCount } = useCartWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLink = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-gray-600 font-bold" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/features">Features</NavLink>
      </li>
      <li>
        <NavLink to="/reviews">Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <nav className="py-4 font-primary text-text-color fixed w-screen bg-white/90 backdrop-blur-2xl z-50">
      <div className="mx-auto flex items-center justify-between w-11/12">
        {/* Logo + Toggle */}
        <div className="flex items-center gap-2">
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none cursor-pointer"
            >
              {!isMenuOpen ? (
                <HiBars3 className="w-7 h-7" />
              ) : (
                <IoMdClose className="w-7 h-7" />
              )}
            </button>
          </div>
          <Link to={"/"}>
            <img className="h-10" src="/eye-glass-logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6 text-lg">{navLink}</ul>

        {/* Cart/Wishlist/Profile Icons */}
        <div className="flex items-center gap-5 relative">
          {/* Wishlist */}
          <div className="relative">
            <NavLink to="/wishlist">
              {({ isActive }) =>
                isActive ? (
                  <FaHeart className="h-6 w-6 text-gray-600 transition-all" />
                ) : (
                  <FaRegHeart className="h-6 w-6 hover:scale-110 transition-all" />
                )
              }
            </NavLink>
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-red-500 border border-white"></span>
            )}
          </div>

          {/* Cart */}
          <div className="relative">
            <NavLink to="/cart">
              {({ isActive }) =>
                isActive ? (
                  <IoCart className="h-7 w-7 text-text-color transition-all" />
                ) : (
                  <IoCartOutline className="h-7 w-7 hover:scale-110 transition-all text-text-color" />
                )
              }
            </NavLink>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-red-500 border border-white"></span>
            )}
          </div>

          {/* Profile */}
          <button>
            <IoPersonOutline className="h-6 w-6 hover:scale-110 transition-all text-text-color" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 w-full mx-auto absolute top-14 left-0 bg-white/90 backdrop-blur-2xl shadow-lg">
          <div className="w-11/12 px-9 mx-auto">
            <ul className="flex flex-col gap-2 text-lg h-screen mx-auto py-2">
              {navLink}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
