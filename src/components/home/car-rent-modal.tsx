import NiceModal, { useModal } from '@ebay/nice-modal-react';
import React from 'react';
import { GiKeyCard } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';

import { clsxm } from '@/lib';

export const CarRentModal = NiceModal.create(
  ({ name, price }: Pick<Queries.CarCardFragment, 'name' | 'price'>) => {
    const modal = useModal();

    return (
      <>
        <button
          className='fixed inset-0 flex h-full w-full items-center justify-center backdrop-brightness-50'
          onClick={() => {
            modal.remove();
          }}
          type='button'
          aria-label='zamknij okno ze szczegółami wypożyczenia auta'
        />

        <div
          id='car-rent-modal'
          role='alert'
          className={clsxm(
            'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-gray-100 bg-white p-4 opacity-0 shadow-xl',
            modal.visible && 'opacity-100'
          )}
        >
          <div className='flex items-start gap-4'>
            <GiKeyCard className='h-12 w-12 shrink-0 text-pelorous-600' />

            <div className='flex-1'>
              <strong className='block font-medium text-pelorous-900'>
                {`Chcesz wynająć ${name}`}
              </strong>

              <p className='mt-1 text-sm text-gray-700'>
                Aby to zrobić wystarczy zadzwonić do nas!
              </p>

              <p className='mt-1 text-sm text-gray-700'>{`Cena: ${price}`}</p>
            </div>

            <button
              className='text-gray-500 transition hover:text-gray-600'
              type='button'
              onClick={() => modal.remove()}
            >
              <span className='sr-only'>
                zamknij okno ze szczegółami wypożyczenia auta
              </span>

              <GrFormClose className='h-6 w-6' />
            </button>
          </div>
        </div>
      </>
    );
  }
);
