import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ContentContainer, Typography } from '@/components/commons';
import { breakpoint } from '@/hooks';
import { clsxm } from '@/lib';

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
  isSlider = false,
}: Queries.CarRentListFragment & { isSlider?: boolean }) => {
  if (!carList?.length) return null;

  const slider = (
    <>
      {heading ? (
        <Typography
          as='h2'
          className={clsxm('text-lochmara-900', isSlider && 'px-2')}
        >
          {heading}
        </Typography>
      ) : null}

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        breakpoints={{
          [breakpoint.md]: {
            slidesPerView: 2,
          },
          [breakpoint.lg]: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        className='car-rent-list-slider -mt-4 w-full'
      >
        {carList.map((car) =>
          car ? (
            <SwiperSlide key={car.id} className='px-2 pt-4 pb-12'>
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
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </>
  );

  const list = (
    <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
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
  );

  return (
    <ContentContainer
      className={clsxm(
        'grid gap-4 md:gap-12',
        isSlider && 'max-w-[1436px] px-2'
      )}
    >
      {isSlider ? slider : list}
    </ContentContainer>
  );
};
