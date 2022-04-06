import React from 'react';
import styles from './loading-screen.module.scss';

interface Props {
  children: JSX.Element;
}

const LoadingScreen = ({ children }: Props) => {
  return (
    <div className={styles.loading}>
      <div>{children}</div>
    </div>
  );
};

export default LoadingScreen;
