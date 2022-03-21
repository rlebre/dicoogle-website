import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logos}>
        <Link href={'https://bioinformatics.ua.pt/'}>
          <a className={styles.logo} target='_blank'>
            <Image src='/images/credits/logo_bioinformatics.png' alt='Bioinformatics' width={150} height={30} />
          </a>
        </Link>

        <Link href={'https://www.bmd-software.com/'}>
          <a className={styles.logo} target='_blank'>
            <Image src='/images/credits/logo_bmd.svg' alt='Logo BMD Software' width={120} height={25} />
          </a>
        </Link>

        <Link href={'http://wiki.ieeta.pt/wiki/index.php/Main_Page'}>
          <a className={styles.logo} target='_blank'>
            <Image src='/images/credits/logo_ieeta.png' alt='Logo IEETA' width={200} height={70} />
          </a>
        </Link>

        <Link href={'https://www.ua.pt'}>
          <a className={styles.logo} target='_blank'>
            <Image src='/images/credits/logo_ua.svg' alt='Logo UA' width={110} height={55} />
          </a>
        </Link>
      </div>

      <div className={styles.footer__funding}>
        Dicoogle received funding from FCT projects (PTDC/EIA-EIA/104428/2008 and PTDC/EEI-ESS/6815/2014)
      </div>
    </footer>
  );
};

export default Footer;
