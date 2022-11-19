import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/button/Button';
import Carousel, { CarouselItem } from '../components/carousel';
import FlatSection from '../components/flat-section/FlatSection';
import GridSection from '../components/grid-section/GridSection';
import HomeCard from '../components/home-card/HomeCard';
import { getAbout, getApplications, getCarouselImages, getFeatures, getResources } from '../services/index-page';
import styles from '../styles/Home.module.scss';
import { Card } from '../interfaces/Card';

interface HomeProps {
  about: any;
  applications: Card[];
  features: any;
  resources: any;
  carouselImages: any;
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
          />
        ))}
      </Carousel>

      <main className={styles.main}>
        <FlatSection title='About' subtitle1={about.subtitle1} subtitle2={about.subtitle2}>
          <div className='flex items-center'>{about.about}</div>
        </FlatSection>

        <GridSection title='Applications'>
          {applications.map(({ attributes }) => (
            <HomeCard key={`application-${attributes.title}`} {...attributes}></HomeCard>
          ))}
        </GridSection>

        <GridSection title='Features'>
          {features.map(({ attributes }) => (
            <HomeCard key={`feature-${attributes.title}`} {...attributes}></HomeCard>
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

          {resources.map(({ attributes }) => (
            <Button
              key={`resource-${attributes.title}`}
              href={attributes.link}
              label={attributes.title}
              style='button2'
            />
          ))}
        </GridSection>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const {
    data: { attributes: about }
  } = await getAbout();
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
