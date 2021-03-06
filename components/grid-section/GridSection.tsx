import React from 'react';

interface Props {
  title?: string;
  children?: JSX.Element | JSX.Element[] | string;
}

const GridSection = ({ title, children }: Props) => {
  return (
    <section className='section w-full'>
      {title && (
        <h1>
          <span>{title}</span>
        </h1>
      )}

      {children && <div className='flex flex-wrap justify-between gap-y-8'>{children}</div>}
    </section>
  );
};

export default GridSection;
