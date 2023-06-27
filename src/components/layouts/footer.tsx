import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail';
import React from 'react';

import { Image } from '@/components/commons/image';
import { UnderlineLink, UnstyledLink } from '@/components/links';

interface FooterProps
  extends Omit<Queries.BrandFragment, 'logo' | 'companyDescription'> {
  image?: Queries.ImageFragment;
  callUsLabel?: Queries.ContentfulFooter['callUsLabel'];
  navigation: Queries.NavigationFragment | null;
}

export const Footer = ({
  image,
  phone,
  email,
  facebook,
  companyName,
  openHours,
  facebookLabel,
  emailLabel,
  navigation,
  callUsLabel,
}: FooterProps) => (
  <footer className='bg-gray-100 px-4'>
    <div className='mx-auto grid max-w-screen-xl items-center gap-4 py-10 md:grid-cols-2 md:gap-10 lg:grid-cols-5'>
      {image ? (
        <Image
          className='hidden rounded-lg md:block lg:col-span-2'
          {...image}
        />
      ) : null}

      <div className='mt-5 grid gap-8 md:mt-0 lg:col-span-3'>
        <div>
          <p>
            {callUsLabel ? (
              <span className='text-xs uppercase tracking-wide text-gray-500'>
                {callUsLabel}
              </span>
            ) : null}

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
          {openHours ? (
            <ul className='mt-8 space-y-1 text-sm text-gray-700'>
              {openHours.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}

          <ul className='mt-8 flex gap-6'>
            <li>
              <UnstyledLink
                href={facebook ?? '/'}
                className='text-gray-700 transition-colors hover:text-lochmara-600'
              >
                <span className='sr-only'>{facebookLabel}</span>

                <FaFacebookSquare className='h-6 w-6' />
              </UnstyledLink>
            </li>

            <li>
              <UnstyledLink
                href={`mailto:${email}`}
                className='text-gray-700 transition-colors hover:text-lochmara-600'
              >
                <span className='sr-only'>{emailLabel}</span>

                <HiOutlineMail className='h-6 w-6' />
              </UnstyledLink>
            </li>
          </ul>
        </div>

        {navigation ? (
          <nav className='mt-6'>
            <ul className='flex flex-wrap gap-y-5 gap-x-10 text-sm sm:max-h-36 sm:flex-col sm:gap-x-5'>
              {navigation?.list?.map(
                (item) =>
                  item?.slug &&
                  item?.pageName && (
                    <li key={item.slug}>
                      <UnderlineLink href={item.slug}>
                        {item.pageName}
                      </UnderlineLink>
                    </li>
                  )
              )}
            </ul>
          </nav>
        ) : null}
      </div>

      <div className='col-span-full mt-6 border-t border-gray-200 pt-10'>
        <p className='text-center text-xs text-gray-500'>
          &copy;
          {` ${new Date().getFullYear()} ${companyName?.companyName || ''}`}
        </p>
      </div>
    </div>
  </footer>
);
