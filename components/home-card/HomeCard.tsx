import Image from 'next/image';
import React from 'react';

interface Props {
  image: { data: { attributes: { url: string } } };
  imageHeight: number;
  imageWidth: number;
  title?: string;
  description: string[];
  circletagStyles?: React.CSSProperties;
  children?: JSX.Element | JSX.Element[] | string;
}

const HomeCard = ({ image, imageHeight, imageWidth, title, description, circletagStyles, children }: Props) => {
  return (
    <div className='md:max-w-xs'>
      <div className={`circletag h-fit w-fit ${+imageHeight < 30 ? 'p-4' : 'p-10'}`} style={circletagStyles}>
        <Image
          src={`${process.env.NEXT_PUBLIC_CMS_URL}${image.data.attributes.url}`}
          alt='Research'
          width={imageWidth}
          height={imageHeight}
        />
      </div>

      <h2 className='md:mt-10 text-xl my-4'>{title}</h2>

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
