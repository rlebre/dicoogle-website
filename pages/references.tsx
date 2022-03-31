import React from 'react';
import FlatSection from '../components/flat-section/FlatSection';
import Exclamation from '../components/icons/Exclamation';

const References = () => {
  return (
    <div className='container pt-16'>
      <FlatSection title='References'>
        <div className='h-80 w-full flex items-center justify-center gap-5'>
          <Exclamation className='w-16 h-16 fill-orange-400' />
          <span className='text-xl'>Work in progress</span>
        </div>
      </FlatSection>
    </div>
  );
};

export default References;
