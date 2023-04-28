/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import React from 'react'
import { Link } from 'react-scroll'
import { useSpring, animated } from 'react-spring'

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const styledProps = useSpring({
    opacity: isOpen ? 1 : 0,
    top: isOpen ? 0 : 10,
  })

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='relative'>
      <button
        className='rounded inline-flex items-center'
        onClick={toggleDropdown}
      >
        <span>SERVICES</span>
        <svg
          className={`fill-current h-4 w-4 transition-all ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M10 13l-5-5h10l-5 5z' />
        </svg>
      </button>
      <animated.div style={styledProps} className='absolute'>
        <Link to='services' smooth={true} duration={500}>
          <div className='absolute z-50 bg-[#ebe0bf] py-2 w-32 shadow-lg rounded text-[#392820] left-4 top-7 '>
            <p
              className='block px-4 py-2 h-full hover:bg-[#392820] hover:text-white  duration-300 '
              onClick={toggleDropdown}
            >
              Residential
            </p>
            <p
              className='block px-4 py-2 hover:bg-[#392820] hover:text-white  duration-300 '
              onClick={toggleDropdown}
            >
              Commercial
            </p>
            <p
              className='block px-4 py-2 hover:bg-[#392820] hover:text-white  duration-300 '
              onClick={toggleDropdown}
            >
              Custom
            </p>
          </div>
        </Link>
      </animated.div>
    </div>
  )
}

export default Dropdown
