import React from 'react';

import { CarCard } from '@/components/commons/car-card';

export const CarRentList = ({ heading, carList }: Queries.CarRentListFragment) => (
  <section className='mx-auto max-w-screen-xl px-4 my-20 gap-8 grid'>
    {heading ? <h2 className='text-pelorous-900'>{heading}</h2> : null}

    {carList?.length ? (
      <ul className='grid grid-cols-3 gap-4'>
        {carList.map((car) =>
          car ? (
            <li>
              <CarCard {...car} />
            </li>
          ) : null,
        )}
      </ul>
    ) : null}
  </section>
);
