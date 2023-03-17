import React from 'react';

import { ButtonLink, UnderlineLink } from '@/components/links';
import { useScreen } from '@/hooks';
import { clsxm } from '@/lib';

interface NavigationProps extends Queries.NavigationFragment {
  isOpen: boolean;
}

export const Navigation = ({
  list,
  highlightItem,
  isOpen,
}: NavigationProps) => {
  const navListWithoutHighlight = list?.filter(
    (navItem) => navItem?.id !== highlightItem?.id
  );
  const { isDesktop } = useScreen();

  const isMobileAndOpen = !isDesktop && isOpen;

  return (
    <nav
      aria-label='Główna nawigacja'
      className={clsxm(
        'hidden items-center gap-24 lg:flex',
        isMobileAndOpen &&
          'absolute left-0 right-0 top-16 flex h-max flex-col gap-10 bg-white py-10 shadow-sm'
      )}
    >
      {navListWithoutHighlight?.length ? (
        <ul
          className={clsxm(
            'flex items-center gap-6 text-sm',
            isMobileAndOpen && 'flex-col'
          )}
        >
          {navListWithoutHighlight.map((listItem) =>
            listItem?.pageName && listItem?.slug ? (
              <li key={listItem?.id}>
                <UnderlineLink href={listItem.slug} className='py-4'>
                  {listItem.pageName}
                </UnderlineLink>
              </li>
            ) : null
          )}
        </ul>
      ) : null}

      {highlightItem?.pageName && highlightItem?.slug ? (
        <ButtonLink className='flex' href={highlightItem.slug}>
          {highlightItem.pageName}
        </ButtonLink>
      ) : null}
    </nav>
  );
};
