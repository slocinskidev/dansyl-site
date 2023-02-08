import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail';
import React from 'react';

import { Image } from '@/components/commons/image';
import { UnderlineLink, UnstyledLink } from '@/components/links';

export type FooterType = {
  image?: Queries.ImageFragment;
} & Pick<Queries.ContentfulBrandFragment, 'phone' | 'email' | 'facebook'>;

export const Footer = ({ image, phone, email, facebook }: FooterType) => (
  <footer aria-label='Stopka' className='mx-auto max-w-screen-2xl bg-white'>
    <div className='mx-auto grid max-w-screen-xl items-center gap-6 px-4 py-10 md:grid-cols-2 md:gap-10 lg:grid-cols-5'>
      {image ? <Image className='rounded-lg lg:col-span-2' {...image} /> : null}

      <div className='mt-5 grid gap-8 md:mt-0 lg:col-span-3'>
        <div>
          <p>
            <span className='text-xs uppercase tracking-wide text-gray-500'>
              Zadzwoń do nas
            </span>
            {phone
              ? phone.map(
                  (tel) =>
                    tel && (
                      <UnderlineLink
                        key={tel}
                        href={`tel:${tel.split(' ').join('')}`}
                        className='block text-2xl font-medium text-gray-900 sm:text-3xl'
                      >
                        {tel}
                      </UnderlineLink>
                    )
                )
              : null}
          </p>

          <ul className='mt-8 space-y-1 text-sm text-gray-700'>
            <li>Poniedziałek - piątek: 8:00 - 16:00</li>
            <li>Sobota: 9:00 - 13:00</li>
          </ul>

          <ul className='mt-8 flex gap-6'>
            <li>
              <UnstyledLink
                href={facebook ?? '/'}
                className='text-gray-700 transition-colors hover:text-pelorous-600'
              >
                <span className='sr-only'>Facebook</span>

                <FaFacebookSquare className='h-6 w-6' />
              </UnstyledLink>
            </li>

            <li>
              <UnstyledLink
                href={`mailto:${email}`}
                className='text-gray-700 transition-colors hover:text-pelorous-600'
              >
                <span className='sr-only'>Email</span>

                <HiOutlineMail className='h-6 w-6' />
              </UnstyledLink>
            </li>
          </ul>
        </div>

        <nav aria-label='Nawigacja - stopka' className='mt-6'>
          <ul className='flex max-h-24 flex-col flex-wrap gap-y-3 gap-x-5 text-sm'>
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

            <li>
              <UnderlineLink href='/'>Kontakt</UnderlineLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className='col-span-full mt-6 border-t border-gray-100 pt-10'>
        <p className='text-center text-xs text-gray-500'>
          &copy; {new Date().getFullYear()} dansyl.pl
        </p>
      </div>
    </div>
  </footer>
);
