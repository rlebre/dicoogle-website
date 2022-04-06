import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import ContactFormInterface from '../../interfaces/ContactFormInterface';
import { sendMessage } from '../../services/contact';
import Contact from '../forms/contact/ContactForm';
import LoadingScreen from '../loading-screen';
import LoadingSpinner from '../loading-spinner';
import { ModalService } from '../modal/service';

const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);
  const onFormSubmit = useCallback((data: ContactFormInterface, recaptchaToken: string | undefined) => {
    setSubmitting(true);
    sendMessage({ ...data, token: recaptchaToken })
      .then(() => {
        ModalService.success({
          title: 'Message sent',
          description: 'Your message has been sent. You will receive the reply in your email shortly.'
        });
      })
      .catch((error) => {
        ModalService.error({
          title: 'Error',
          description:
            error.response?.data?.message || 'Connection error. Please try again later or email us at ruilebre@ua.pt'
        });
      })
      .finally(() => setSubmitting(false));
  }, []);

  return (
    <section className='section'>
      {submitting && (
        <LoadingScreen>
          <LoadingSpinner />
        </LoadingScreen>
      )}

      <h1>
        <span>Contact us</span>
      </h1>

      <div className='flex flex-col md:flex-row md:space-x-24 text-justify md:columns-2 gap-y-5 md:gap-y-0'>
        <div className='w-full md:w-1/3 flex flex-col gap-y-2'>
          <p className='contact-content'>You can contact us with your questions filling the form on the right or to:</p>
          <p className='st-address'>
            <strong>
              Instituto de Engenharia Electrónica e Informática de Aveiro
              <br /> Campus Universitário de Santiago
              <br /> 3810-193 Aveiro - Portugal
            </strong>
          </p>
          <p className='flex items-center gap-2'>
            <Image src='/images/contact/phone.svg' width={20} height={20} alt='Phone' />
            <strong>+351 234 370 500</strong>
          </p>
          <p className='flex items-center gap-2'>
            <Image src='/images/contact/mail.svg' width={20} height={20} alt='Email' />
            <strong>carlos.costa@ua.pt</strong>
          </p>
        </div>

        <div className='w-full md:w-2/3 flex flex-col gap-y-2'>
          <Contact onSubmit={onFormSubmit} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
