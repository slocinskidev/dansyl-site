import React from 'react';

import { clsxm } from '@/lib';

interface HamburgerProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export const Hamburger = ({ isOpen, toggleIsOpen }: HamburgerProps) => {
  const hamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-black transition-transform ease transform duration-300`;

  return (
    <button
      type='button'
      className={clsxm(
        'group flex h-12 w-12 flex-col items-center justify-center lg:hidden',
        isOpen && 'absolute right-4'
      )}
      onClick={() => toggleIsOpen()}
    >
      <span
        className={clsxm(
          hamburgerLine,
          isOpen
            ? 'translate-y-2 rotate-45 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        )}
      />
      <span
        className={clsxm(
          hamburgerLine,
          isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
        )}
      />
      <span
        className={clsxm(
          hamburgerLine,
          isOpen
            ? '-translate-y-2 -rotate-45 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        )}
      />
      {/* TODO: aria via CMS */}
      <span className='sr-only'>{isOpen ? 'Zamknij menu' : 'Otwórz menu'}</span>
    </button>
  );
};
