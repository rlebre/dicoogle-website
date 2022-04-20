import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import CookiesConsentBanner, { CookieConsentProvider, useCookieConsentState } from '../components/cookies-consent';
import Footer from '../components/footer/Footer';
import { Modal } from '../components/modal';
import Navbar from '../components/navbar/Navbar';
import ScrollToTheTop from '../components/scroll-top/ScrollToTheTop';
import * as gtag from '../lib/gtag';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const consentState = useCookieConsentState();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    if (consentState === 'ACCEPTED') {
      router.events.on('routeChangeComplete', handleRouteChange);
    } else {
      router.events.off('routeChangeComplete', handleRouteChange);
    }

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [consentState, router.events]);

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Dicoogle is an open source Picture Archiving and Communications System (PACS) archive. Its modular architecture allows the quick development of new functionalities, due the availability of a Software Development Kit (SDK).'
        />
        <meta name='theme-color' content='#eff6ff' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CookieConsentProvider>
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
          }}
        />

        <Navbar />
        <Component {...pageProps} />

        <Footer />

        <ScrollToTheTop />

        <Modal />

        <CookiesConsentBanner />
      </CookieConsentProvider>
    </>
  );
}

export default MyApp;
