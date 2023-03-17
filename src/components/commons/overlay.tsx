import React from 'react';

import { clsxm } from '@/lib';

type OverlayProps = {
  isOpen: boolean;
  handler: () => void;
  variant?: 'default' | 'transparent';
  ariaOpen?: string;
  ariaClose?: string;
  className?: string;
};

export const Overlay = ({
  variant = 'default',
  isOpen,
  handler,
  className,
  ariaOpen,
  ariaClose,
}: OverlayProps) => {
  const variantMap = {
    default: 'visible bg-opacity-100',
    transparent: 'visible bg-opacity-0',
  };

  return (
    <button
      type='button'
      className={clsxm(
        'fixed inset-0 cursor-pointer backdrop-brightness-50 transition-opacity',
        isOpen ? variantMap[variant] : 'invisible bg-opacity-0',
        className
      )}
      onClick={handler}
    >
      {/* TODO: aria via CMS */}
      <span className='sr-only'>
        {isOpen ? ariaClose || 'Zamknij' : ariaOpen || 'Otwórz'}
      </span>
    </button>
  );
};
