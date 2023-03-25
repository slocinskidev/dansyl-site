import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import { GiKeyCard } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';
import {
  FreeMode,
  Navigation,
  Pagination,
  Swiper as SwiperType,
  Thumbs,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Image } from '@/components/commons';
import CarCardProperty from '@/components/home/car-rent-section/car-rent-card-property';
import { UnderlineLink } from '@/components/links';
import { breakpoint } from '@/hooks/use-screen';
import { clsxm } from '@/lib';

export const CarRentModal = NiceModal.create(
  ({
    name,
    price,
    gallery,
    engine,
    year,
    gear,
    seats,
    fuel,
    engineLabel,
    fuelLabel,
    gearLabel,
    modal: contentfulModal,
    priceLabel,
    seatsLabel,
    yearLabel,
  }: Omit<Queries.CarCardFragment, 'image'> &
    Pick<
      Queries.CarRentListFragment,
      | 'engineLabel'
      | 'fuelLabel'
      | 'gearLabel'
      | 'priceLabel'
      | 'seatsLabel'
      | 'yearLabel'
      | 'modal'
    >) => {
    const { contentfulBrand } = useStaticQuery<Queries.LayoutQuery>(graphql`
      query CarRentModal {
        contentfulBrand {
          ...Brand
        }
      }
    `);

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
          aria-label={contentfulModal?.closeButtonInfo ?? ''}
        />

        <div
          ref={modalRef}
          id='car-rent-modal'
          role='alert'
          className={clsxm(
            'fixed top-1/2 left-1/2 z-50 h-fit max-h-[95vh] w-[95vw] max-w-screen-lg -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-xl border border-gray-100 bg-white p-4 opacity-0 shadow-xl lg:w-[80vw] lg:overflow-y-auto lg:p-8',
            modal.visible && 'opacity-100'
          )}
        >
          <div className='flex items-start gap-4'>
            <GiKeyCard className='h-12 w-12 shrink-0 text-lochmara-900' />

            <div className='flex-1'>
              <p className='text-lg font-medium'>
                {contentfulModal?.choosenCarLabel}
                <strong className='ml-1 text-lg font-semibold text-lochmara-900'>
                  {name}
                </strong>
              </p>

              <ul className='mt-6 flex flex-wrap items-center gap-8 text-xs md:gap-5'>
                {engine ? (
                  <CarCardProperty
                    {...{
                      label: engineLabel ?? '',
                      value: engine,
                      icon: 'enigne',
                    }}
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
                    {...{
                      label: seatsLabel ?? '',
                      value: seats,
                      icon: 'seats',
                    }}
                  />
                ) : null}

                {fuel ? (
                  <CarCardProperty
                    {...{ label: fuelLabel ?? '', value: fuel, icon: 'fuel' }}
                  />
                ) : null}
              </ul>

              {contentfulModal?.description?.description ? (
                <p className='mt-8 text-lg font-semibold text-gray-700'>
                  {contentfulModal.description.description}
                </p>
              ) : null}

              <p className='mt-1 text-base font-medium text-gray-700'>{`${
                `${priceLabel}:` ?? ''
              } ${price}`}</p>

              {contentfulBrand?.phone ? (
                <p className='mt-4'>
                  {contentfulModal?.callUsLabel ? (
                    <span className='text-xs uppercase tracking-wide text-gray-500'>
                      {contentfulModal.callUsLabel}
                    </span>
                  ) : null}

                  {contentfulBrand.phone.length
                    ? contentfulBrand.phone.map(
                        (tel) =>
                          tel && (
                            <UnderlineLink
                              key={tel}
                              href={`tel:${tel.split(' ').join('')}`}
                              className='block text-2xl font-medium text-gray-900 sm:text-3xl'
                            >
                              {tel}
                            </UnderlineLink>
                          )
                      )
                    : null}
                </p>
              ) : null}
            </div>

            <button
              className='text-gray-500 transition-colors hover:text-lochmara-900'
              type='button'
              onClick={() => modal.remove()}
            >
              <span className='sr-only'>
                {contentfulModal?.closeButtonInfo ?? ''}
              </span>

              <GrFormClose className='h-8 w-8 [&>path]:stroke-current' />
            </button>
          </div>

          <Swiper
            loop
            spaceBetween={16}
            navigation
            pagination
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            className='car-rent-slider mt-10 h-fit w-full'
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
            spaceBetween={0}
            slidesPerView={2}
            breakpoints={{
              [breakpoint.md]: {
                slidesPerView: 4,
              },
            }}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className='car-rent-thumb-slider mt-4 h-fit w-full'
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
