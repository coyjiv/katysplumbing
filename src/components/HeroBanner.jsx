import Image from 'next/image';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-scroll';

export const HeroBanner = () => {
  const props = useSpring({
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 10 },
    delay: 300,
  });
  const props1 = useSpring({
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 10 },
    delay: 500,
  });
  const props2 = useSpring({
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 10 },
    delay: 200,
  });
  const props3 = useSpring({
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 10 },
    delay: 200,
  });
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1538474705339-e87de81450e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-fixed bg-cover py-40 min-h-[80vh] text-whiteColor">
      <div className='inset-0 absolute z-0 w-full h-[1000px] bg-onyx opacity-20'></div>
      <div className='container mx-auto px-4 lg:px-20 relative z-10'>
        <animated.h1
          className='text-5xl lg:max-w-2xl lg:mt-10 lg:text-6xl font-bold mb-8 font-display drop-shadow-xl'
          style={props}
        >
          Need plumbing services you can trust?
        </animated.h1>
        <animated.p
          className='text-2xl mb-12 font-display font-medium'
          style={props1}
        >
          Choose Katy Plumbing!
        </animated.p>
        <animated.a
          href='#'
          className='block  drop-shadow-md shadow-lg w-fit border font-display  text-white hover:text-bg px-8 py-4 rounded-full uppercase tracking-wider font-bold hover:bg-gray-100 transition duration-300'
          style={props2}
        >
           <li className='list-none hover:text-bg'><Link smooth={true} duration={500} offset={-50} to="form1" >Schedule Service</Link></li>
          
        </animated.a>
        <animated.a
          href='#'
          className=' drop-shadow-md shadow-lg mt-5 block w-fit border font-display  text-white hover:text-bg px-8 py-4 rounded-full uppercase tracking-wider font-bold hover:bg-gray-100 transition duration-300'
          style={props3}
        >
           <li className='list-none hover:text-bg'><Link smooth={true} duration={500} offset={-50} to="about-us">About Us</Link></li>
        </animated.a>
      </div>
    </section>
  );
};
