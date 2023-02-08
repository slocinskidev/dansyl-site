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
  <div className='mx-auto my-20 grid max-w-screen-xl place-items-center gap-14 px-4 lg:grid-cols-2'>
    {image ? <Image className='lg:order-1' {...image} /> : null}
    <div className='grid gap-4'>
      {heading ? (
        <h1 className='text-5xl leading-tight text-pelorous-900'>
          Bezgotówkowe naprawy z OC i AC
        </h1>
      ) : null}
      {description
        ? renderRichText(
            description as RenderRichTextData<ContentfulRichTextGatsbyReference>
          )
        : null}
      <div className='mt-6 flex flex-wrap justify-center gap-4'>
        <ButtonLink href='/'>Sprawdź naszą ofertę</ButtonLink>
        <ButtonLink variant='outline' href='/'>
          Najczęściej zadawane pytania
        </ButtonLink>
      </div>
    </div>
  </div>
);
