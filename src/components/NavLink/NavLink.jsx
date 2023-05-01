import React from "react";
import { Link } from "react-scroll";

const NavLink = ({ href, text }) => {
  return (
    
      <Link className="navigation__item  text-whiteColor cursor-pointer" to={href} smooth={true} duration={500} offset={-50}>
        {text}
      </Link>
    
  );
};

export default NavLink;
