function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

import Link from 'next/link';
import React, { MutableRefObject, useRef } from 'react';
import { useState } from 'react';
import { useOutsideClick } from '../click-outside/useClickOutside';
import Hamburger from '../icons/Hamburger';
import Logo from '../icons/Logo';
import styles from './navbar.module.scss';

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const navRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  useOutsideClick(navRef, () => setActive(false));

  const handleClick = () => setActive(!active);

  return (
    <nav
      ref={navRef}
      className='md:fixed md:top-0 w-full flex items-center flex-wrap bg-blue-50 p-3 md:px-28 md:justify-between'
    >
      <button
        className={`${styles.nav__hamburger} ${active ? 'focus:rotate-180' : 'focus:-rotate-180 '}`}
        onClick={handleClick}
      >
        <Hamburger />
      </button>

      <Link href='/'>
        <a className='p-2'>
          <Logo className='h-9 w-fit' />
        </a>
      </Link>

      <div className={`${active ? 'w-32 md:inline-flex' : 'hidden'} w-full md:inline-flex md:w-auto`}>
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
      </div>
    </nav>
  );
};

export default Navbar;
