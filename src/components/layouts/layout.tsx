import NiceModal from '@ebay/nice-modal-react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { Footer, Header } from '@/components/layouts';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { contentfulBrand, contentfulFooter, contentfulNavigation } =
    useStaticQuery<Queries.LayoutQuery>(graphql`
      query Layout {
        contentfulBrand {
          ...Brand
        }
        contentfulFooter {
          image {
            ...Image
          }
          callUsLabel
        }
        contentfulNavigation {
          ...Navigation
        }
      }
    `);

  return (
    <NiceModal.Provider>
      <a href='#main' className='jump-to-content'>
        Przejdź do głównej treści strony
      </a>
      {contentfulBrand?.logo && contentfulNavigation ? (
        <Header
          {...{ logo: contentfulBrand?.logo, navigation: contentfulNavigation }}
        />
      ) : null}
      <main id='main'>{children}</main>
      <Footer
        {...{
          companyName: contentfulBrand?.companyName ?? null,
          email: contentfulBrand?.email ?? null,
          emailLabel: contentfulBrand?.emailLabel ?? null,
          phone: contentfulBrand?.phone || [''],
          phoneLabel: contentfulBrand?.phoneLabel ?? null,
          image: contentfulFooter?.image || undefined,
          facebook: contentfulBrand?.facebook ?? null,
          facebookLabel: contentfulBrand?.facebookLabel ?? null,
          openHours: contentfulBrand?.openHours ?? null,
          navigation: contentfulNavigation,
          callUsLabel: contentfulFooter?.callUsLabel ?? null,
        }}
      />
    </NiceModal.Provider>
  );
};
