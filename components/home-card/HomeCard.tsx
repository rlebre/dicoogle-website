import Image from 'next/image';
import React from 'react';
import styles from './home-card.module.scss';

interface Props {
  imageUrl: string;
  imageHeight: string;
  imageWidth: string;
  title?: string;
  description: string[];
  children?: JSX.Element | JSX.Element[] | string;
}

const HomeCard = ({ imageUrl, imageHeight, imageWidth, title, description, children }: Props) => {
  return (
    <div className='md:max-w-xs'>
      <div className={`circletag h-fit w-fit ${+imageHeight < 30 ? 'p-4' : 'p-10'}`}>
        <Image src={imageUrl} alt='Research' width={imageWidth} height={imageHeight} />
      </div>

      <h2 className='text-xl my-4'>{title}</h2>

      {description.map((p) => (
        <p key={p} className='text-justify'>
          {p}
        </p>
      ))}

      {children}
    </div>
  );
};

export default HomeCard;
