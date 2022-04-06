import React, { useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import ContactFormInterface from '../../../interfaces/ContactFormInterface';
import FormInput from '../input/FormInput';
import styles from './contact-form.module.scss';

interface Props {
  onSubmit: (data: ContactFormInterface, recaptchaToken: string | undefined) => void;
}

const ContactForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormInterface>();

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('contact');
    return token;
  }, [executeRecaptcha]);

  const onFormSubmit = (data: ContactFormInterface) => {
    handleReCaptchaVerify().then((token) => {
      onSubmit(data, token);
    });
  };

  return (
    <form className='form' onSubmit={handleSubmit(onFormSubmit)}>
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

        <FormInput label='Subject' register={register('subject', { required: true })} error={errors?.subject} />

        <div>
          <label htmlFor='message' className='text-sm font-medium'>
            Message
          </label>
          <textarea
            cols={30}
            rows={7}
            placeholder='Message*'
            {...register('message', { required: true })}
            className={`form__field  ${errors?.email ? ' outline outline-2 outline-red-600' : 'focus:outline-none'}`}
          ></textarea>

          {errors?.message?.type === 'required' && (
            <p className='text-red-600 text-sm font-medium'>Email is required.</p>
          )}
        </div>

        <FormInput
          label='I consent to having this website store my submitted information so they can respond to my contact
            message.*'
          name='Agreement'
          type='checkbox'
          register={register('gdprAgreed', { required: true })}
          error={errors?.gdprAgreed}
        />

        <button type='submit' className={styles['submit-button']}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
