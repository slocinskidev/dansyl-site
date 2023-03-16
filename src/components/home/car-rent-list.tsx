import React from 'react';

import { CarCard } from './car-card';

export const CarRentList = ({
  heading,
  carList,
}: Queries.CarRentListFragment) => (
  <section className='mx-auto my-20 grid max-w-screen-xl gap-8 px-4'>
    {heading ? <h2 className='text-lochmara-900'>{heading}</h2> : null}

    {carList?.length ? (
      <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {carList.map((car) =>
          car ? (
            <li key={car.id}>
              <CarCard {...car} />
            </li>
          ) : null
        )}
      </ul>
    ) : null}
  </section>
);
