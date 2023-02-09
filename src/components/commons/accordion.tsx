import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';

export const Accordion = ({ header, body }: Queries.AccordionFragment) => (
  <div className='space-y-4'>
    <details className='group [&_summary::-webkit-details-marker]:hidden' open>
      <summary className='flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{header}</h3>

        <svg
          className='ml-1.5 h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </summary>
      {body
        ? renderRichText(
            body as RenderRichTextData<ContentfulRichTextGatsbyReference>
          )
        : null}
      {/* <p className='mt-4 px-4 leading-relaxed text-gray-700'>{body}</p> */}
    </details>
  </div>
);
