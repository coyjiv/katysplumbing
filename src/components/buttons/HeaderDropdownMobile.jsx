import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { Link } from 'react-scroll'
import { useSpring, animated } from 'react-spring'

function HeaderDropdownMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const ulRef = useRef(null)

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
    toggleDropdown()
  }

  useEffect(() => {
    if (ulRef?.current) {
      console.dir(ulRef.current)
    }
  }, [ulRef])
  return (
    <>
      <div className='relative lg:hidden'>
        <button
          className='rounded flex justify-center items-center'
          onClick={toggleDropdown}
        >
          <svg
            stroke='currentColor'
            className='fill-whiteColor'
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
        className='fixed z-[101] bg-bg shadow-lg rounded h-screen w-screen'
        style={props}
      >
        <div className='h-full z-[100] relative'>
          <button
            aria-label={'close mobile menu'}
            onClick={toggleDropdown}
            className='absolute right-10 top-5'
          >
            <svg
              className='fill-whiteColor'
              strokeWidth='0'
              viewBox='0 0 1024 1024'
              height='2em'
              width='2em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'></path>
            </svg>
          </button>
          <ul
            className=' py-12 px-10 text-left w-[380px]  text-white  '
            ref={ulRef}
          >
            <li className=' text-whiteColor block px-4 py-2 h-full  hover:bg-ultraViolet  duration-300 '>
              <Link
                to='about-us'
                href="#about-us"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={handleLinkClick}
              >
                About us
              </Link>
            </li>
            <li className=' text-whiteColor block px-4 py-2 hover:bg-ultraViolet duration-300 '>
              <Link
                to='services'
                href="#services"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li className=' text-whiteColor block px-4 py-2 hover:bg-ultraViolet duration-300 '>
              <Link
                to='reviews'
                href="#reviews"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={handleLinkClick}
              >
                Reviews
              </Link>
            </li>
            <li className=' text-whiteColor block px-4 py-2 hover:bg-ultraViolet duration-300 '>
              <Link
                to='contact-us'
                href="#contact-us"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={handleLinkClick}
              >
                Contact us
              </Link>
            </li>

            <a
              href='tel: (832) 816-8860'
              className='text-whiteColor mx-4 mt-5 block py-2 w-fit navigation__button cursor-pointer p-1 duration-300 border-b'
            >
              Call now
            </a>
          </ul>
        </div>
      </animated.div>
    </>
  )
}

export default HeaderDropdownMobile
