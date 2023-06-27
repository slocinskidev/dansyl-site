import React, { PropsWithChildren } from 'react';

import { clsxm } from '@/lib';

interface ContentContainerProps {
  className?: string;
  outerClassName?: string;
}

export const ContentContainer = ({
  children,
  className,
  outerClassName,
}: PropsWithChildren<ContentContainerProps>) => (
  <div className={clsxm('px-4', outerClassName)}>
    <div
      className={clsxm(
        'mx-auto my-10 grid w-full max-w-screen-xl lg:my-20',
        className
      )}
    >
      {children}
    </div>
  </div>
);
