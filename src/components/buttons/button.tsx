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
        'inline-block rounded border h-fit w-fit',
        variant === 'solid' &&
          'border-pelorous-600 bg-pelorous-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-pelorous-600 focus:outline-none focus:ring active:text-pelorous-500',
        variant === 'outline' &&
          'border-pelorous-600 px-12 py-3 text-sm font-medium text-pelorous-600 hover:bg-pelorous-600 hover:text-white focus:outline-none focus:ring active:bg-pelorous-500',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  ),
);
