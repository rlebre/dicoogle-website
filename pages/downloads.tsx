import fs from 'fs';
import Head from 'next/head';
import path from 'path';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import FlatSection from '../components/flat-section/FlatSection';
import DownloadForm from '../components/forms/download/DownloadForm';
import LoadingScreen from '../components/loading-screen';
import LoadingSpinner from '../components/loading-spinner';
import { ModalService } from '../components/modal/service';
import Country from '../interfaces/Country';
import DownloadFormInterface from '../interfaces/DownloadFormInterface';
import { GhRelease } from '../interfaces/GithubRelease';
import { requestDownload } from '../services/download';
import { getReleases } from '../services/github';

interface Props {
  countries: Country[];
  releases: GhRelease[];
}

const Downloads = ({ releases, countries }: Props) => {
  const latestRelease = releases[0];
  const [selectedRelease, setSelectedRelease] = useState(latestRelease);
  const [submitting, setSubmitting] = useState(false);

  const formatDate = (published_at: string) =>
    new Date(published_at).toLocaleDateString('en-EN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

  const onFormSubmit = useCallback(
    (data: DownloadFormInterface, release: GhRelease, recaptchaToken: string | undefined) => {
      setSubmitting(true);
      requestDownload({ ...data, token: recaptchaToken }, release)
        .then(() =>
          ModalService.success({
            title: 'Download link sent',
            description: 'Your request has been sent. You will receive the download link in your email shortly.'
          })
        )
        .catch((error) => {
          ModalService.error({
            title: 'Error',
            description:
              error.response?.data?.message || 'Connection error. Please try again later or email us at ruilebre@ua.pt'
          });
        })
        .finally(() => setSubmitting(false));
    },
    []
  );

  const onSelectedVersionChanged = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectedRelease(releases.find((element) => element.id === +event.target.value));
    },
    [releases]
  );

  return (
    <>
      <Head>
        <title>Dicoogle - Downloads</title>
      </Head>
      <div className='container pt-16'>
        {submitting && (
          <LoadingScreen>
            <LoadingSpinner />
          </LoadingScreen>
        )}
        <GoogleReCaptchaProvider reCaptchaKey={`${process.env.NEXT_PUBLIC_RECAPTCHA}`}>
          <FlatSection title='Latest version'>
            <div className='w-full'>
              <div className='border border-gray-300 rounded-md w-full'>
                <div className='border-b border-gray-300 p-4 bg-gray-200 flex items-center gap-2 font-medium'>
                  Dicoogle v{latestRelease.tag_name}
                </div>
                <div className='p-4 flex flex-col md:flex-row'>
                  <div className='md:w-2/5 md:pr-4 text-sm'>
                    <p>Release date: {formatDate(latestRelease.published_at)}</p>
                    <p>To download Dicoogle binaries, please fill in the form.</p>
                    <p>Recomended requirements:</p>
                    <ul className='list-disc list-inside mx-4 mb-4'>
                      <li>Windows, Linux or Mac OS</li>
                      <li>
                        <a
                          href='https://www.oracle.com/pt/java/technologies/javase/javase8-archive-downloads.html'
                          target='_blank'
                          rel='noreferrer'
                        >
                          Java 8
                        </a>
                      </li>
                      <li>200 MB System memory</li>
                      <li>500 MB of free disk space (for DICOM objects)</li>
                    </ul>
                    <p>
                      Note: The download link will be sent to the e-mail address entered. If the e-mail does not arrive,
                      please check your Spam inbox.
                    </p>
                    <div className='whitespace-pre-wrap'>
                      <p> Dicoogle v{latestRelease.tag_name} release notes:</p>
                      <p>{latestRelease.body}</p>
                    </div>
                  </div>

                  <div className='md:w-3/5 md:pl-4'>
                    <DownloadForm countries={countries} release={latestRelease} onSubmit={onFormSubmit} />
                  </div>
                </div>
              </div>
            </div>
          </FlatSection>

          <FlatSection title='Previous versions'>
            <div className='w-full'>
              <div className='border border-gray-300 rounded-md w-full'>
                <div className='border-b border-gray-300 p-4 bg-gray-200 flex items-center gap-2 font-medium'>
                  Select Dicoogle version:
                  <select
                    className='bg-gray-500 text-white  border border-gray-300 border-1 rounded-md px-4 py-2'
                    onChange={onSelectedVersionChanged}
                  >
                    {releases.map((release) => (
                      <option key={release.id} value={release.id}>
                        {release.tag_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='p-4 flex flex-col md:flex-row'>
                  <div className='md:w-2/5 md:pr-4 text-sm'>
                    <p>Release date: {formatDate(selectedRelease.published_at)}</p>
                    <p>To download Dicoogle binaries, please fill in the form.</p>
                    <p>Recomended requirements:</p>
                    <ul className='list-disc list-inside mx-4 mb-4'>
                      <li>Windows, Linux or Mac OS</li>
                      <li>
                        <a
                          href='https://www.oracle.com/pt/java/technologies/javase/javase8-archive-downloads.html'
                          target='_blank'
                          rel='noreferrer'
                        >
                          Java 8
                        </a>
                      </li>
                      <li>200 MB System memory</li>
                      <li>500 MB of free disk space (for DICOM objects)</li>
                    </ul>
                    <p>
                      Note: The download link will be sent to the e-mail address entered. If the e-mail does not arrive,
                      please check your Spam inbox.
                    </p>
                    <div className='whitespace-pre-wrap'>
                      <p> Dicoogle v{selectedRelease.tag_name} release notes:</p>
                      <p>{selectedRelease.body}</p>
                    </div>
                  </div>

                  <div className='md:w-3/5 md:pl-4'>
                    <DownloadForm countries={countries} release={selectedRelease} onSubmit={onFormSubmit} />
                  </div>
                </div>
              </div>
            </div>
          </FlatSection>
        </GoogleReCaptchaProvider>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const ghData = await getReleases();

  const releases = ghData
    .filter((release) => !!release.assets[0]?.browser_download_url)
    .sort(
      (release1: GhRelease, release2: GhRelease) =>
        Date.parse(release2.published_at) - Date.parse(release1.published_at)
    );

  const dataFilePath = path.join(process.cwd(), 'public/resources', 'countries.json');
  const fileContents = fs.readFileSync(dataFilePath, 'utf8');
  const countries: Country[] = JSON.parse(fileContents);

  return {
    props: {
      releases: releases.filter((release) => release.assets[0]?.browser_download_url !== ''),
      countries
    },

    revalidate: 60 * 60 * 6 // revalidate every 6 hours
  };
};

export default Downloads;
