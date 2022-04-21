import React, { useCallback, useRef } from 'react';
import Copy from '../../icons/Copy';
import { ModalService } from '../../modal/service';
import styles from './reference-card.module.scss';

interface Props {
  reference: any;
}

const ReferenceCard = ({ reference }: Props) => {
  const buttonsRef = useRef<HTMLDivElement>();

  const onCopyClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, attribute: 'bibtex' | 'endnote' | 'apa' | 'harvard') => {
      e.stopPropagation();

      const authors = reference.attributes.Authors.data.map((author) => author.attributes.Name);
      const title = reference.attributes.Title;
      const publisher = reference.attributes.Publisher;
      const year = reference.attributes.Year;

      switch (attribute) {
        case 'bibtex':
          navigator.clipboard.writeText(reference.attributes.Bibtex);
          break;
        case 'endnote':
          navigator.clipboard.writeText(reference.attributes.Endnote);
          break;
        case 'apa':
          var authorsString = authors.slice(0, -1).join(', ') + ' & ' + authors.slice(-1);
          navigator.clipboard.writeText(`${authorsString} (${year}). ${title}. ${publisher}.`);
          break;
        case 'harvard':
          var authorsString = authors.slice(0, -1).join(', ') + ' and ' + authors.slice(-1);
          navigator.clipboard.writeText(`${authorsString} (${year}). ${title}. ${publisher}.`);
          break;
      }

      ModalService.success({ description: 'Copied to clipboard successfully.' });
    },
    [reference]
  );

  const onCardClick = useCallback(() => {
    window.open(reference.attributes.Link, '_blank');
  }, [reference]);

  return (
    <div className='p-8 mt-8 transition-all ease-in-out duration-200 w-full hover:shadow-lg md:border-none border rounded border-gray-300'>
      <div className='flex justify-between flex-wrap' onClick={onCardClick}>
        <div className='w-full md:w-4/5 flex flex-col gap-3 cursor-pointer'>
          <div className='font-medium uppercase flex items-center gap-2'>
            <span className={`${styles.indicator} 'px-3 flex md:px-4 rounded-full text-sm text-white'`}>
              {reference.id}
            </span>
            <span>{reference.attributes.Title}</span>
          </div>

          <div className='font-medium'>
            {reference.attributes.Authors.data.map((author) => author.attributes.Name).join(', ')}
          </div>
          <div className='bg-gray-300' style={{ width: '100%', height: '1px' }}></div>
          <div className='font-medium'>{reference.attributes.Publisher}</div>
          <div className='font-medium'>{reference.attributes.Year}</div>
        </div>

        <div
          ref={buttonsRef}
          className='w-full md:w-1/5 flex flex-col gap-2 justify-center items-center md:items-end mt-5 md:m-0'
        >
          <button
            className='border border-gray-400 px-8 py-1 rounded text-gray-600 w-3/4 flex gap-2 justify-between items-center hover:bg-gray-200 active:bg-gray-400'
            onClick={(e) => onCopyClick(e, 'bibtex')}
          >
            <Copy />
            <span>BibTex</span>
          </button>
          <button
            className='border border-gray-400 px-8 py-1 rounded text-gray-600 w-3/4 flex gap-2 justify-between items-center hover:bg-gray-200 active:bg-gray-400'
            onClick={(e) => onCopyClick(e, 'endnote')}
          >
            <Copy />
            <span>EndNote</span>
          </button>
          <button
            className='border border-gray-400 px-8 py-1 rounded text-gray-600 w-3/4 flex gap-2 justify-between items-center hover:bg-gray-200 active:bg-gray-400'
            onClick={(e) => onCopyClick(e, 'harvard')}
          >
            <Copy />
            <span>Harvard</span>
          </button>
          <button
            className='border border-gray-400 px-8 py-1 rounded text-gray-600 w-3/4 flex gap-2 justify-between items-center hover:bg-gray-200 active:bg-gray-400'
            onClick={(e) => onCopyClick(e, 'apa')}
          >
            <Copy />
            <span>APA</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferenceCard;
