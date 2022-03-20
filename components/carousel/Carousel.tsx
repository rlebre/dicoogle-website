import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Left from '../icons/Left';
import Right from '../icons/Right';
import styles from './carousel.module.scss';

interface ItemProps {
  children: JSX.Element | JSX.Element[] | string;
  width?: string;
}

interface Props {
  timeout?: number;
  children: JSX.Element | JSX.Element[];
}

export const CarouselItem = ({ children }: ItemProps) => {
  return <div className={styles.carousel__item}>{children}</div>;
};

const Carousel = ({ children, timeout }: Props) => {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) updateSlide(slide + 1);
    }, timeout || 5000);

    return () => {
      if (interval) clearInterval(interval);
    };
  });

  const updateSlide = (newSlide: number) => {
    if (newSlide < 0) {
      newSlide = React.Children.count(children) - 1;
    } else if (newSlide >= React.Children.count(children)) {
      newSlide = 0;
    }

    setSlide(newSlide);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => updateSlide(slide + 1),
    onSwipedRight: () => updateSlide(slide - 1),
  });

  return (
    <div className={styles.container}>
      <div className={styles.indicator}>
        <button className={styles.indicator__left} onClick={() => updateSlide(slide - 1)}>
          <Left strokeWidth={4} />
        </button>
      </div>

      <div className={styles.carousel} {...swipeHandlers}>
        <div className={styles.carousel__inner} style={{ transform: `translateX(-${slide * 100}%)` }}>
          {React.Children.map(children, (child) => React.cloneElement(child))}
        </div>

        <div className={styles.indicator}>
          <div className={styles.indicators}>
            {React.Children.map(children, (child, index) => (
              <button
                className={`${styles.indicator__button} ${index === slide ? styles.indicator__button__active : ''}`}
                onClick={() => updateSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.indicator}>
        <button className={styles.indicator__right} onClick={() => updateSlide(slide + 1)}>
          <Right strokeWidth={4} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
