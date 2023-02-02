import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';

import { Image } from '@/components/commons';
import { ButtonLink } from '@/components/links';

export const HeroBanner = ({ heading, description, image }: Queries.HeroBannerFragment) => (
  <div className='mx-auto max-w-screen-xl px-4 my-20 grid lg:grid-cols-2 gap-14'>
    {image ? <Image className='lg:order-1' {...image} /> : null}
    <div className='grid gap-4'>
      {heading ? (
        <h1 className='text-5xl text-pelorous-900'>Bezgotówkowe naprawy z OC i AC</h1>
      ) : null}
      {description
        ? renderRichText(description as RenderRichTextData<ContentfulRichTextGatsbyReference>)
        : null}
      <div className='flex gap-4 mt-6 flex-wrap justify-center'>
        <ButtonLink href='/'>Sprawdź naszą ofertę</ButtonLink>
        <ButtonLink variant='outline' href='/'>
          Najczęściej zadawane pytania
        </ButtonLink>
      </div>
    </div>
  </div>
);
