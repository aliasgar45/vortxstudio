import { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-4 sm:top-10 left-1/2 transform ${
        isMenuOpen &&
        "border-[#FF7722]/20 shadow-[0px_4px_16px_0px_rgba(89,48,24,0.12)]"
      }  -translate-x-1/2 w-[95%] sm:w-[640px] bg-white rounded-[10px] border border-solid border-[#D9D9D9] z-50 overflow-hidden`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className={`w-8 h-8 sm:w-auto sm:h-auto transition-all duration-300 ${
            isMenuOpen ? "" : ""
          }`}
        />

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6">
          <li>
            <a
              href="#work"
              className="body-regular text-gray-700 hover:text-gray-900"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="body-regular text-gray-700 hover:text-gray-900"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className="body-regular text-gray-700 hover:text-gray-900"
            >
              Testimonial
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="body-regular text-gray-700 hover:text-gray-900"
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="sm:hidden">
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="sm:hidden space-y-2 pb-4  ">
          <li>
            <a
              href="#work"
              className="block body-regular hover:bg-[#FF7722] py-2 px-4 rounded transition-colors duration-200"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block body-regular hover:bg-[#FF7722] py-2 px-4 rounded transition-colors duration-200"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className="block body-regular hover:bg-[#FF7722] py-2 px-4 rounded transition-colors duration-200"
            >
              Testimonial
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="block body-regular hover:bg-[#FF7722] py-2 px-4 rounded transition-colors duration-200"
            >
              FAQ
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
