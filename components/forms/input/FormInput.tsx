import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  name?: string;
  label: string;
  register: UseFormRegisterReturn;
  type?: 'text' | 'checkbox';
  error?: FieldError;
}

const FormInput = ({ name, label, register, type, error }: Props) => {
  return (
    <div className={`${type === 'checkbox' ? 'flex items-center gap-4' : ''}`}>
      {type !== 'checkbox' && (
        <label htmlFor={register.name} className='text-sm font-medium'>
          {label}
        </label>
      )}

      <input
        placeholder={`${label} ${register.required ? '*' : ''}`}
        type={type}
        {...register}
        className={`form__field 
        ${error ? ' outline outline-2 outline-red-600' : 'focus:outline-none'} 
        ${type === 'checkbox' ? 'w-fit' : 'w-full'}`}
      />

      {error?.type === 'required' && <p className='text-red-600 text-sm font-medium'>{name || label} is required.</p>}
      {error?.type === 'pattern' && <p className='text-red-600 text-sm font-medium'>Field must be a valid {label}.</p>}

      {type === 'checkbox' && (
        <label htmlFor={register.name} className='text-sm'>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
