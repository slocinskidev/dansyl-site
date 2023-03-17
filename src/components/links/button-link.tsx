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
}: PropsWithChildren<
  PropsWithoutRef<Omit<GatsbyLinkProps<T>, 'to'> & ButtonLinkType>
>) => (
  <UnstyledLink
    {...rest}
    className={clsxm(
      'inline-block h-fit w-fit rounded border text-center',
      variant === 'solid' &&
        'border-lochmara-600 bg-lochmara-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-lochmara-600 focus:outline-none focus:ring active:text-lochmara-500',
      variant === 'outline' &&
        'border-lochmara-600 px-12 py-3 text-sm font-medium text-lochmara-600 hover:bg-lochmara-600 hover:text-white focus:outline-none focus:ring active:bg-lochmara-500',
      className
    )}
  >
    {children}
  </UnstyledLink>
);
