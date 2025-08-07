import React from "react";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-text-color text-sm font-primary">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">
            <span>Eye</span>
            <span className="text-orange-300">Glass</span>
          </h2>
          <p className="mt-4 text-sm opacity-80">
            Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampde
          </p>
          <div className="flex mt-4 space-x-3 opacity-80">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border rounded-full hover:text-primary"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border rounded-full hover:text-primary"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border rounded-full hover:text-primary"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 opacity-80">
            <li>
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Product FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Company Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Manage Account
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 opacity-80">
            <li>
              <a href="#" className="hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Blog Post
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Product Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Company Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Company Info
              </a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold mb-3">Community</h4>
          <ul className="space-y-2 opacity-80">
            <li>
              <a href="#" className="hover:text-primary">
                Become an affiliate
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Product FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Our Forums
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Product API
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-primary mt-6 py-4 opacity-80">
        <div className=" container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2023 All rights reserved by Eyeglass</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
