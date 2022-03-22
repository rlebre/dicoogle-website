import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DownloadFormInterface from '../../../interfaces/DownloadFormInterface';
import Country from '../../../interfaces/Country';
import styles from './download-form.module.scss';
import { Modal } from '../../modal/modal';

interface Props {
  countries: Country[];
}

const DownloadForm = ({ countries }: Props) => {
  const [showModal, setShowModal] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DownloadFormInterface>();

  const onFormSubmit = (data: DownloadFormInterface) => {
    console.log(errors);
    console.log(data);
  };

  return (
    <>
      {showModal && <Modal handleCloseClick={() => setShowModal(false)}>Ola</Modal>}

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
            {errors?.email?.type === 'required' && (
              <p className='text-red-600 text-sm font-medium'>Email is required.</p>
            )}
            {errors?.email?.type === 'pattern' && (
              <p className='text-red-600 text-sm font-medium'>Field must be an email.</p>
            )}
          </div>

          <div>
            <label htmlFor='company' className='text-sm font-medium'>
              Company
            </label>
            <input
              placeholder='Company*'
              {...register('company', {
                required: true,
              })}
              className={errors?.company ? ' outline outline-2 outline-red-600' : 'focus:outline-none'}
            />
            {errors?.company?.type === 'required' && (
              <p className='text-red-600 text-sm font-medium'>Company is required.</p>
            )}
          </div>

          <div className='flex flex-col'>
            <label htmlFor='country' className='text-sm font-medium'>
              Country
            </label>
            <select name='country' placeholder='Country*'>
              {countries.map((country) => (
                <option key={country.Code} value={country.Name}>
                  {country.Name}
                </option>
              ))}
            </select>
            {errors?.country?.Name?.type === 'required' && (
              <p className='text-red-600 text-sm font-medium'>Country is required.</p>
            )}
          </div>

          <div className='flex flex-col'>
            <label htmlFor='interest' className='text-sm font-medium'>
              Interests
            </label>
            <input list='interests' name='interest' required placeholder='Dicoogle Interest*' className='w-fit' />
            <datalist id='interests'>
              <option value='R&D' />
              <option value='Commercial Use' />
              <option value='Development' />
              <option value='Educational' />
            </datalist>
            {errors?.interest?.type === 'required' && (
              <p className='text-red-600 text-sm font-medium'>Interest is required.</p>
            )}
          </div>

          <div className='w-full text-sm'>
            <div className='flex items-center gap-4'>
              <input type='checkbox' className='w-fit' {...register('pluginsSourceCode')} />
              <label htmlFor='pluginsSourceCode'>
                I want to request the source code for the Dicoogle v3.x.x storage and query/index plugins.
              </label>
            </div>
          </div>

          <div className='w-full text-sm'>
            <div className='flex items-center gap-4'>
              <input type='checkbox' className='w-fit' {...register('newsletter')} />
              <label htmlFor='gdprAgreed'>I want to receive major updates and news about Dicoogle.</label>
            </div>
          </div>

          <div className='w-full text-sm'>
            <div className='flex items-center gap-4'>
              <input
                type='checkbox'
                className={`${errors?.gdprAgreed ? 'outline outline-2 outline-red-600' : 'focus:outline-none'} w-fit`}
                {...register('gdprAgreed', { required: true })}
              />
              <label htmlFor='gdprAgreed' className='font-medium'>
                I consent to having this website store my submitted information so they can respond to my download
                request.*
              </label>
            </div>

            {errors?.gdprAgreed?.type === 'required' && (
              <p className='text-red-600 text-sm font-medium'>Agree is required.</p>
            )}
          </div>

          <div className='col-sm-12 g-recaptcha' data-sitekey='6Lf1ej4UAAAAAIvVJ6Nf0SGIb2dBGPcjUPq-L0sd'></div>

          <button type='submit' className={styles['submit-button']}>
            Request Download
          </button>
        </div>
      </form>
    </>
  );
};

export default DownloadForm;