import { Link } from 'gatsby';
import * as React from 'react';

import { Seo } from '@/components/commons/seo';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = () => (
  <main style={pageStyles}>
    <h1 style={headingStyles}>Nie znaleziono strony</h1>
    <p style={paragraphStyles}>
      Przepraszamy 😔, nie możemy znaleźć strony, której szukasz.
      <br />
      <br />
      <Link to='/'>Strona główna</Link>.
    </p>
  </main>
);

export default NotFoundPage;

export const Head = () => <Seo title='Nie znaleziono strony' />;
