import React from 'react';
import { FaCarSide } from 'react-icons/fa';
import { GiAutoRepair } from 'react-icons/gi';
import { MdCarRepair } from 'react-icons/md';

import PaintSpray from '@/assets/icons/paint-spray.svg';

type IconNames = 'paint-spray' | 'auto-repair' | 'car-repair' | 'car-side';

type IconsMapType = {
  [name in IconNames]: JSX.Element;
};

const iconsMap: IconsMapType = {
  'paint-spray': <PaintSpray className='h-5 w-5' />,
  'auto-repair': <GiAutoRepair className='h-5 w-5' />,
  'car-repair': <MdCarRepair className='h-5 w-5' />,
  'car-side': <FaCarSide className='h-5 w-5' />,
};

export const WhyUsCard = ({
  heading,
  description,
  icon,
}: Queries.WhyUsCardFragment) => (
  <div className='flex items-start'>
    {icon ? (
      <span className='shrink-0 rounded-lg bg-lochmara-800 p-4'>
        {iconsMap[icon as IconNames]}
      </span>
    ) : null}

    <div className='ml-4'>
      <h3 className='text-lg font-bold'>{heading}</h3>

      <p className='mt-1 text-sm leading-normal text-gray-300'>
        {description?.description}
      </p>
    </div>
  </div>
);
