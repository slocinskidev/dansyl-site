import NiceModal, { ModalDef } from '@ebay/nice-modal-react';
import React from 'react';
import { GiCarSeat } from 'react-icons/gi';
import { RxCalendar } from 'react-icons/rx';
import { TbEngine, TbManualGearbox } from 'react-icons/tb';

import FuelIcon from '@/assets/icons/fuel.svg';
import { Image } from '@/components/commons';
import { CarRentModal } from '@/components/home/car-rent-modal';

export const CarCard = ({
  name,
  price,
  image,
  engine,
  fuel,
  gear,
  seats,
  year,
  gallery,
}: Queries.CarCardFragment) => (
  <button
    type='button'
    className='block rounded-lg p-4 text-left shadow-sm shadow-indigo-100 transition-shadow hover:shadow-lg'
    onClick={() => {
      NiceModal.show('car-rent-modal', { name, price, gallery });
    }}
  >
    {image ? <Image className='rounded-lg' {...image} /> : null}
    <div className='mt-4'>
      <dl>
        <div>
          <dt className='sr-only'>Cena</dt>

          <dd className='text-sm text-gray-500'>{price}</dd>
        </div>

        <div>
          <dt className='sr-only'>Marka i model auta</dt>

          <dd className='font-medium'>{name}</dd>
        </div>
      </dl>

      <ul className='mt-6 flex flex-wrap items-center gap-5 text-xs'>
        {engine ? (
          <li className='sm:inline-flex sm:shrink-0 sm:items-center'>
            <TbEngine className='text-lochmara-900' />

            <div className='mt-1.5 sm:ml-3 sm:mt-0'>
              <p className='text-gray-500'>Silnik</p>

              <p className='font-medium'>{engine}</p>
            </div>
          </li>
        ) : null}

        {year ? (
          <li className='sm:inline-flex sm:shrink-0 sm:items-center'>
            <RxCalendar className='text-lochmara-900' />

            <div className='mt-1.5 sm:ml-3 sm:mt-0'>
              <p className='text-gray-500'>Rocznik</p>

              <p className='font-medium'>{year}</p>
            </div>
          </li>
        ) : null}

        {gear ? (
          <li className='sm:inline-flex sm:shrink-0 sm:items-center'>
            <TbManualGearbox className='text-lochmara-900' />

            <div className='mt-1.5 sm:ml-3 sm:mt-0'>
              <p className='text-gray-500'>Skrzynia biegów</p>

              <p className='font-medium'>{gear}</p>
            </div>
          </li>
        ) : null}

        {seats ? (
          <li className='sm:inline-flex sm:shrink-0 sm:items-center'>
            <GiCarSeat className='text-lochmara-900' />

            <div className='mt-1.5 sm:ml-3 sm:mt-0'>
              <p className='text-gray-500'>Ilość miejsc</p>

              <p className='font-medium'>{seats}</p>
            </div>
          </li>
        ) : null}

        {fuel ? (
          <li className='sm:inline-flex sm:shrink-0 sm:items-center'>
            <FuelIcon className='h-3 w-3 text-lochmara-900' />

            <div className='mt-1.5 sm:ml-3 sm:mt-0'>
              <p className='text-gray-500'>Paliwo</p>

              <p className='font-medium'>{fuel}</p>
            </div>
          </li>
        ) : null}

        <ModalDef id='car-rent-modal' component={CarRentModal} />
      </ul>
    </div>
  </button>
);
