import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import menu from "../../assets/menu.svg";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleMobileMenu = () => {
    setShowMobileNav((o) => !o);
  };

  return (
    <nav class="bg-white">
      <div className="fixed top-0 right-0 left-0 bg-gradient z-50 bg-white p-2 border-y ">
        <div className="flex gap-2 justify-center items-center px-10 pt-8 pr-10">
          <img src={logo} alt="logo" />

          <ul className="flex m-auto gap-16">
          <li className="hidden md:inline-block text-[#091913] font-serif">
              <Link to="/">Home</Link>
            </li>
            <li className="hidden md:inline-block text-[#091913] font-serif">
              <Link to="/fund">Fund</Link>
            </li>
            <li className="hidden md:inline-block  text-[#091913] font-serif">
              <Link to="/submit-proposal">Submit proposal</Link>
            </li>
            <li className="hidden md:inline-block  text-[#091913] font-serif">
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
         

          <w3m-button /> 

          {/* <button class="bg-[#2B7C5F] hover:bg-[#E6CB55] text-white font-bold py-2 px-4 rounded"> */}
          {/* Connect Wallet */}
          {/* </button> */}
          {/* Mobile Hamburger Menu */}
          <div className="tab:hidden">
            <button onClick={handleMobileMenu}>
              <img src={menu} alt="menu" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileNav && (
        <div className="py-9 px-11 tab:hidden fixed bg-[#150E28] w-full min-h-screen top-0 z-50">
          <div
            className="flex justify-end mb-14"
            onClick={() => setShowMobileNav(false)}
          >
            <AiOutlineClose
              size={23}
              className="border rounded-full border-purple-50 px-1"
            />
          </div>
          <nav>
            <ul className="flex flex-col gap-6 sm:gap-8 text-lg">
              <li>
                <NavLink
                  href="/fund"
                  onClick={handleMobileMenu}
                  className="cursor-pointer"
                >
                  Fund
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/submit-proposal"
                  onClick={handleMobileMenu}
                  className="cursor-pointer"
                >
                  Submit proposal
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/about-us"
                  onClick={handleMobileMenu}
                  className="cursor-pointer"
                >
                  About us
                </NavLink>
              </li>
              
            </ul>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
