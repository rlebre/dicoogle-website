import type { NextPage } from 'next';
import React from 'react';
import FlatSection from '../components/flat-section/FlatSection';
import ReferenceTabbedView from '../components/tab-view/references';
import { getReferences } from '../services/references';

interface ReferencesProps {
  references: any;
}

const References: NextPage<ReferencesProps> = ({ references }: ReferencesProps) => {
  return (
    <div className='container pt-16'>
      <FlatSection title='References'>
        <ReferenceTabbedView references={references} />
      </FlatSection>
    </div>
  );
};

export const getStaticProps = async () => {
  const references = await getReferences();

  return {
    props: {
      references,

      revalidate: 60 * 60 * 6 // revalidate every 6 hours
    }
  };
};

export default References;
