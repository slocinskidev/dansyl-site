/* eslint-disable react/no-unstable-nested-components */
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';

import { ContentContainer } from '@/components/commons';
import { ContactMapIframe } from '@/components/contact/contact-map';
import { UnderlineLink } from '@/components/links';

interface ContactSectionProps
  extends Pick<
      Queries.ContentfulContactPage,
      'introHeading' | 'introDescription' | 'mapHeading' | 'mapDescription'
    >,
    Pick<
      Queries.ContentfulBrand,
      | 'email'
      | 'emailLabel'
      | 'phone'
      | 'phoneLabel'
      | 'openHoursLabel'
      | 'openHours'
    > {
  addressLabel?: string | null;
  addressStreet?: string | null;
  addressPostalCode?: string | null;
  addressCity?: string | null;
}
export const ContactSection = ({
  introHeading,
  introDescription,
  mapDescription,
  mapHeading,
  addressLabel,
  addressStreet,
  addressPostalCode,
  addressCity,
  openHours,
  openHoursLabel,
  emailLabel,
  email,
  phone,
  phoneLabel,
}: ContactSectionProps) => (
  <ContentContainer className='gap-10 md:gap-20'>
    <div className='mx-auto grid gap-10'>
      <div className='mx-auto grid max-w-screen-md gap-4 text-center text-gray-800'>
        {introHeading && (
          <h2 className='text-4xl text-lochmara-900'>{introHeading}</h2>
        )}

        {introDescription &&
          renderRichText(
            introDescription as RenderRichTextData<ContentfulRichTextGatsbyReference>,
            {
              renderNode: {
                [INLINES.HYPERLINK]: (node, children) => {
                  // eslint-disable-next-line react/destructuring-assignment
                  const { uri } = node.data;
                  return <UnderlineLink href={uri}>{children}</UnderlineLink>;
                },
                [BLOCKS.PARAGRAPH]: (_, children) => (
                  <p className='mb-4 leading-loose'>{children}</p>
                ),
                [BLOCKS.UL_LIST]: (_, children) => (
                  <ul className='list-disc'>{children}</ul>
                ),
                [BLOCKS.LIST_ITEM]: (_, children) => (
                  <li className='ml-5'>{children}</li>
                ),
                [BLOCKS.HEADING_2]: (_, children) => (
                  <h2 className='text-2xl'>{children}</h2>
                ),
              },
            }
          )}
      </div>

      <ul className='mx-auto grid grid-rows-3 items-center gap-6 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 md:justify-items-center'>
        {phone && (
          <li>
            <div className='flex items-center gap-4'>
              <div className='h-fit w-fit rounded-full bg-lochmara-900 p-3'>
                <Phone className='h-6 w-6 text-white' />
              </div>

              <div>
                <h3 className='text-xs font-medium text-gray-500'>
                  {phoneLabel}
                </h3>

                {phone.map(
                  (tel) =>
                    tel && (
                      <UnderlineLink
                        key={tel}
                        href={`tel:${tel.split(' ').join('')}`}
                        className='block text-lg font-medium text-gray-900'
                      >
                        {tel}
                      </UnderlineLink>
                    )
                )}
              </div>
            </div>
          </li>
        )}

        {email && (
          <li>
            <div className='flex items-center gap-4'>
              <div className='h-fit w-fit rounded-full bg-lochmara-900 p-3'>
                <EnvelopeSimple className='h-6 w-6 text-white' />
              </div>

              <div>
                <h3 className='text-xs font-medium text-gray-500'>
                  {emailLabel}
                </h3>

                <UnderlineLink
                  href={`mailto:${email}`}
                  className='block text-lg font-medium text-gray-900'
                >
                  {email}
                </UnderlineLink>
              </div>
            </div>
          </li>
        )}

        {addressLabel && addressStreet && addressPostalCode && addressCity && (
          <li>
            <div className='flex items-center gap-4'>
              <div className='h-fit w-fit rounded-full bg-lochmara-900 p-3'>
                <MapPin className='h-6 w-6 text-white' />
              </div>

              <div>
                <h3 className='text-xs font-medium text-gray-500'>
                  {addressLabel}
                </h3>
                <p className='text-lg font-medium text-gray-900'>
                  {addressStreet}
                </p>

                <p className='-mt-1 text-lg font-medium text-gray-900'>
                  {`${addressPostalCode} ${addressCity}`}
                </p>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
    {openHours && (
      <div className='mx-auto grid gap-4 text-center'>
        <h2 className='text-4xl text-lochmara-900'>{openHoursLabel}</h2>
        <ul className='text-xl text-gray-800'>
          {openHours.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )}

    <div className='grid w-full gap-6'>
      <div className='mx-auto grid max-w-screen-md gap-4 text-center text-gray-800'>
        {mapHeading && (
          <h2 className='text-4xl text-lochmara-900'>{mapHeading}</h2>
        )}

        {mapDescription &&
          renderRichText(
            mapDescription as RenderRichTextData<ContentfulRichTextGatsbyReference>,
            {
              renderNode: {
                [INLINES.HYPERLINK]: (node, children) => {
                  // eslint-disable-next-line react/destructuring-assignment
                  const { uri } = node.data;
                  return <UnderlineLink href={uri}>{children}</UnderlineLink>;
                },
                [BLOCKS.PARAGRAPH]: (_, children) => (
                  <p className='mb-4 leading-loose'>{children}</p>
                ),
                [BLOCKS.UL_LIST]: (_, children) => (
                  <ul className='list-disc'>{children}</ul>
                ),
                [BLOCKS.LIST_ITEM]: (_, children) => (
                  <li className='ml-5'>{children}</li>
                ),
                [BLOCKS.HEADING_2]: (_, children) => (
                  <h2 className='text-2xl'>{children}</h2>
                ),
              },
            }
          )}
      </div>

      <div className='h-[600px] w-full overflow-hidden md:rounded-lg'>
        <ContactMapIframe />
      </div>
    </div>
  </ContentContainer>
);
