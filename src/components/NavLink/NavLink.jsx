import React from 'react'
import { Link } from "react-scroll";

const NavLink = ({href, text}) => {
  return (
    <li className='navigation__item duration-300 hover:translate-y-[-0.2rem] text-[#392820] cursor-pointer'>
      <Link to={href} smooth={true} duration={500}>
        {text}
      </Link>
    </li>
  )
}

export default NavLink
