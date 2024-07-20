import React, { PropsWithChildren } from 'react';

export const ReportDamageStepIndicator = ({ children }: PropsWithChildren) => (
  <div className='relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-lochmara-900 text-white'>
    {children}
  </div>
);
