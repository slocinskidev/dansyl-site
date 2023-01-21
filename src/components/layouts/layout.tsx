import React from 'react';

import { Header } from './header';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <a href='#main' className='jump-to-content'>
      Przejdź do głównej treści strony
    </a>
    <Header />
    <main id='main'>{children}</main>
  </>
);
