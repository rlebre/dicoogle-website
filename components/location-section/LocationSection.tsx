import React from 'react';
import Button from '../button/Button';
import styles from './location-section.module.scss';

const LocationSection = () => {
  return (
    <div className={styles.location}>
      <div className='container flex flex-col md:flex-row py-8 gap-8 '>
        <div className='w-full md:w-1/2  flex flex-col gap-y-4'>
          <h4>UA.PT Bioinformatics Headquarters</h4>
          <p className='text-justify'>
            We are placed at IEETA - Institute of Electronics and Informatics Engineering of Aveiro, a Computer Science
            and Engineering / Electronics and Electrical Engineering research unit, on the University of Aveiro campus.
          </p>

          <Button label='View more »' href='http://wiki.ieeta.pt/wiki/index.php/Main_Page' target='_blank' />
        </div>

        <div className='w-full md:w-1/2' data-ride='carousel'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5732.41576722815!2d-8.656957820498725!3d40.63164028056489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5b3d68e036c9f52!2sIEETA+-+Instituto+de+Engenharia+Electr%C3%B3nica+e+Telem%C3%A1tica+de+Aveiro!5e0!3m2!1sen!2spt!4v1504775207590'
            height='300'
            className='w-full'
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
