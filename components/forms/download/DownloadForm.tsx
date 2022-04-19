import React, { useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import Country from '../../../interfaces/Country';
import DownloadFormInterface from '../../../interfaces/DownloadFormInterface';
import Release from '../../../interfaces/GithubRelease';
import FormInput from '../input/FormInput';
import styles from './download-form.module.scss';

interface Props {
  countries: Country[];
  release: Release;
  onSubmit: (data: DownloadFormInterface, release: Release, recaptchaToken: string | undefined) => void;
}

const DownloadForm = ({ countries, release, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DownloadFormInterface>();

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('download');
    return token;
  }, [executeRecaptcha]);

  const onFormSubmit = (data: DownloadFormInterface) => {
    handleReCaptchaVerify().then((token) => {
      onSubmit(data, release, token);
    });
  };

  return (
    <>
      <form className='contact-form' onSubmit={handleSubmit(onFormSubmit)}>
        <div className='flex flex-col gap-y-3'>
          <FormInput label='Name' register={register('name', { required: true })} error={errors?.name} />

          <FormInput
            label='Email'
            register={register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            error={errors?.email}
          />

          <FormInput label='Company' register={register('company')} error={errors?.company} />

          <div className='flex flex-col'>
            <label htmlFor='country' className='text-sm font-medium'>
              Country
            </label>
            <select {...register('country', { required: true })} defaultValue='' className='form__field max-w-xs'>
              <option value='' disabled hidden>
                Country*
              </option>
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
            <input
              list='interests'
              name='interest'
              required
              placeholder='Dicoogle Interest*'
              className='w-fit form__field'
            />
            <datalist id='interests'>
              <option value='R&D' />
              <option value='Commercial Use' />
              <option value='Development' />
              <option value='Educational' />
            </datalist>
            {errors?.interests?.type === 'required' && (
              <p className='text-red-600 text-sm font-medium'>Interest is required.</p>
            )}
          </div>

          <FormInput
            label='I want to request the source code of the Dicoogle v3.x.x storage and query/index plugins.'
            type='checkbox'
            register={register('pluginsSourceCode')}
            error={errors?.pluginsSourceCode}
          />

          <FormInput
            label='I want to receive major updates and news about Dicoogle.'
            type='checkbox'
            register={register('newsletter')}
            error={errors?.newsletter}
          />

          <FormInput
            label='I consent to having this website store my submitted information so they can respond to my download
            request.*'
            name='Agreement'
            type='checkbox'
            register={register('gdprAgreed', { required: true })}
            error={errors?.gdprAgreed}
          />

          <button type='submit' className={styles['submit-button']}>
            Request Download
          </button>
        </div>
      </form>
    </>
  );
};

export default DownloadForm;
