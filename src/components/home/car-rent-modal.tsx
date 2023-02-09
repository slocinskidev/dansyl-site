import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import React, { useEffect, useRef, useState } from 'react';
import { GiKeyCard } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';
import { FreeMode, Navigation, Swiper as SwiperType, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Image } from '@/components/commons';
import { breakpoint } from '@/hooks/use-screen';
import { clsxm } from '@/lib';

export const CarRentModal = NiceModal.create(
  ({
    name,
    price,
    gallery,
  }: Pick<Queries.CarCardFragment, 'name' | 'price' | 'gallery'>) => {
    const modal = useModal();
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const modalElement = modalRef.current;

      if (modal.visible && modalElement) {
        disableBodyScroll(modalElement);
      }

      if (!modal.visible && modalElement) {
        enableBodyScroll(modalElement);
      }

      return () => {
        if (modalElement) enableBodyScroll(modalElement);
      };
    }, [modal.visible]);

    return (
      <>
        <button
          className='fixed inset-0 z-40 flex h-full w-full items-center justify-center backdrop-brightness-50'
          onClick={() => {
            modal.remove();
          }}
          type='button'
          aria-label='zamknij okno ze szczegółami auta'
        />

        <div
          ref={modalRef}
          id='car-rent-modal'
          role='alert'
          className={clsxm(
            'fixed top-1/2 left-1/2 z-50 h-fit max-h-[95vh] w-[95vw] max-w-screen-lg -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-xl border border-gray-100 bg-white p-4 opacity-0 shadow-xl lg:w-[80vw]',
            modal.visible && 'opacity-100'
          )}
        >
          <div className='flex items-start gap-4'>
            <GiKeyCard className='h-12 w-12 shrink-0 text-pelorous-600' />

            <div className='flex-1'>
              <strong className='block font-medium text-pelorous-900'>
                {`Zostało wybrane auto ${name}`}
              </strong>

              <p className='mt-1 text-sm text-gray-700'>
                Aby wypoyczyć auto wystarczy zadzwonić do nas!
              </p>

              <p className='mt-1 text-sm text-gray-700'>{`Cena: ${price}`}</p>
            </div>

            <button
              className='text-gray-500 transition hover:text-gray-600'
              type='button'
              onClick={() => modal.remove()}
            >
              <span className='sr-only'>zamknij okno ze szczegółami auta</span>

              <GrFormClose className='h-6 w-6' />
            </button>
          </div>

          <Swiper
            loop
            spaceBetween={16}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mt-10 h-fit w-full'
          >
            {gallery?.map((image) =>
              image ? (
                <SwiperSlide
                  key={image?.description}
                  className='cursor-pointer'
                >
                  <Image {...image} className='w-full' />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              [breakpoint.md]: {
                slidesPerView: 4,
              },
            }}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className='mt-4 h-fit w-full'
          >
            {gallery?.map((image) =>
              image ? (
                <SwiperSlide
                  key={image?.description}
                  className='cursor-pointer'
                >
                  <Image {...image} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </>
    );
  }
);
