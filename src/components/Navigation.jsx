import Dropdown from "./buttons/Dropdown";

import HeaderDropdownMobile from "./buttons/HeaderDropdownMobile";
import NavLink from "./NavLink/NavLink";

export const Navigation = () => {
  return (
    <nav className="navigation fixed top-0 w-full  z-40">
      <div className="navigation__wrapper py-2 md:py-0 md:h-20 flex justify-between sm:gap-8 lg:gap-2 flex-wrap items-center  flex-row lg:h-20 px-5 md:px-10  bg-bg">
        <div className="navigation__logo w-40  lg:mr-48 flex items-center">
          <a className="navigation__logo link">
            <div className=" p-[2px] lg:px-2 h-9 max-w-[2.25rem] lg:max-w-[3.5rem] lg:h-14 flex justify-evenly items-center drop-shadow-lg bg-brightViolet bg-opacity-60 rounded-full">
              <h1 className="sr-only font-bold font-sans text-2xl text-whiteColor">
                Kattys Plumbing Service
              </h1>
              <picture>
                <source
                  media="(max-width: 1023px)"
                  srcSet="/img/logo-sm.webp"
                />
                <source media="(min-width: 1024px)" srcSet="/img/logo.webp" />
                <img
                  src="/img/logo.webp"
                  className="w-11 h-auto shadow-2xl"
                  alt="Katys Plumbing Service logo"
                />
              </picture>
            </div>
          </a>
        </div>
        <div className="navigation__items hidden md:hidden lg:block">
          <ul className="flex flex-row gap-6 md:gap-4 lg:gap-4 font-bold lg:text-lg">
            <li className="duration-300 hover:translate-y-[-0.2rem]"><NavLink href="about-us" text="ABOUT US" /></li>
            <li className="navigation__item duration-300 hover:translate-y-[-0.2rem] text-white">
              <Dropdown />
            </li>
            <li className="duration-300 hover:translate-y-[-0.2rem]"><NavLink href="reviews" text="REVIEWS" /></li>
            <li className="duration-300 hover:translate-y-[-0.2rem]"><NavLink href="contact-us" text="CONTACT US" /></li>
          </ul>
        </div>

        {/* hidden on mobile devices  */}
        <a
          href="tel:+1-832-816-8860"
          className="navigation__button hidden lg:block text-whiteColor cursor-pointer p-3 rounded-3xl duration-300 hover:text-ultraViolet text-lg font-bold "
        >
          <p>+1-832-816-8860</p>
        </a>
        <a
          href="tel:832-816-8860"
          className="font-display navigation__button hidden lg:block bg-ultraViolet hover:bg-brightViolet text-whiteColor cursor-pointer p-3 rounded-3xl duration-300 hover:-translate-y-1 transition-all text-lg font-bold lg:px-5"
        >
          CALL NOW
        </a>

        <HeaderDropdownMobile />
      </div>
    </nav>
  );
};
