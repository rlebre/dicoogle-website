import Head from 'next/head';
import React from 'react';
import Button from '../components/button/Button';
import GridSection from '../components/grid-section/GridSection';
import HomeCard from '../components/home-card/HomeCard';
import { CmsResponse } from '../interfaces/APICommon';
import { CardAttributes } from '../interfaces/Card';
import { getDocumentation } from '../services/documentation';

interface DocumentationProps {
  documentationTypes: CmsResponse<CardAttributes>;
}

const Documentation = ({ documentationTypes }: DocumentationProps) => {
  return (
    <>
      <Head>
        <title>Dicoogle - Documentation</title>
      </Head>

      <div className='container pt-16'>
        <GridSection title='Documentation'>
          {documentationTypes.data.map(({ attributes }) => (
            <HomeCard
              key={`documentation-${attributes.title}`}
              {...attributes}
              circletagStyles={{ backgroundColor: '#cbe0f2' }}
            >
              <Button href={attributes.href} label='View more »' target='_blank' />
            </HomeCard>
          ))}
        </GridSection>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const documentationTypes = await getDocumentation();

  return {
    props: {
      documentationTypes
    },
    revalidate: 60 * 60 * 6 // revalidate every 6 hours
  };
};

export default Documentation;
