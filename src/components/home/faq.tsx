import React from 'react';

import { Accordion, Image, Typography } from '@/components/commons';

export const Faq = ({ heading, list, image }: Queries.FaqFragment) => (
  <section className='px-4'>
    <div className='mx-auto my-20 grid max-w-screen-xl items-start gap-8 md:gap-12 lg:grid-cols-2'>
      {heading ? (
        <Typography as='h2' className='col-span-full text-lochmara-900'>
          {heading}
        </Typography>
      ) : null}

      {list?.length ? (
        <ul className='grid max-w-3xl gap-4'>
          {list.map((item) => (
            <li key={item?.header}>
              <Accordion
                {...{ header: item?.header || null, body: item?.body || null }}
              />
            </li>
          ))}
        </ul>
      ) : null}

      {image ? <Image {...image} /> : null}
    </div>
  </section>
);
