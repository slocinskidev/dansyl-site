import React from 'react';

import { Accordion } from '@/components/commons';

export const Faq = () => (
  <section className='mx-auto my-20 grid max-w-screen-xl gap-8 px-4'>
    <h2 className='text-pelorous-900'>Pytania i odpowiedzi</h2>

    <ul className='grid max-w-3xl gap-5'>
      <li>
        <Accordion />
      </li>
      <li>
        <Accordion />
      </li>
      <li>
        <Accordion />
      </li>
      <li>
        <Accordion />
      </li>
    </ul>
  </section>
);
