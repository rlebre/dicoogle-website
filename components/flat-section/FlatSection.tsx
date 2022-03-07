import React from 'react';
import Image from 'next/image';
import styles from './flat-section.module.scss';

interface Props {
  title: string;
  subtitle?: string;
  description?: string;
  children?: JSX.Element | JSX.Element[];
}

const FlatSection = ({ title, subtitle, description, children }: Props) => {
  return (
    <section className='section'>
      <h1>
        <span>{title}</span>
      </h1>

      <div className='flex md:space-x-24 text-justify'>
        <div className={styles.subtitle}>
          <h3>What is</h3>
          <h4>Dicoogle</h4>
        </div>

        <div className='flex items-center'>
          Dicoogle is an open source Picture Archiving and Communications System (PACS) archive. Its modular
          architecture allows the quick development of new functionalities, due the availability of a Software
          Development Kit (SDK).
        </div>
      </div>

      {children && <div className='md:columns-3 space-y-12 md:space-x-12'>{children}</div>}
    </section>
  );
};

export default FlatSection;
