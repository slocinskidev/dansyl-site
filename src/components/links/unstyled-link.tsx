import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import React, { PropsWithChildren, PropsWithoutRef } from 'react';

import { clsxm } from '@/lib';

export type UnstyledLinkType = {
  href: string;
  openNewTab?: boolean;
  ariaLabel?: string;
};

export const UnstyledLink = <T extends unknown>({
  children,
  openNewTab,
  className,
  href,
  ariaLabel,
  ...rest
}: PropsWithChildren<PropsWithoutRef<Omit<GatsbyLinkProps<T>, 'to'> & UnstyledLinkType>>) => {
  const isNewTab =
    openNewTab !== undefined ? openNewTab : href && !href.startsWith('/') && !href.startsWith('#');

  if (!isNewTab) {
    return (
      <GatsbyLink {...{ to: href, 'aria-label': ariaLabel }} className={clsxm('w-max', className)}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a
      {...{ href, target: '_blank', rel: 'noopener noreferrer', 'aria-label': ariaLabel }}
      {...rest}
      className={clsxm('cursor-newtab, w-max', className)}
    >
      {children}
    </a>
  );
};
