import React from 'react';
import { GiCarSeat } from 'react-icons/gi';
import { RxCalendar } from 'react-icons/rx';
import { TbEngine, TbManualGearbox } from 'react-icons/tb';

import FuelIcon from '@/assets/icons/fuel.svg';

interface CarCardPropertyProps {
  icon: IconNames;
  label: string;
  value: string;
}

type IconNames = 'engine' | 'year' | 'gear' | 'seats' | 'fuel';

type IconsMapType = {
  [name in IconNames]: JSX.Element;
};

const iconsMap: IconsMapType = {
  engine: <TbEngine className='h-5 w-5 text-lochmara-900' />,
  year: <RxCalendar className='h-5 w-5 text-lochmara-900' />,
  gear: <TbManualGearbox className='h-5 w-5 text-lochmara-900' />,
  seats: <GiCarSeat className='h-5 w-5 text-lochmara-900' />,
  fuel: <FuelIcon className='h-5 w-5 text-lochmara-900' />,
};

const CarCardProperty = ({ icon, label, value }: CarCardPropertyProps) => (
  <li className='sm:inline-flex sm:shrink-0 sm:items-center'>
    {iconsMap[icon]}

    <div className='mt-1.5 sm:ml-3 sm:mt-0'>
      <p className='text-sm text-gray-500'>{label}</p>

      <p className='text-base font-medium'>{value}</p>
    </div>
  </li>
);

export default CarCardProperty;
