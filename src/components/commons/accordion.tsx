/* eslint-disable react/no-unstable-nested-components */
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';

import { Typography } from '@/components/commons/typography';
import { UnderlineLink } from '@/components/links';

export const Accordion = ({ header, body }: Queries.AccordionFragment) => (
  <div className='space-y-4'>
    <details className='group [&_summary::-webkit-details-marker]:hidden'>
      <summary className='flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4'>
        <Typography
          as='h3'
          variant='custom'
          className='text-lg font-medium text-gray-900'
        >
          {header}
        </Typography>

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
                [INLINES.HYPERLINK]: (node, children) => {
                  // eslint-disable-next-line react/destructuring-assignment
                  const { uri } = node.data;
                  return <UnderlineLink href={uri}>{children}</UnderlineLink>;
                },
                [BLOCKS.OL_LIST]: (_, children) => (
                  <ol className='my-4 ml-8 list-decimal'>{children}</ol>
                ),
              },
            }
          )}
        </div>
      ) : null}
    </details>
  </div>
);
