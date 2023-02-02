import React from 'react';

import { Accordion } from '@/components/commons';

export const Faq = () => (
  <section className='mx-auto max-w-screen-xl px-4 my-20 gap-8 grid'>
    <h2 className='text-pelorous-900'>Pytania i odpowiedzi</h2>

    <ul className='grid'>
      <li>
        <Accordion />
      </li>
    </ul>
  </section>
);
