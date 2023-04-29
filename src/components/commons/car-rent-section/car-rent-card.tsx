import NiceModal, { ModalDef } from '@ebay/nice-modal-react';
import React from 'react';

import { Image } from '@/components/commons';
import CarCardProperty from '@/components/commons/car-rent-section/car-rent-card-property';
import { CarRentModal } from '@/components/commons/car-rent-section/car-rent-modal';

export const CarRentCard = ({
  name,
  price,
  engine,
  fuel,
  gear,
  seats,
  year,
  gallery,
  carNameLabel,
  engineLabel,
  fuelLabel,
  gearLabel,
  priceLabel,
  seatsLabel,
  yearLabel,
  modal,
}: Queries.CarCardFragment &
  Omit<Queries.CarRentListFragment, 'heading' | 'carList'>) => (
  <button
    type='button'
    className='grid rounded-lg text-left shadow-sm shadow-indigo-100 transition-shadow hover:shadow-lg'
    onClick={() => {
      NiceModal.show('car-rent-modal', {
        name,
        price,
        gallery,
        engine,
        fuel,
        gear,
        seats,
        year,
        engineLabel,
        fuelLabel,
        gearLabel,
        priceLabel,
        seatsLabel,
        yearLabel,
        modal,
      });
    }}
  >
    {gallery?.[0] ? <Image className='rounded-t-lg' {...gallery[0]} /> : null}
    <div className='mt-4 p-4 md:p-8'>
      <dl>
        <div>
          <dt className='sr-only'>{priceLabel}</dt>

          <dd className='text-base text-gray-500'>{price}</dd>
        </div>

        <div>
          <dt className='sr-only'>{carNameLabel}</dt>

          <dd className='text-lg font-semibold'>{name}</dd>
        </div>
      </dl>

      <ul className='mt-6 flex flex-wrap items-center gap-8 text-xs md:gap-5'>
        {engine ? (
          <CarCardProperty
            {...{ label: engineLabel ?? '', value: engine, icon: 'enigne' }}
          />
        ) : null}

        {year ? (
          <CarCardProperty
            {...{ label: yearLabel ?? '', value: year, icon: 'year' }}
          />
        ) : null}

        {gear ? (
          <CarCardProperty
            {...{ label: gearLabel ?? '', value: gear, icon: 'gear' }}
          />
        ) : null}

        {seats ? (
          <CarCardProperty
            {...{ label: seatsLabel ?? '', value: seats, icon: 'seats' }}
          />
        ) : null}

        {fuel ? (
          <CarCardProperty
            {...{ label: fuelLabel ?? '', value: fuel, icon: 'fuel' }}
          />
        ) : null}

        <ModalDef id='car-rent-modal' component={CarRentModal} />
      </ul>
    </div>
  </button>
);
