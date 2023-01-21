import React, { ComponentPropsWithRef, forwardRef } from 'react';

import { clsxm } from '@/lib';

type ButtonProps = {
  variant?: 'solid' | 'outline';
  ariaLabel?: string;
} & ComponentPropsWithRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, disabled, ariaLabel, type = 'button', variant = 'solid', ...rest },
    ref,
  ) => (
    <button
      // eslint-disable-next-line react/button-has-type
      {...{ type, ref, 'aria-label': ariaLabel }}
      className={clsxm(
        'inline-block rounded border',
        variant === 'solid' &&
          'border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500',
        variant === 'outline' &&
          'border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  ),
);
