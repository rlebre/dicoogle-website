function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

import Link from 'next/link';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import { useState } from 'react';
import { useOutsideClick } from '../click-outside/useClickOutside';
import Hamburger from '../icons/Hamburger';
import Logo from '../icons/Logo';
import styles from './navbar.module.scss';

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const navRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const [compacted, setCompacted] = useState(false);

  useOutsideClick(navRef, () => setActive(false));

  const handleClick = () => setActive(!active);

  const handleScroll = () => {
    if (window.scrollY > 60) setCompacted(true);
    else setCompacted(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header
      className={`${
        compacted ? 'h-16' : 'h-28'
      } sticky top-0 w-full flex justify-between items-center px-4 md:px-44 z-50 bg-blue-50 transition-all duration-300`}
    >
      <Link href='/'>
        <a className='p-2'>
          <Logo className={`${compacted ? 'h-7' : 'h-9'}  w-fit transition-all duration-300`} />
        </a>
      </Link>

      <nav ref={navRef}>
        <button
          className={`${styles.nav__hamburger} ${active ? 'focus:rotate-180' : 'focus:-rotate-180 '}`}
          onClick={handleClick}
        >
          <Hamburger />
        </button>

        <div
          className={`${
            active ? 'translate-x-0' : 'translate-x-full'
          } fixed md:relative md:flex md:space-y-0 md:space-x-6 md:p-0 left-0 right-0 md:translate-x-0 bg-blue-100 md:bg-blue-50 space-y-4 p-4 transform duration-500 items-center`}
        >
          <Link href='/'>
            <a className={`${styles.nav__link}`}>Home</a>
          </Link>
          <Link href='/about'>
            <a className={styles.nav__link}>About</a>
          </Link>
          <Link href='/downloads'>
            <a className={`${styles.nav__link} ${styles.nav__link__download}`}>Download</a>
          </Link>
        </div>

        {/* <div
          className={`${active ? 'w-32 md:inline-flex' : 'hidden'} w-full md:inline-flex md:w-auto flex-col ${
            styles.custom
          }`}
        >
          <div className='flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-md md:font-medium text-gray-700 md:justify-end md:items-center'>
            <Link href='/'>
              <a className={`${styles.nav__link}`}>Home</a>
            </Link>
            <Link href='/about'>
              <a className={styles.nav__link}>About</a>
            </Link>
            <Link href='/downloads'>
              <a className={`${styles.nav__link} ${styles.nav__link__download}`}>Download</a>
            </Link>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
