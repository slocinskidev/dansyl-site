import React, { ComponentPropsWithRef, forwardRef } from 'react';

import { clsxm } from '@/lib';

type ButtonProps = {
  variant?: 'solid' | 'outline';
  ariaLabel?: string;
} & ComponentPropsWithRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      ariaLabel,
      type = 'button',
      variant = 'solid',
      ...rest
    },
    ref
  ) => (
    <button
      // eslint-disable-next-line react/button-has-type
      {...{ type, ref, 'aria-label': ariaLabel }}
      className={clsxm(
        'inline-block h-fit w-fit rounded border',
        variant === 'solid' &&
          'border-lochmara-600 bg-lochmara-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-lochmara-600 focus:outline-none focus:ring active:text-lochmara-500',
        variant === 'outline' &&
          'border-lochmara-600 px-12 py-3 text-sm font-medium text-lochmara-600 hover:bg-lochmara-600 hover:text-white focus:outline-none focus:ring active:bg-lochmara-500',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
);
