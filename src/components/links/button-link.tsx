import { GatsbyLinkProps } from 'gatsby';
import React, { PropsWithChildren, PropsWithoutRef } from 'react';

import { UnstyledLink, UnstyledLinkType } from '@/components/links';
import { clsxm } from '@/lib';

type ButtonLinkType = {
  variant?: 'solid' | 'outline';
} & UnstyledLinkType;

export const ButtonLink = <T extends unknown>({
  variant = 'solid',
  children,
  className,
  ...rest
}: PropsWithChildren<PropsWithoutRef<Omit<GatsbyLinkProps<T>, 'to'> & ButtonLinkType>>) => (
  <UnstyledLink
    {...rest}
    className={clsxm(
      'inline-block rounded border h-fit w-fit',
      variant === 'solid' &&
        'border-pelorous-600 bg-pelorous-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-pelorous-600 focus:outline-none focus:ring active:text-pelorous-500',
      variant === 'outline' &&
        'border-pelorous-600 px-12 py-3 text-sm font-medium text-pelorous-600 hover:bg-pelorous-600 hover:text-white focus:outline-none focus:ring active:bg-pelorous-500',
      className,
    )}
  >
    {children}
  </UnstyledLink>
);
