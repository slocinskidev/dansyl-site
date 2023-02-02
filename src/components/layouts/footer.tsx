import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail';
import React from 'react';

import { Image } from '@/components/commons/image';
import { UnderlineLink, UnstyledLink } from '@/components/links';

export type FooterType = {
  image?: Queries.ImageFragment;
} & Pick<Queries.ContentfulBrandFragment, 'phone' | 'email' | 'facebook'>;

export const Footer = ({ image, phone, email, facebook }: FooterType) => (
  <footer aria-label='Stopka' className='bg-white lg:grid lg:grid-cols-5'>
    {image ? (
      <div className='relative block h-32 lg:col-span-2 lg:h-full'>
        <Image {...image} />
      </div>
    ) : null}

    <div className='px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
        <div>
          <p>
            <span className='text-xs tracking-wide text-gray-500 uppercase'>Zadzwoń do nas</span>
            {phone
              ? phone.map(
                  (tel) =>
                    tel && (
                      <UnderlineLink
                        key={tel}
                        href={`tel:${tel.split(' ').join('')}`}
                        className='block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl'
                      >
                        {tel}
                      </UnderlineLink>
                    ),
                )
              : null}
          </p>

          <ul className='mt-8 space-y-1 text-sm text-gray-700'>
            <li>Poniedziałek - piątek: 8:00 - 16:00</li>
            <li>Sobota: 9:00 - 13:00</li>
          </ul>

          <ul className='flex gap-6 mt-8'>
            <li>
              <UnstyledLink
                href={facebook ?? '/'}
                className='text-gray-700 transition hover:opacity-75'
              >
                <span className='sr-only'>Facebook</span>

                <FaFacebookSquare className='w-6 h-6' />
              </UnstyledLink>
            </li>

            <li>
              <UnstyledLink
                href={`mailto:${email}`}
                className='text-gray-700 transition hover:opacity-75'
              >
                <span className='sr-only'>Email</span>

                <HiOutlineMail className='w-6 h-6' />
              </UnstyledLink>
            </li>
          </ul>
        </div>

        <nav aria-label='Nawigacja - stopka' className='mt-6'>
          <ul className='flex-col text-sm flex gap-y-3 gap-x-5 flex-wrap max-h-24'>
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

      <div className='pt-12 mt-12 border-t border-gray-100'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <p className='mt-8 text-xs text-gray-500 sm:mt-0'>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  </footer>
);
