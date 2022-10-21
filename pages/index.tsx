import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/button/Button';
import Carousel, { CarouselItem } from '../components/carousel';
import FlatSection from '../components/flat-section/FlatSection';
import GridSection from '../components/grid-section/GridSection';
import HomeCard from '../components/home-card/HomeCard';
import styles from '../styles/Home.module.scss';

const applications = [
  {
    imageUrl: '/images/applications/research_icon.png',
    imageHeight: '100',
    imageWidth: '100',
    title: 'Research',
    description: [
      "With a big list of scientific articles published related to it, Dicoogle's place as a research aid tool is well-established. After the development of Dicoogle by UA.PT Bioinformatics research group, this resource was successfully used as the basis for several other research projects."
    ]
  },
  {
    imageUrl: '/images/applications/teaching_icon.png',
    imageHeight: '100',
    imageWidth: '100',
    title: 'Teaching',
    description: [
      'Dicoogle is the PACS platform of choice to teach Medical Imaging and Computer Science students in University of Aveiro. These MSc students are encouraged to develop small projects that are based on this PACS archive, providing knowledge to community and improvements to Dicoogle.'
    ]
  },
  {
    imageUrl: '/images/applications/professional_icon.png',
    imageHeight: '100',
    imageWidth: '100',
    title: 'Professional',
    description: [
      'Dicoogle is used as the core framework in some commercially available platforms in medical imaging. A good example of such use is BMD Software.'
    ]
  }
];

const features = [
  {
    imageUrl: '/images/features/expand.svg',
    imageHeight: '20',
    imageWidth: '20',
    title: 'Expandable',
    description: ['Plugin based architecture', 'SDK ready to boost new features development']
  },
  {
    imageUrl: '/images/features/scale.svg',
    imageHeight: '20',
    imageWidth: '20',
    title: 'Scalable',
    description: [
      'Tested with over 25 millions of indexed DICOM objects',
      'Simple installation and deployment',
      'Optimized for big data paradigms'
    ]
  },
  {
    imageUrl: '/images/features/service-api.svg',
    imageHeight: '20',
    imageWidth: '20',
    title: 'DICOM Services',
    description: ['Storage', 'Query/Retrieve', 'DICOMWeb', 'Extensible with additional plugins and modules']
  },
  {
    imageUrl: '/images/features/indexing.svg',
    imageHeight: '20',
    imageWidth: '20',
    title: 'Indexing/Query Engine',
    description: [
      'Enable DICOM study retrieval and knowledge extraction with pluggable query providers',
      'Support for complex query/retrieval solutions, such as free text, range based queries over meta-data, and query-by-example.'
    ]
  },
  {
    imageUrl: '/images/features/user-interface.svg',
    imageHeight: '20',
    imageWidth: '20',
    title: 'Web User Interface',
    description: [
      'Web Application compatible with modern browsers',
      'Web Services with an open API for programmatic control'
    ]
  },
  {
    imageUrl: '/images/features/opensource.svg',
    imageHeight: '20',
    imageWidth: '20',
    title: 'Open-source',
    description: [
      'Platform Independent (Windows, Linux, Mac)',
      'Free and proprietary plugins are available',
      'License: GPL v3'
    ]
  }
];

const resources = [
  {
    title: 'Download',
    link: '/downloads'
  },
  {
    title: 'Documentation',
    link: 'https://bioinformatics-ua.github.io/dicoogle-api/'
  },
  {
    title: 'View on Github',
    link: 'https://github.com/bioinformatics-ua/dicoogle'
  },
  {
    title: 'References',
    link: '/references'
  }
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dicoogle - Open-source PACS</title>
      </Head>

      <Carousel>
        <CarouselItem>
          <img src='/images/slider/01.png' alt='Wild Landscape' />
        </CarouselItem>
        <CarouselItem>
          <img src='/images/slider/02.png' alt='Camera' />
        </CarouselItem>
        <CarouselItem>
          <img src='/images/slider/03.png' alt='Exotic Fruits' />
        </CarouselItem>
        <CarouselItem>
          <img src='/images/slider/04.png' alt='Exotic Fruits' />
        </CarouselItem>
      </Carousel>

      <div className='container'>
        <main className={styles.main}>
          <FlatSection title='About' subtitle1='What is' subtitle2='Dicoogle'>
            <div className='flex items-center'>
              Dicoogle is an open source Picture Archiving and Communications System (PACS) archive. Its modular
              architecture allows the quick development of new functionalities, due the availability of a Software
              Development Kit (SDK).
            </div>
          </FlatSection>

          <GridSection title='Applications'>
            {applications.map((application) => (
              <HomeCard key={`application-${application.title}`} {...application}></HomeCard>
            ))}
          </GridSection>

          <GridSection title='Features'>
            {features.map((feature) => (
              <HomeCard key={`feature-${feature.title}`} {...feature}></HomeCard>
            ))}
          </GridSection>

          <GridSection title='Resources'>
            <>
              <div className='w-full'>
                <p>Dicoogle is a free and open source software.</p>
                <p>The code is available and you can freely contribute to its development.</p>

                <p>
                  Dicoogle source code is under{' '}
                  <Link href='http://www.gnu.org/copyleft/gpl.en.html'>
                    <a rel='nofollow noreferrer' target='_blank' className='font-semibold'>
                      GNU General Public License v3.0.
                    </a>
                  </Link>
                </p>
              </div>

              {resources.map((resource) => (
                <Button
                  key={`resource-${resource.title}`}
                  href={resource.link}
                  label={resource.title}
                  style='button2'
                />
              ))}
            </>
          </GridSection>
        </main>
      </div>
    </>
  );
};

export default Home;
