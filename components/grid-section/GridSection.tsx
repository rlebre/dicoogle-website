import React from 'react';
import Image from 'next/image';
import styles from './grid-section.module.scss';

interface Props {
  title: string;
  children?: JSX.Element | JSX.Element[] | string;
}

const GridSection = ({ title, children }: Props) => {
  return (
    <section className='section w-full'>
      <h1>
        <span>{title}</span>
      </h1>

      {children && <div className='flex flex-wrap justify-between'>{children}</div>}
    </section>
  );
};

export default GridSection;
