/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import React from "react";
import { Link } from "react-scroll";
import { useSpring, animated } from "react-spring";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const styledProps = useSpring({
    opacity: isOpen ? 1 : 0,
    top: isOpen ? 0 : 10,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <button aria-label="close mobile menu"
        className="rounded inline-flex items-center"
        onClick={toggleDropdown}
      >
        <span className="text-whiteColor">SERVICES</span>
        <svg
          className={`fill-whiteColor h-4 w-4 transition-all ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 13l-5-5h10l-5 5z" />
        </svg>
      </button>
      <animated.div style={styledProps} className="absolute">
        <Link to="services" href="#services" smooth={true} duration={500}>
          <div className="absolute z-50 bg-bg py-2 w-32 shadow-lg rounded text-whiteColor left-4 top-7 ">
            <p
              className="block px-4 py-2 h-full hover:bg-white hover:text-bg cursor-pointer duration-300 "
              onClick={toggleDropdown}
            >
              Repair
            </p>
            <p
              className="block px-4 py-2 hover:bg-white hover:text-bg cursor-pointer duration-300 "
              onClick={toggleDropdown}
            >
              Cleaning
            </p>
            <p
              className="block px-4 py-2 hover:bg-white hover:text-bg cursor-pointer duration-300 "
              onClick={toggleDropdown}
            >
              Fixtures
            </p>
          </div>
        </Link>
      </animated.div>
    </div>
  );
}

export default Dropdown;
