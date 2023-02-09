import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';

import { Image } from '@/components/commons';
import { ButtonLink } from '@/components/links';

export const HeroBanner = ({
  heading,
  description,
  image,
}: Queries.HeroBannerFragment) => (
  <div className='relative mx-auto grid place-items-center gap-14 bg-gray-100 py-20 px-4'>
    <div className='mx-auto grid max-w-screen-xl place-items-center gap-14 px-4 lg:grid-cols-2'>
      {image ? (
        <Image className='rounded-lg md:h-[600px] lg:order-1' {...image} />
      ) : null}
      <div className='grid gap-4 lg:gap-10'>
        {heading ? (
          <h1 className='text-3xl leading-tight text-pelorous-900 md:text-5xl md:leading-snug'>
            Bezgotówkowe naprawy z OC i AC
          </h1>
        ) : null}
        {description
          ? renderRichText(
              description as RenderRichTextData<ContentfulRichTextGatsbyReference>
            )
          : null}
        <div className='mt-6 flex flex-wrap justify-center gap-4 md:justify-start'>
          <ButtonLink href='/'>Sprawdź naszą ofertę</ButtonLink>
          <ButtonLink variant='outline' href='/'>
            Najczęściej zadawane pytania
          </ButtonLink>
        </div>
      </div>
    </div>
  </div>
);
