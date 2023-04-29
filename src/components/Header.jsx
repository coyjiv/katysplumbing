/* eslint-disable jsx-a11y/anchor-is-valid */

import Dropdown from "./buttons/Dropdown";
import { Link } from "react-scroll";
import HeaderDropdownMobile from "./buttons/HeaderDropdownMobile";
import NavLink from "./NavLink/NavLink";

const Header = () => {
  return (
    <nav className="navigation sticky top-0">
      <div className="navigation__wrapper  flex justify-between sm:gap-8 lg:gap-10 flex-wrap items-center  flex-row lg:h-20 px-10 bg-bg">
        <div className="navigation__logo w-40  lg:mr-48 flex items-center">
          <a className="navigation__logo link">
            <picture>
              <source media="(max-width: 1023px)" srcSet="/img/logo-sm.webp" />
              <source media="(min-width: 1024px)" srcSet="/img/logo.webp" />
              <img
                src="/img/logo-v2.png"
                className="flex items-center w-20 h-20"
                alt="Remsvol"
              />
            </picture>
          </a>
        </div>
        <div className="navigation__items hidden md:hidden lg:block">
          <ul className="flex flex-row gap-6 md:gap-4 lg:gap-6 font-bold lg:text-lg">
            <NavLink href="about-us" text="ABOUT US" />
            <li className="navigation__item duration-300 hover:translate-y-[-0.2rem] text-white">
              <Dropdown />
            </li>
            <NavLink href="reviews" text="REVIEWS" />
            <NavLink href="contact-us" text="CONTACT US" />
          </ul>
        </div>

        {/* SKRYTO na mobilah  */}
        <a
          href="tel:(281) 829-9828"
          className="navigation__button hidden lg:block text-whiteColor cursor-pointer p-3 rounded-3xl duration-300 hover:text-ultraViolet text-lg font-bold "
        >
          <p>(281) 829-9828</p>
        </a>
        <a
          href="tel: (832) 816-8860"
          className="navigation__button hidden lg:block bg-ultraViolet hover:bg-brightViolet text-whiteColor cursor-pointer p-3 rounded-3xl duration-300 hover:-translate-y-1 transition-all text-lg font-bold lg:px-5"
        >
          CALL NOW
        </a>

        <HeaderDropdownMobile />
      </div>
    </nav>
  );
};

export default Header;
