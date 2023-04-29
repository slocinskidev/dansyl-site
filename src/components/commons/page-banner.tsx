/* eslint-disable react/no-unstable-nested-components */
import { INLINES } from '@contentful/rich-text-types';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';

import { Typography } from '@/components/commons';
import { UnderlineLink } from '@/components/links';

export const PageBanner = ({
  heading,
  description,
}: Queries.ContentfulPageBannerFragment) => (
  <div className='relative mx-auto grid gap-14 bg-gray-100 px-4 pt-10 pb-20 lg:py-20'>
    <div className='mx-auto grid w-full max-w-screen-xl gap-14'>
      <div className='grid w-2/3 gap-4 lg:gap-10'>
        {heading ? (
          <Typography as='h1' variant='heading1' className='text-lochmara-900'>
            {heading}
          </Typography>
        ) : null}
        {description
          ? renderRichText(
              description as RenderRichTextData<ContentfulRichTextGatsbyReference>,
              {
                renderNode: {
                  [INLINES.HYPERLINK]: (node, children) => {
                    // eslint-disable-next-line react/destructuring-assignment
                    const { uri } = node.data;
                    return <UnderlineLink href={uri}>{children}</UnderlineLink>;
                  },
                },
              }
            )
          : null}
      </div>
    </div>
  </div>
);
