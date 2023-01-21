import React from 'react';

import { clsxm } from '@/lib';

type UnderlineButtonType = {
  ariaLabel?: string;
} & React.ComponentPropsWithRef<'button'>;

export const UnderlineButton = React.forwardRef<HTMLButtonElement, UnderlineButtonType>(
  ({ children, className, disabled, ariaLabel, type = 'button', ...rest }, ref) => (
    <button
      // eslint-disable-next-line react/button-has-type
      {...{ type, ref, ariaLabel }}
      className={clsxm(
        'relative font-medium text-indigo-600',
        'before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  ),
);
