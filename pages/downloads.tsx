import path from 'path';
import fs from 'fs';
import React from 'react';
import FlatSection from '../components/flat-section/FlatSection';
import Country from '../interfaces/Country';
import DownloadForm from '../components/forms/download/DownloadForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface Release {
  id: number;
  tag_name: string;
  published_at: string;
  downloadLink: string;
  body: string;
}

interface Props {
  releases: Release[];
  countries: Country[];
}

const Downloads = ({ releases, countries }: Props) => {
  return (
    <div className='container pt-16'>
      <FlatSection title='Downloads'>
        <div className='w-full'>
          <div className='border border-gray-300 rounded-md w-full'>
            <div className='border-b border-gray-300 p-4 bg-gray-200 flex items-center gap-2 font-medium'>
              <h4 className='text-blue-800'>[NEW]</h4>
              <b>Dicoogle v3.0.6</b>
            </div>
            <div className='p-4 flex flex-col md:flex-row'>
              <div className='md:w-2/5 md:pr-4 text-sm'>
                <p>Release date: January 2022</p>
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
              </div>

              <div className='md:w-3/5 md:pl-4'>
                <GoogleReCaptchaProvider reCaptchaKey={`${process.env.NEXT_PUBLIC_RECAPTCHA}`}>
                  <DownloadForm countries={countries} />
                </GoogleReCaptchaProvider>
              </div>
            </div>
          </div>
        </div>
      </FlatSection>
    </div>
  );
};

