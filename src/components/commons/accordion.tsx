import { INLINES } from '@contentful/rich-text-types';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';

import { UnderlineLink } from '@/components/links';

export const Accordion = ({ header, body }: Queries.AccordionFragment) => (
  <div className='space-y-4'>
    <details className='group [&_summary::-webkit-details-marker]:hidden'>
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
      {body ? (
        <div className='p-4'>
          {renderRichText(
            body as RenderRichTextData<ContentfulRichTextGatsbyReference>,
            {
              renderNode: {
                // eslint-disable-next-line react/no-unstable-nested-components
                [INLINES.HYPERLINK]: (node, children) => {
                  // eslint-disable-next-line react/destructuring-assignment
                  const { uri } = node.data;
                  return <UnderlineLink href={uri}>{children}</UnderlineLink>;
                },
              },
            }
          )}
        </div>
      ) : null}
      {/* <p className='mt-4 px-4 leading-relaxed text-gray-700'>{body}</p> */}
    </details>
  </div>
);
