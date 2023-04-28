import { useState } from 'react'
import React from 'react'
import { Link } from 'react-scroll'
import { useSpring, animated } from 'react-spring'

function HeaderDropdownMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const props = useSpring({
    pointerEvents: isOpen ? 'all' : 'none',
    opacity: isOpen ? 1 : 0,
    right: isOpen ? 0 : -700,
    top: isOpen ? 0 : 0,
  })

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  const handleLinkClick = (e) => {
    e.preventDefault()
    toggleDropdown()
    console.log(e.target.innerText)
  }
  return (
    <>
      <div className='relative lg:hidden'>
        <button
          className='rounded flex justify-center items-center'
          onClick={toggleDropdown}
        >
          <svg
            stroke='currentColor'
            fill='#392820'
            strokeWidth='0'
            viewBox='0 0 512 512'
            height='2em'
            width='2em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z'></path>
          </svg>
        </button>
      </div>
      <animated.div
        className='fixed z-50 bg-[#c09559] shadow-lg rounded h-screen w-screen'
        style={props}
      >
       <div className='h-full relative'>
          <button onClick={toggleDropdown} className='absolute right-10 top-5'>
            <svg
              stroke='currentColor'
              fill='#392820'
              strokeWidth='0'
              viewBox='0 0 1024 1024'
              height='2em'
              width='2em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'></path>
            </svg>
          </button>
          <ul className=' py-12 px-10 text-left w-[380px]  text-white  '>
            <Link to='about-us' smooth={true} duration={500}>
              <li
                href='#'
                className='block px-4 py-2 h-full  hover:bg-[#392820]  duration-300 '
                onClick={handleLinkClick}
              >
                About us
              </li>
            </Link>
            <Link to='services' smooth={true} duration={500}>
              <li
                href='#'
                className='block px-4 py-2 hover:bg-[#392820] duration-300 '
                onClick={handleLinkClick}
              >
                Services
              </li>
            </Link>
            <Link to='reviews' smooth={true} duration={500}>
              <li
                href='#'
                className='block px-4 py-2 hover:bg-[#392820] duration-300 '
                onClick={handleLinkClick}
              >
                Reviews
              </li>
            </Link>
            <Link to='contact-us' smooth={true} duration={500}>
              <li
                href='#'
                className='block px-4 py-2 hover:bg-[#392820] duration-300 '
                onClick={handleLinkClick}
              >
                Contact us
              </li>
            </Link>
            <Link to='apply-form' onClick={handleLinkClick} smooth={true} duration={500}>
            <div className='mx-4 py-2 w-fit navigation__button cursor-pointer p-1 duration-300 border-b'>
                Apply now
            </div>
          </Link>
          </ul>
          
       </div>
      </animated.div>
    </>
  )
}

export default HeaderDropdownMobile
