import React from 'react';

import { Typography } from '@/components/commons';

interface ReportDamageStepHeadingProps {
  heading: string;
}

export const ReportDamageStepHeading = ({
  heading,
}: ReportDamageStepHeadingProps) => (
  <Typography as='h3' className='text-lochmara-900'>
    {heading}
  </Typography>
);
