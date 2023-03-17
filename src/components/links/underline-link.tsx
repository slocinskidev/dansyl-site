import { GatsbyLinkProps } from 'gatsby';
import React, { PropsWithChildren, PropsWithoutRef } from 'react';

import { UnstyledLink, UnstyledLinkType } from '@/components/links';
import { clsxm } from '@/lib';

export const UnderlineLink = <T extends unknown>({
  children,
  className,
  childrenClassName,
  ...rest
}: PropsWithChildren<
  PropsWithoutRef<
    Omit<GatsbyLinkProps<T>, 'to'> &
      UnstyledLinkType & { childrenClassName?: string }
  >
>) => (
  <UnstyledLink
    {...rest}
    className={clsxm(
      'relative font-medium text-lochmara-600',
      'before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-current before:transition hover:before:scale-100',
      className
    )}
  >
    <span className={clsxm(childrenClassName)}>{children}</span>
  </UnstyledLink>
);
