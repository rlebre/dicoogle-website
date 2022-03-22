import Link from 'next/link';
import React from 'react';
import styles from './button.module.scss';

interface Props {
  label: string;
  href: string;
  style?: 'button1' | 'button2';
  target?: string;
}

const Button = ({ label, href, style, target }: Props) => {
  return (
    <Link href={href}>
      <a className={`${style === 'button2' ? styles.button2 : styles.button1}`} target={target}>
        {label}
      </a>
    </Link>
  );
};

export default Button;
