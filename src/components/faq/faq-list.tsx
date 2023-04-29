import React from 'react';

import { Accordion } from '@/components/commons';

export const FaqList = ({ list }: { list: Queries.AccordionFragment[] }) => (
  <section className='mx-auto my-20 grid max-w-screen-xl items-start gap-8 px-4'>
    {list?.length ? (
      <ul className='mx-auto grid w-full max-w-4xl gap-4'>
        {list.map((item) => (
          <li key={item?.header}>
            <Accordion
              header={item?.header || null}
              body={item?.body || null}
            />
          </li>
        ))}
      </ul>
    ) : null}
  </section>
);
