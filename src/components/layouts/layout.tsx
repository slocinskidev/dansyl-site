import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { Footer, Header } from '@/components/layouts';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { contentfulBrand, contentfulFooter } = useStaticQuery<Queries.BrandQuery>(graphql`
    query Brand {
      contentfulBrand {
        ...ContentfulBrand
      }
      contentfulFooter {
        image {
          ...Image
        }
      }
    }
  `);

  return (
    <>
      <a href='#main' className='jump-to-content'>
        Przejdź do głównej treści strony
      </a>
      {contentfulBrand?.logo ? <Header {...{ logo: contentfulBrand?.logo }} /> : null}
      <main id='main'>{children}</main>
      <Footer
        {...{
          email: contentfulBrand?.email || '',
          phone: contentfulBrand?.phone || [''],
          image: contentfulFooter?.image || undefined,
          facebook: contentfulBrand?.facebook || '',
        }}
      />
    </>
  );
};
