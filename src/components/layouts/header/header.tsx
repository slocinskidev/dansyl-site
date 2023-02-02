import React from 'react';

import { Image } from '@/components/commons/image';
import { ButtonLink, UnderlineLink, UnstyledLink } from '@/components/links';

export type HeaderType = {
  logo: Queries.ImageFragment;
};

export const Header = ({ logo }: HeaderType) => (
  <header aria-label='Site Header' className='bg-white'>
    <div className='mx-auto max-w-screen-xl px-4'>
      <div className='flex h-16 items-center justify-between'>
        <div className='md:flex md:items-center md:gap-12'>
          <UnstyledLink href='/'>
            <span className='sr-only'>Strona główna</span>
            <Image {...logo} className='w-40' />
          </UnstyledLink>
        </div>

        <div className='hidden md:block'>
          <nav aria-label='Główna nawigacja'>
            <ul className='flex items-center gap-6 text-sm'>
              <li>
                <UnderlineLink href='/'>O Nas</UnderlineLink>
              </li>

              <li>
                <UnderlineLink href='/'>Oferta</UnderlineLink>
              </li>

              <li>
                <UnderlineLink href='/'>Wynajem aut</UnderlineLink>
              </li>

              <li>
                <UnderlineLink href='/'>Realizacje</UnderlineLink>
              </li>

              <li>
                <UnderlineLink href='/'>Pytania i odpowiedzi</UnderlineLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className='flex items-center gap-4'>
          <div className='sm:flex sm:gap-4'>
            <div className='hidden sm:flex'>
              <ButtonLink href='/'>Kontakt</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);
