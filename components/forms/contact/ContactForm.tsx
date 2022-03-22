import React from 'react';
import { useForm } from 'react-hook-form';
import ContactFormInterface from '../../../interfaces/ContactFormInterface';
import styles from './contact-form.module.scss';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInterface>();

  const onFormSubmit = (data: ContactFormInterface) => {
    console.log(errors);
    console.log(data);
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit(onFormSubmit)}>
      <div className='flex flex-col gap-y-3'>
        <div>
          <label htmlFor='name' className='text-sm font-medium'>
            Name
          </label>
          <input
            placeholder='Name*'
            {...register('name', { required: true })}
            className={errors?.name ? ' outline outline-2 outline-red-600' : 'focus:outline-none'}
          />
          {errors?.name?.type === 'required' && <p className='text-red-600 text-sm font-medium'>Name is required.</p>}
        </div>

        <div>
          <label htmlFor='email' className='text-sm font-medium'>
            Email
          </label>
          <input
            placeholder='Email*'
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            className={errors?.email ? ' outline outline-2 outline-red-600' : 'focus:outline-none'}
          />
          {errors?.email?.type === 'required' && <p className='text-red-600 text-sm font-medium'>Email is required.</p>}
          {errors?.email?.type === 'pattern' && (
            <p className='text-red-600 text-sm font-medium'>Field must be an email.</p>
          )}
        </div>

        <div>
          <label htmlFor='subject' className='text-sm font-medium'>
            Subject
          </label>
          <input placeholder='Subject' {...register('subject')} />
        </div>

        <div>
          <label htmlFor='message' className='text-sm font-medium'>
            Message
          </label>
          <textarea
            cols={30}
            rows={7}
            placeholder='Message*'
            {...register('message', { required: true })}
            className={errors?.message ? ' outline outline-2 outline-red-600' : 'focus:outline-none'}
          ></textarea>

          {errors?.message?.type === 'required' && (
            <p className='text-red-600 text-sm font-medium'>Email is required.</p>
          )}
        </div>

        <div className='w-full  text-sm'>
          <div className='flex items-center gap-4'>
            <input
              type='checkbox'
              className={`${errors?.gdprAgreed ? 'outline outline-2 outline-red-600' : 'focus:outline-none'} w-fit`}
              {...register('gdprAgreed', { required: true })}
            />
            <label htmlFor='gdprAgreed'>
              I consent to having this website store my submitted information so they can respond to my contact
              message.*
            </label>
          </div>

          {errors?.gdprAgreed?.type === 'required' && (
            <p className='text-red-600 text-sm font-medium'>Agree is required.</p>
          )}
        </div>

        <div className='col-sm-12 g-recaptcha' data-sitekey='6Lf1ej4UAAAAAIvVJ6Nf0SGIb2dBGPcjUPq-L0sd'></div>

        <button type='submit' className={styles['submit-button']}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
