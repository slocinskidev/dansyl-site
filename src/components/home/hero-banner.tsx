import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';

import { Image, Typography } from '@/components/commons';
import { ButtonLink } from '@/components/links';

export const HeroBanner = ({
  heading,
  description,
  image,
  firstButton,
  secondButton,
}: Queries.HeroBannerFragment) => (
  <div className='relative mx-auto grid place-items-center gap-14 bg-gray-100 px-4 pt-10 pb-20 lg:py-20'>
    <div className='mx-auto grid max-w-screen-xl place-items-center gap-14 lg:grid-cols-2'>
      {image ? (
        <Image className='rounded-lg md:h-[600px] lg:order-1' {...image} />
      ) : null}
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
        <div className='mt-6 flex flex-wrap justify-center gap-4 md:justify-start'>
          {firstButton?.label &&
          firstButton?.ariaLabel &&
          firstButton?.link?.contentfulinternal?.slug ? (
            <ButtonLink
              href={firstButton.link.contentfulinternal.slug}
              ariaLabel={firstButton.ariaLabel}
            >
              {firstButton.label}
            </ButtonLink>
          ) : null}

          {secondButton?.label &&
          secondButton?.ariaLabel &&
          secondButton?.link?.contentfulinternal?.slug ? (
            <ButtonLink
              variant='outline'
              href={secondButton.link.contentfulinternal.slug}
              ariaLabel={secondButton.ariaLabel}
            >
              {secondButton.label}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </div>
  </div>
);
