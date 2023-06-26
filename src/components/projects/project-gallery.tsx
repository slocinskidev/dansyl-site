import React, { useState } from 'react';
import {
  FreeMode,
  Navigation,
  Pagination,
  Swiper as SwiperType,
  Thumbs,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Image } from '@/components/commons';
import { breakpoint } from '@/hooks';

export const ProjectGallery = ({
  gallery = [],
}: Pick<Queries.ContentfulProjectContentFragment, 'gallery'>) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (!gallery?.length) return null;

  return (
    <div className='grid'>
      <Swiper
        loop
        spaceBetween={16}
        navigation
        pagination
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className='car-rent-slider h-fit w-full'
      >
        {gallery?.map((image) =>
          image ? (
            <SwiperSlide key={image?.description}>
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
            slidesPerView: gallery.length > 4 ? 4 : gallery.length,
          },
        }}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className='car-rent-thumb-slider mt-4 h-fit w-full'
      >
        {gallery?.map((image) =>
          image ? (
            <SwiperSlide key={image?.description} className='cursor-pointer'>
              <Image {...image} />
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  );
};
