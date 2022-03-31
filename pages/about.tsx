import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Button from '../components/button/Button';
import ContactSection from '../components/contact-section/ContactSection';
import FlatSection from '../components/flat-section/FlatSection';
import LocationSection from '../components/location-section/LocationSection';

const About = () => {
  return (
    <>
      <div className='container pt-16'>
        <FlatSection title='About us' subtitle1='What is' subtitle2='Dicoogle'>
          <p className='text-justify'>
            UA.PT Bioinformatics is a research group, funded mainly by several National and European projects, that
            joins several researchers from multiple areas.
          </p>
          <p className='text-justify'>
            The group goal is to study algorithmic questions and computational solutions inspired by and related to
            biological and biomedical problems. There is also interest on medical informatics, in design, develop and
            deploy software tools to improve directly the people&apos;s well being related to healthcare.
          </p>
          <p>
            <Button href='http://bioinformatics.ua.pt/' label='View details »' target='_blank' />
          </p>
        </FlatSection>

        <FlatSection subtitle1='The' subtitle2='Partners'>
          <p className='text-justify'>
            <a href='https://www.bmd-software.com/company/'>BMD Software</a> is an SME targeted to the development of
            novel biomedical software solutions.
          </p>
          <p className='text-justify'>
            BMD&apos;s main mission is to develop innovative software solutions for healthcare. Its main field of
            expertise is related to medical imaging networks (PACS) and its engineering research team is highly
            complementary, with a strong background in software engineering, distributed web applications, and
            biomedical informatics tools.
          </p>
          <p className='text-justify'>
            One of BMD&apos;s main business areas is medical imaging mainly for archive, distribution and visualization.
          </p>
          <p>
            <Button href='https://www.bmd-software.com/' label='View more »' target='_blank' />
          </p>
        </FlatSection>

        <GoogleReCaptchaProvider reCaptchaKey={`${process.env.NEXT_PUBLIC_RECAPTCHA}`}>
          <ContactSection />
        </GoogleReCaptchaProvider>
      </div>

      <LocationSection />
    </>
  );
};

export default About;
