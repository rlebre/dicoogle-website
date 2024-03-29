import type { NextPage } from 'next';
import React from 'react';
import FlatSection from '../components/flat-section/FlatSection';
import ReferenceTabbedView from '../components/tab-view/references';
import { CmsResponse } from '../interfaces/APICommon';
import { ReferenceAttributes } from '../interfaces/Reference';
import { getReferences } from '../services/references';

interface ReferencesProps {
  references: CmsResponse<ReferenceAttributes>;
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
  let references = await getReferences();
  const referencesSorted = references.data.sort((a, b) => b.attributes.Year - a.attributes.Year);

  references = { ...references, data: referencesSorted };
  return {
    props: {
      references
    },
    revalidate: 60 * 60 * 6 // revalidate every 6 hours
  };
};

export default References;
