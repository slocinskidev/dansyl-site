import React from 'react';

import { clsxm } from '@/lib';

type UnderlineButtonType = {
  ariaLabel?: string;
  childrenClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

export const UnderlineButton = React.forwardRef<
  HTMLButtonElement,
  UnderlineButtonType
>(
  (
    {
      children,
      className,
      disabled,
      ariaLabel,
      type = 'button',
      childrenClassName,
      ...rest
    },
    ref
  ) => (
    <button
      // eslint-disable-next-line react/button-has-type
      {...{ type, ref, ariaLabel }}
      className={clsxm(
        'relative font-medium text-lochmara-600',
        'before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-current before:transition hover:before:scale-100',
        className
      )}
      {...rest}
    >
      <span className={clsxm(childrenClassName)}>{children}</span>
    </button>
  )
);
