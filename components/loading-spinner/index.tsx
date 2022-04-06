import React from 'react';
import styles from './loading-spinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={styles.loading__spinner}>
      <div className={styles.loading}>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
