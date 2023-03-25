import React from 'react';

import { Typography } from '@/components/commons';

import { CarRentCard } from './car-rent-card';

export const CarRentList = ({
  heading,
  carList,
  carNameLabel,
  engineLabel,
  fuelLabel,
  gearLabel,
  priceLabel,
  seatsLabel,
  yearLabel,
  modal,
}: Queries.CarRentListFragment) => (
  <section className='mx-auto my-20 grid max-w-screen-xl gap-8 px-4 md:gap-12'>
    {heading ? (
      <Typography as='h2' className='text-lochmara-900'>
        {heading}
      </Typography>
    ) : null}

    {carList?.length ? (
      <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {carList.map((car) =>
          car ? (
            <li key={car.id}>
              <CarRentCard
                {...car}
                {...{
                  carNameLabel,
                  engineLabel,
                  fuelLabel,
                  gearLabel,
                  priceLabel,
                  seatsLabel,
                  yearLabel,
                  modal,
                }}
              />
            </li>
          ) : null
        )}
      </ul>
    ) : null}
  </section>
);
