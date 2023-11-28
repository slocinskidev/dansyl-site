import React from 'react';

import { Image, Overlay } from '@/components/commons';
import { Hamburger, Navigation } from '@/components/layouts/header';
import { UnstyledLink } from '@/components/links';
import { useScreen, useToggle } from '@/hooks';
import { clsxm } from '@/lib';

export type HeaderType = {
  logo: Queries.ImageFragment;
  navigation: Queries.NavigationFragment;
};

export const Header = ({ logo, navigation }: HeaderType) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const { isDesktop } = useScreen();

  const isMobileAndOpen = !isDesktop && isOpen;

  return (
    <>
      <Overlay
        {...{ isOpen: isMobileAndOpen, handler: toggleIsOpen }}
        className='z-10'
      />
      <header
        aria-label='Site Header'
        className='sticky top-0 z-10 bg-white px-4 shadow-sm'
      >
        <div className='mx-auto max-w-screen-xl'>
          <div
            className={clsxm(
              'flex h-16 items-center justify-between',
              isMobileAndOpen && 'lg:justify-center'
            )}
          >
            <UnstyledLink href='/'>
              <span className='sr-only'>Strona główna</span>
              <Image {...logo} className='aspect-[32/7] h-10' />
            </UnstyledLink>

            <Hamburger {...{ isOpen, toggleIsOpen }} />

            <Navigation {...navigation} {...{ isOpen }} />
          </div>
        </div>
      </header>
    </>
  );
};