export const getStaticProps = async () => {
  //   const ghData = (await axios.get('https://api.github.com/repos/bioinformatics-ua/dicoogle/releases')).data;

  //   const releases = ghData.map(
  //     (release: any): Release => ({
  //       id: release.id,
  //       tag_name: release.tag_name,
  //       published_at: release.published_at,
  //       body: release.body,
  //       downloadLink: release.assets[0]?.browser_download_url || '',
  //     }),
  //   );

  const releases = [
    {
      id: 62119852,
      tag_name: '3.0.7',
      published_at: '2022-03-17T17:28:30Z',
      body:
        '- Fix: [UI] Prevent default on export modal button click (#568) \r\n' +
        '- Chore: Update webapp dependencies (#569)       \r\n' +
        '- Chore: Update contributors in README (#565)',
      downloadLink: 'https://github.com/bioinformatics-ua/dicoogle/releases/download/3.0.7/Dicoogle_v3.0.7.zip',
    },
    {
      id: 57138882,
      tag_name: '3.0.6',
      published_at: '2022-01-14T16:58:54Z',
      body:
        '- Fix: categorization of plugins in management page (#554)\r\n' +
        '- Enhancement: Adjust webapp readme for Dicoogle 3 (#548)\r\n' +
        '- Chore: Update log4j to 2.17.1 (#556)\r\n' +
        '- Chore: Drop console.log in webapp js bundle (#551)',
      downloadLink: 'https://github.com/bioinformatics-ua/dicoogle/releases/download/3.0.6/Dicoogle_v3.0.6.zip',
    },
    {
      id: 57117229,
      tag_name: '2.5.10',
      published_at: '2022-01-14T13:47:14Z',
      body: '- Bump log4j-core to 2.17.1 in (#557)',
      downloadLink: '',
    },
    {
      id: 55385752,
      tag_name: '3.0.5',
      published_at: '2021-12-15T17:17:32Z',
      body:
        '- Fix: ExportCSVToFILEServlet query expansion handling (#550)\r\n' +
        '- Enhancement: Bump log4j-core to 2.16.0 (#546) \r\n' +
        '- Chore: Update restlet Maven repository URL (#545)\r\n' +
        '- Chore: Removed unused distribution management endpoints (#547)\r\n',
      downloadLink: 'https://github.com/bioinformatics-ua/dicoogle/releases/download/3.0.5/Dicoogle_v3.0.5.zip',
    },
    {
      id: 55260319,
      tag_name: '2.5.9',
      published_at: '2021-12-14T10:36:12Z',
      body: '- Bump log4j-core to 2.15.0 in (#543)\r\n',
      downloadLink: '',
    },
    {
      id: 54748093,
      tag_name: '3.0.4',
      published_at: '2021-12-06T22:29:33Z',
      body:
        '- Fix Queries using the platform for query plugins that implements QueryInterface (#541)\r\n' +
        '- Fix: Check whether confs dir exists before creating (#538)\r\n' +
        '- Enhancement: improve web UI manager asset fetching (#540)',
      downloadLink: 'https://github.com/bioinformatics-ua/dicoogle/releases/download/3.0.4/Dicoogle_v3.0.4.zip',
    },
    {
      id: 54280540,
      tag_name: '3.0.3',
      published_at: '2021-11-29T23:31:05Z',
      body:
        '- Fix: Make WebUI plugins visible to admin (#497)\r\n' +
        '- Fix: DICOM storage priority improvement (#468)\r\n' +
        '- Fix: Added missing SOPClasses UIDs for VLWholeSlideMicroscopyImageStorage, BreastTomosynthesisImageStorage and XRayRadiationDoseSRStorage (#474)\r\n' +
        '- Fix: Add missing StudyInstanceUID in DIMGeneric JSON output (#507)\r\n' +
        '- Fix: Async DICOM Storage SCP indexing + independent task pool for queries (#503)\r\n' +
        '- Fix: Add encrypt-users-file to server settings (#504)\r\n' +
        '- Fix: Fix zip settings property and remove it from UI (#515)\r\n' +
        '- Fix: Fix server error on /webui without user session (#517)\r\n' +
        '- Fix: Consider all properties of move destination in web API (#526)\r\n' +
        '- Fix: Add missing plugin info properties in /plugins (#529)\r\n' +
        '- Fix: Replace service status signal implementation (#521)\r\n' +
        '- Fix: Save move destination properties as XML attributes (#525)\r\n' +
        '- Fix: Check roles before loading plugins, warn about missing roles (#518)\r\n' +
        '- Fix: Remove sdk-ext (#493)\r\n' +
        '- Fix: Fix the image loader when the thumbnail is a larger image (#514)\r\n' +
        '- Chore: Use HTTPS URLs to Maven repositories (#461)\r\n' +
        '- Chore: Update important dependencies (dicoogle-client, devdeps) (#523)\r\n' +
        '- Chore: Server code cleanup (#500)',
      downloadLink: 'https://github.com/bioinformatics-ua/dicoogle/releases/download/3.0.3/Dicoogle_v3.0.3.zip',
    },
    {
      id: 51606776,
      tag_name: '2.5.8',
      published_at: '2021-10-19T10:23:00Z',
      body: '- Stop logging DICOM requests for C-FIND and C-MOVE SCP  (#527)',
      downloadLink: '',
    },
    {
      id: 48343445,
      tag_name: '2.5.7',
      published_at: '2021-08-24T10:34:00Z',
      body:
        '- Make the DICOM Storage SCP indexing queue to be asynchronous (#496)\r\n' +
        '- Modified method binds to be regular w/ event stop propagation. (#487)\r\n' +
        "- Form event handler for 'plugin-load' (#484)",
      downloadLink: '',
    },
    {
      id: 47686170,
      tag_name: '2.5.6',
      published_at: '2021-08-11T16:14:13Z',
      body:
        '- Fix: Protected the hookRemoveRunningTasks, if it happens at same time. (#489)\r\n' +
        '- Fix: Fix DICOM storage priority by AE title (#494)',
      downloadLink: '',
    },
    {
      id: 47243130,
      tag_name: '2.5.5',
      published_at: '2021-08-03T17:30:48Z',
      body:
        '- Fix: RSIStorage (DicomStorage) file handling priority improvements (#475)\r\n' +
        '- Enhancement: Update README content in Dicoogle 2 (#479)\r\n' +
        '- Enhancement: Dicoogle 2 maintenance: guarantee to build on Node.js 10 (#472)\r\n' +
        '- Enhancement: Added the support for XRay Dose Report SOP Class UID (#473)\r\n' +
        '- Enhancement: Support custom integration to retrieve (0040,1003) Requested Procedure Priority (#457)',
      downloadLink: '',
    },
    {
      id: 40906708,
      tag_name: '3.0.2',
      published_at: '2021-04-03T22:58:52Z',
      body:
        '- Fix: exportToCSV modal on webapp (#450)\r\n' +
        '- Fix: StackOverflowError and users settings folder issues (#451)\r\n' +
        '- Enhancement: DICOM services - bring patches from 2.5.X releases to main stream (#453)',
      downloadLink: 'https://github.com/bioinformatics-ua/dicoogle/releases/download/3.0.2/Dicoogle_v3.0.2.zip',
    },
    {
      id: 37759662,
      tag_name: '3.0.1',
      published_at: '2021-02-08T19:30:17Z',
      body:
        '* Fix: Webcore plugins was not able to load \r\n' +
        '* Fix: WebUI Plugins: emit events for result-batch slot plugins\r\n' +
        '* Enhancement: [UI] small improvements in button UI for search result slot. ',
      downloadLink: 'https://github.com/bioinformatics-ua/dicoogle/releases/download/3.0.1/Dicoogle_v3.0.1.zip',
    },
    {
      id: 40906404,
      tag_name: '2.5.4',
      published_at: '2021-04-03T22:27:43Z',
      body: '- Improve logging of C-MOVE SCP to better troubleshoot potential issues. ',
      downloadLink: '',
    },
    {
      id: 36870928,
      tag_name: '2.5.3',
      published_at: '2021-01-25T17:15:35Z',
      body: '- Allow to change parameters in DICOM C-STORE SCP server by changing java properties.',
      downloadLink: '',
    },
    {
      id: 35916577,
      tag_name: '3.0.0',
      published_at: '2021-01-03T00:03:40Z',
      body:
        '* New: configuration format (config.xml now lives in confs/server.xml)\r\n' +
        '* New: [SDK] expansion to better support DIM (DICOM Information Modal).\r\n' +
        '* New: docker support\r\n' +
        '* New: API documentation\r\n' +
        '* New: [UI] supports list of loaded plugins\r\n' +
        '* New: [UI] supports to search and index in multiple plugins with possibility to choose them.\r\n' +
        '* Fix: When getting defaults, the number of admins was not incremented in the UsersStruct, voiding the deletion of admin users\r\n' +
        '* Fix: problem with SOP Class Transfer Syntaxes to be loaded in DICOM C-STORE SCP.\r\n' +
        '* Fix: [UI] logins/logout and user session handling\r\n' +
        '* Enhancement: [SDK] better error handling\r\n' +
        '* Enhancement: [SDK] Webcore update structure and dependency of dicoogle-client-js\r\n' +
        '* Enhancement: [UI] new look and support for small screen devices\r\n' +
        '* Enhancement: User credentials (hash and encryption improvements)\r\n' +
        '* Enhancement: Change list of providers to multiselect\r\n' +
        '* Enhancement: CFindServiceSCP performs log string manipulation only when required.\r\n' +
        '* Enhancement: Update core libraries (server and UI) and use of webpack.\r\n' +
        '* Enhancement: Removed deprecated code from oldest RMI GUI.',
      downloadLink: 'https://github.com/bioinformatics-ua/dicoogle/releases/download/3.0.0/Dicoogle_v3.0.0.zip',
    },
    {
      id: 35846490,
      tag_name: '2.5.2',
      published_at: '2020-12-30T16:25:54Z',
      body:
        '- Fix memory leak in the completed/failed indexing task. (#441)\r\n' +
        '- Fix delete images from patient/series/studies with large amount of data.\r\n' +
        '\r\n',
      downloadLink: '',
    },
    {
      id: 35544247,
      tag_name: '2.5.1',
      published_at: '2020-12-20T19:23:03Z',
      body: '- Update Guava version \r\n' + '- Fixed issues to export as CSV\r\n' + '- Added missing maven repo ',
      downloadLink: '',
    },
    {
      id: 29249638,
      tag_name: '3.0.0-RC1',
      published_at: '2020-08-03T22:53:22Z',
      body: '',
      downloadLink: '',
    },
    {
      id: 9060822,
      tag_name: '2.5.0',
      published_at: '2017-12-29T17:33:23Z',
      body: '',
      downloadLink: '',
    },
    {
      id: 4265138,
      tag_name: '2.4.0',
      published_at: '2016-09-29T15:50:28Z',
      body:
        '- Improve Task Manager\n' +
        '- Improve UI in WebApp (icon menu, search results are now ok)\n' +
        '- Cache Web Plugins \n' +
        '- Fix problem in export to csv (mozilla firefox)\n' +
        '- Search by keywords problem \n',
      downloadLink: '',
    },
    {
      id: 2547933,
      tag_name: '2.3.1',
      published_at: '2016-02-03T20:58:20Z',
      body: '',
      downloadLink: '',
    },
    {
      id: 2512117,
      tag_name: '2.3.0',
      published_at: '2016-01-28T22:00:29Z',
      body: '',
      downloadLink: '',
    },
    {
      id: 2350290,
      tag_name: '2.2.0',
      published_at: '2015-12-29T13:03:56Z',
      body: '- Improvements in Web core\n- Priority queue CSTORE\n',
      downloadLink: '',
    },
    {
      id: 2074112,
      tag_name: '2.1.0',
      published_at: '2015-11-05T00:02:45Z',
      body: '',
      downloadLink: '',
    },
    {
      id: 1853433,
      tag_name: '2.0.0',
      published_at: '2015-09-23T02:58:45Z',
      body:
        'A few months ago, we had finally released 2.0.0. It includes several bug fixes and lot of new features. Here is a summary:\n' +
        '- New Web Client Front-end: all the features available in 0.5 were finally ported.\n' +
        '- Couple of improvements in the SDK.\n' +
        '- Improved the Dicoogle API.\n' +
        '- Improved the logging mechanism and capability to integrate with Sentry.\n',
      downloadLink: '',
    },
  ];

  const dataFilePath = path.join(process.cwd(), 'public/resources', 'countries.json');
  const fileContents = fs.readFileSync(dataFilePath, 'utf8');
  const countries: Country[] = JSON.parse(fileContents);

  return {
    props: {
      releases: releases.filter((release) => release.downloadLink !== ''),
      countries,
    },
  };
};

export default Downloads;
