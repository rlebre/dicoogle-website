import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/button/Button';
import Carousel from '../components/carousel';
import FlatSection from '../components/flat-section/FlatSection';
import GridSection from '../components/grid-section/GridSection';
import HomeCard from '../components/home-card/HomeCard';
import { getAbout, getApplications, getCarouselImages, getFeatures, getResources } from '../services/index-page';
import styles from '../styles/Home.module.scss';
import { Data } from '../interfaces/APICommon';
import { CardAttributes } from '../interfaces/Card';
import { AboutAttributes } from '../interfaces/About';
import { ResourceAttributes } from '../interfaces/Resource';
import { ImageDatum } from '../interfaces/CarouselImage';

interface HomeProps {
  about: Data<AboutAttributes>;
  applications: Data<CardAttributes>[];
  features: Data<CardAttributes>[];
  resources: Data<ResourceAttributes>[];
  carouselImages: ImageDatum[];
}

const Home: NextPage<HomeProps> = ({ about, applications, features, resources, carouselImages }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Dicoogle - Open-source PACS</title>
      </Head>

      <Carousel>
        {carouselImages.map(({ attributes }) => (
          <Image
            key={attributes.hash}
            src={`${process.env.NEXT_PUBLIC_CMS_URL}${attributes.url}`}
            width={attributes.width}
            height={attributes.height}
            alt={attributes.caption}
            priority={true}
          />
        ))}
      </Carousel>

      <main className={styles.main}>
        <FlatSection title='About' subtitle1={about.attributes.subtitle1} subtitle2={about.attributes.subtitle2}>
          <div className='flex items-center'>{about.attributes.description}</div>
        </FlatSection>

        <GridSection title='Applications'>
          {applications.map(({ attributes }) => (
            <HomeCard key={`application-${attributes.title}`} {...attributes} />
          ))}
        </GridSection>

        <GridSection title='Features'>
          {features.map(({ attributes }) => (
            <HomeCard key={`feature-${attributes.title}`} {...attributes} />
          ))}
        </GridSection>

        <GridSection title='Resources'>
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

          <>
            {resources.map(({ attributes }) => (
              <Button
                key={`resource-${attributes.title}`}
                href={attributes.link}
                label={attributes.title}
                style='button2'
              />
            ))}
          </>
        </GridSection>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const { data: about } = await getAbout();
  const { data: applications } = await getApplications();
  const { data: features } = await getFeatures();
  const { data: resources } = await getResources();

  const carouselImages = await getCarouselImages();

  return {
    props: {
      about,
      applications,
      features,
      resources,
      carouselImages
    },
    revalidate: 60 * 60 * 6 // revalidate every 6 hours
  };
};

export default Home;
