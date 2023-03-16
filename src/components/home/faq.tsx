import React from 'react';

import { Accordion, Image } from '@/components/commons';

export const Faq = ({ heading, list, image }: Queries.FaqFragment) => (
  <section className='mx-auto my-20 grid max-w-screen-xl items-start gap-8 px-4 lg:grid-cols-2'>
    {heading ? (
      <h2 className='col-span-full text-lochmara-900'>{heading}</h2>
    ) : null}

    {list?.length ? (
      <ul className='grid max-w-3xl gap-5'>
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
  </section>
);
