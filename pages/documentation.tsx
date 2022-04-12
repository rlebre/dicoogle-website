import Head from 'next/head';
import React from 'react';
import Button from '../components/button/Button';
import GridSection from '../components/grid-section/GridSection';
import HomeCard from '../components/home-card/HomeCard';

const applications = [
  {
    imageUrl: '/images/references/learning_pack.png',
    imageHeight: '100',
    imageWidth: '100',
    title: 'LEARNING PACK',
    href: 'https://bioinformatics-ua.github.io/dicoogle-learning-pack/',
    description: [
      'Throughout these pages, you can find a guide prepared for any kind of user, from regular user to developer. Guides about Getting started, Building, Developing and Debugging Dicoogle are deeply explained with examples and snippets.'
    ]
  },
  {
    imageUrl: '/images/references/javadoc.png',
    imageHeight: '100',
    imageWidth: '100',
    title: 'JAVADOC',
    href: 'https://bioinformatics-ua.github.io/dicoogle-api/javadoc',
    description: [
      'In this section, there are listed Javadoc documentation for multiple versions of Dicoogle. On the top right corner, you may select the version that better fits you. Here you can find the programatic API of Dicoogle, Dicoogle SDK and more.'
    ]
  },
  {
    imageUrl: '/images/references/webapi.png',
    imageHeight: '100',
    imageWidth: '100',
    title: 'WEB API',
    href: 'https://bioinformatics-ua.github.io/dicoogle-api/webapi',
    description: [
      'In this section, there are listed multiple instances of Web API services for Dicoogle. The services listed do not require any plugin to work and the ones that need previous authentication are marked. On the top right corner, you may select the version that better fits you.'
    ]
  }
];

const Documentation = () => {
  return (
    <>
      <Head>
        <title>Dicoogle - Documentation</title>
      </Head>

      <div className='container pt-16'>
        <GridSection title='Documentation'>
          {applications.map((application) => (
            <HomeCard
              key={`documentation-${application.title}`}
              {...application}
              circletagStyles={{ backgroundColor: '#cbe0f2' }}
            >
              <Button href={application.href} label='View more »' target='_blank' />
            </HomeCard>
          ))}
        </GridSection>
      </div>
    </>
  );
};

export default Documentation;
