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
      'inline-block rounded border',
      variant === 'solid' &&
        'border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500',
      variant === 'outline' &&
        'border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500',
      className,
    )}
  >
    {children}
  </UnstyledLink>
);
