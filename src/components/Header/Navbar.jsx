import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";


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
              <Link to="/proposals">Fund</Link>
            </li>
            <li className="hidden md:inline-block  text-[#091913] font-serif">
              <Link to="/create-proposal">Submit proposal</Link>
            </li>
            <li className="hidden md:inline-block  text-[#091913] font-serif">
              <Link to="/student-details">Check proposal</Link>
            </li>
            <li className="hidden md:inline-block  text-[#091913] font-serif">
              <Link to="/about-us">About us</Link>
            </li>
          </ul>


          <w3m-button />


          <div className="md:hidden">
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link to="/" class="block py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                </li>
                <li>
                  <Link to="/fund" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Fund</Link>
                </li>
                <li>
                  <Link to="/create-proposal" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Submit Proposal</Link>
                </li>
                <li>
                  <Link to="/about-us" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About us</Link>
                </li>

              </ul>
            </div>
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
                  href="/fund/0"
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
