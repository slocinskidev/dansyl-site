import React from 'react';

import { Typography } from '@/components/commons';
import { WhyUsCard } from '@/components/home/why-us-card';
import { ButtonLink } from '@/components/links';

interface WhyUsProps extends Queries.WhyUsFragment {}

const WhyUs = ({ heading, list, more }: WhyUsProps) => (
  <section className='bg-lochmara-900 px-4 text-white'>
    <div className='mx-auto max-w-screen-xl py-20'>
      {heading ? <Typography as='h2'>{heading}</Typography> : null}

      {list?.length ? (
        <ul className='mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
          {list.map((item) =>
            item ? (
              <li key={item?.id}>
                <WhyUsCard {...item} />
              </li>
            ) : null
          )}
        </ul>
      ) : null}

      {more?.label && more?.link?.contentfulinternal?.slug ? (
        <ButtonLink
          variant='outline'
          href={more.link.contentfulinternal.slug}
          className='mx-auto mt-10 block text-white'
        >
          {more.label}
        </ButtonLink>
      ) : null}
    </div>
  </section>
);

export default WhyUs;
