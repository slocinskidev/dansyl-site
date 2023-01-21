import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { Header } from './header';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const data = useStaticQuery(graphql`
    query {
      contentfulBrand {
        logo {
          ...ImageFragment
        }
        companyName {
          companyName
        }
        companyDescription {
          companyDescription
        }
        email
        phone
      }
    }
  `);

  console.log(data);

  return (
    <>
      <a href='#main' className='jump-to-content'>
        Przejdź do głównej treści strony
      </a>
      <Header />
      <main id='main'>{children}</main>
    </>
  );
};
