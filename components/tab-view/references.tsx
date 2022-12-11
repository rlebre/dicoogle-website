import React, { useEffect, useRef, useState } from 'react';
import { CmsResponse } from '../../interfaces/APICommon';
import { ReferenceAttributes } from '../../interfaces/Reference';
import ReferenceCard from './reference-card';
import styles from './tab-view.module.scss';

interface Props {
  references: CmsResponse<ReferenceAttributes>;
}

const ReferenceTabbedView = ({ references }: Props) => {
  const journals = useRef([]);
  const conferences = useRef([]);
  const magazines = useRef([]);

  useEffect(() => {
    journals.current = references.data.filter(
      (reference) => reference.attributes.Category.data.attributes.Name === 'journal'
    );
    conferences.current = references.data.filter(
      (reference) => reference.attributes.Category.data.attributes.Name === 'conference'
    );
    magazines.current = references.data.filter(
      (reference) => reference.attributes.Category.data.attributes.Name === 'magazine'
    );
  }, [references]);

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className='rounded full mt-4'>
      <ul id='tabs' className='inline-flex pt-2 px-1 w-full border-b flex-wrap'>
        <li
          className={`${styles.tab} ${selectedTab === 0 ? styles.tab__selected : ''}`}
          onClick={() => setSelectedTab(0)}
        >
          All
        </li>
        <li
          className={`${styles.tab} ${selectedTab === 1 ? styles.tab__selected : ''}`}
          onClick={() => setSelectedTab(1)}
        >
          Journals
        </li>
        <li
          className={`${styles.tab} ${selectedTab === 2 ? styles.tab__selected : ''}`}
          onClick={() => setSelectedTab(2)}
        >
          Conferences
        </li>
        <li
          className={`${styles.tab} ${selectedTab === 3 ? styles.tab__selected : ''}`}
          onClick={() => setSelectedTab(3)}
        >
          Magazine
        </li>
      </ul>

      <div id='tab-contents'>
        <div id='all' className={`${selectedTab === 0 ? '' : 'hidden'} p-4'`}>
          {references.data.map((reference) => (
            <ReferenceCard key={`all-${reference.id}`} reference={reference} />
          ))}
        </div>
        <div id='journals' className={`${selectedTab === 1 ? '' : 'hidden'} p-4'`}>
          {journals.current.map((reference) => (
            <ReferenceCard key={`journal-${reference.id}`} reference={reference} />
          ))}
        </div>
        <div id='conferences' className={`${selectedTab === 2 ? '' : 'hidden'} p-4'`}>
          {conferences.current.map((reference) => (
            <ReferenceCard key={`journal-${reference.id}`} reference={reference} />
          ))}
        </div>
        <div id='magazines' className={`${selectedTab === 3 ? '' : 'hidden'} p-4'`}>
          {magazines.current.map((reference) => (
            <ReferenceCard key={`journal-${reference.id}`} reference={reference} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferenceTabbedView;
