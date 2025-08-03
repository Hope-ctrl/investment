import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = () => {
    scrollToTop();
  };

  return (
    <footer className="bg-[#222222] text-white py-10 px-6 mt-5 z-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 2xl:gap-x-16 gap-y-10 lg:ml-[30px]">
        {/* Company Info */}
        <div className="flex flex-col text-left mr-[20px]">
          <button
            onClick={scrollToTop}
            className="text-[20px] font-bold text-left hover:opacity-[0.7] block focus:outline-none"
          >
            Living Wealth Investment
          </button>
          <p className="text-sm mt-2">
            Our mission is to provide every person the opportunity to gain maximal profit from investing at minimal risk.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col text-left space-y-2 lg:ml-[30px]">
          <h3 className="text-lg font-semibold">Navigation</h3>
          <Link to="/" onClick={handleLinkClick} className="hover:text-[#F29C37]">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="hover:text-[#F29C37]">About</Link>
          <Link to="/support" onClick={handleLinkClick} className="hover:text-[#F29C37]">Contact Us</Link>
          <Link to="/faq" onClick={handleLinkClick} className="hover:text-[#F29C37]">FAQ</Link>
        </div>

        {/* Address & Social Links */}
        <div className="flex flex-col text-left">
          <h3 className="text-lg font-semibold mb-2">Company Address</h3>
          <p className="text-sm">
            Claude Debussylaan 7-19,<br />
            1082 MC Amsterdam,<br />
            Netherlands
          </p>

          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-1">Follow Us</h4>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-[#F29C37] hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-[#F29C37] hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-[#F29C37] hover:text-white"><FaLinkedinIn /></a>
              <a href="#" className="text-[#F29C37] hover:text-white"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Account (Login & Sign Up) */}
        <div className="flex flex-col text-left">
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <div className="flex space-x-4">
            <Link
              to="/login"
              onClick={handleLinkClick}
              className="bg-[#F29C37] text-black px-4 py-2 rounded hover:bg-white hover:text-black text-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={handleLinkClick}
              className="border border-[#F29C37] text-[#F29C37] px-4 py-2 rounded hover:bg-[#F29C37] hover:text-black text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
