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
    <header className={`${compacted ? 'h-16' : 'h-28'} ${styles.header}`}>
      <div className={styles.header__container}>
        <Link href='/'>
          <a className='p-2'>
            <Logo className={`${compacted ? 'h-7' : 'h-9'} ${styles.header__logo}`} />
          </a>
        </Link>

        <nav ref={navRef}>
          <button
            className={`${styles.nav__hamburger} ${active ? 'focus:rotate-180' : 'focus:-rotate-180 '}`}
            onClick={handleClick}
          >
            <Hamburger />
          </button>

          <div className={`${active ? 'translate-x-0' : 'translate-x-full'} ${styles.nav__links}`}>
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
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
