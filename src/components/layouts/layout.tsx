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
          email: contentfulBrand?.email || '',
          phone: contentfulBrand?.phone || [''],
          image: contentfulFooter?.image || undefined,
          facebook: contentfulBrand?.facebook || '',
        }}
      />
    </NiceModal.Provider>
  );
};
