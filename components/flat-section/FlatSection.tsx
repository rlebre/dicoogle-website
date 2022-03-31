import React from 'react';
import styles from './flat-section.module.scss';

interface Props {
  title?: string;
  subtitle1?: string;
  subtitle2?: string;
  children?: JSX.Element | JSX.Element[];
}

const FlatSection = ({ title, subtitle1, subtitle2, children }: Props) => {
  return (
    <section className='section'>
      {title && (
        <h1>
          <span>{title}</span>
        </h1>
      )}

      <div className='flex md:space-x-24 text-justify'>
        {subtitle1 && subtitle2 && (
          <div className={styles.subtitle}>
            <h3>{subtitle1}</h3>
            <h4>{subtitle2}</h4>
          </div>
        )}

        {children && <div className='flex flex-col md:columns-3 space-y-4 w-full'>{children}</div>}
      </div>
    </section>
  );
};

export default FlatSection;
