import React from 'react';
import { RxCalendar } from 'react-icons/rx';

import { Typography } from '@/components/commons';

export const ProjectBanner = ({
  projectName,
  realizationDate,
}: {
  projectName?: string | null;
  realizationDate?: string | null;
}) => (
  <div className='relative mx-auto grid gap-14 bg-gray-100 px-4 py-10 lg:py-20'>
    <div className='mx-auto grid w-full max-w-screen-xl gap-14'>
      <div className='grid w-full place-items-center gap-4'>
        {projectName ? (
          <Typography as='h1' variant='heading1' className='text-lochmara-900'>
            {projectName}
          </Typography>
        ) : null}
        {realizationDate ? (
          <div className='flex items-center gap-2'>
            <RxCalendar className='h-8 w-8' />
            <Typography as='p' className='text-base font-medium md:text-lg'>
              {realizationDate}
            </Typography>
          </div>
        ) : null}
      </div>
    </div>
  </div>
);
