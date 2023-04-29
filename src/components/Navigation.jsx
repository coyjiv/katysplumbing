/* eslint-disable jsx-a11y/anchor-is-valid */

import Dropdown from './buttons/Dropdown';
import { Link } from 'react-scroll';
import HeaderDropdownMobile from './buttons/HeaderDropdownMobile';
import NavLink from './NavLink/NavLink';

const Navigation = () => {
  return (
    <nav className='navigation sticky top-0'>
      <div className='navigation__wrapper  flex justify-between sm:gap-8 lg:gap-10 flex-wrap items-center  flex-row lg:h-20 px-10 bg-bg'>
        <div className='navigation__logo w-40  lg:mr-48 flex items-center'>
          <a className='navigation__logo link'>
            <picture>
              <source
                media='(max-width: 1023px)'
                srcSet='/img/logo-v2-sm.png'
              />
              <source media='(min-width: 1024px)' srcSet='/img/logo-v2.png' />
              <img
                src='/img/logo-v2.png'
                className='flex items-center sepia-[80%]'
                alt='Remsvol'
              />
            </picture>
          </a>
        </div>
        <div className='navigation__items hidden md:hidden lg:block'>
          <ul className='flex flex-row gap-6 md:gap-4 lg:gap-6 font-bold lg:text-lg'>
            <NavLink href='about-us' text='ABOUT US' />
            <li className='navigation__item duration-300 hover:translate-y-[-0.2rem] text-darkBrown-100'>
              <Dropdown />
            </li>
            <NavLink href='reviews' text='REVIEWS' />
            <NavLink href='contact-us' text='CONTACT US' />
          </ul>
        </div>

        {/* SKRYTO na mobilah  */}
        <div className='navigation__icons md:gap-4 gap-8 hidden md:hidden lg:flex items-center'>
          <div className='lg:hidden'>
            <Link to='contact-us' smooth={true} duration={500}>
              <img
                loading='lazy'
                className='h-6'
                src='/img/icons/mail-icon.png'
                alt='Mail to'
              />
            </Link>
            <a
              href='https://www.instagram.com/remsvol/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                loading='lazy'
                className='h-6'
                src='/img/icons/instagram-icon.png'
                alt='Instagram'
              />
            </a>
            <a
              href='https://www.facebook.com/people/Remsvol-LLC/100077963119966/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                loading='lazy'
                className='h-6'
                src='/img/icons/facebook-icon.png'
                alt='Facebook'
              />
            </a>
            <a
              href='https://www.youtube.com/channel/UC5NMmpM3PEhac5A9fjvhDfA'
              target='_blank'
              rel='noreferrer'
            >
              <img
                loading='lazy'
                className='h-6'
                src='/img/icons/youtube-icon.png'
                alt='Youtube'
              />
            </a>
            <Link to='contact-us' smooth={true} duration={500}>
              <img
                loading='lazy'
                className='h-6'
                src='/img/icons/phone-icon.png'
                alt='contact to'
              />
            </Link>
          </div>
          <Link to='apply-form' smooth={true} duration={500}>
            <div className='navigation__button bg-[#392820] text-[#ebe0bf] cursor-pointer p-3 rounded-3xl duration-300 hover:-translate-y-1 transition-all text-lg font-bold lg:px-5'>
              APPLY NOW
            </div>
          </Link>
        </div>
        <HeaderDropdownMobile />
      </div>
    </nav>
  );
};

export default Navigation;
