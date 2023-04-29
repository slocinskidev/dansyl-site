import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';

import { Typography } from '@/components/commons';

export const PageBanner = ({
  heading,
  description,
}: Queries.ContentfulPageBannerFragment) => (
  <div className='relative mx-auto grid place-items-center gap-14 bg-gray-100 px-4 pt-10 pb-20 lg:py-20'>
    <div className='mx-auto grid max-w-screen-xl place-items-center gap-14 lg:grid-cols-2'>
      <div className='grid gap-4 lg:gap-10'>
        {heading ? (
          <Typography as='h1' variant='heading1' className='text-lochmara-900'>
            {heading}
          </Typography>
        ) : null}
        {description
          ? renderRichText(
              description as RenderRichTextData<ContentfulRichTextGatsbyReference>
            )
          : null}
      </div>
    </div>
  </div>
);
