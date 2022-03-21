import Link from 'next/link';
import React from 'react';
import styles from './button.module.scss';

interface Props {
  label: string;
  href: string;
  style?: 'button1' | 'button2';
}

const Button = ({ label, href, style }: Props) => {
  return (
    <Link href={href}>
      <a className={`${style === 'button2' ? styles.button2 : styles.button1}`}>{label}</a>
    </Link>
  );
};

export default Button;
