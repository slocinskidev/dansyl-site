import React from 'react';

import { useSiteMetadata } from '@/hooks';

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export const Seo = ({ title, description, pathname, children }: SeoProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const titleWithDefault = title ? `${defaultTitle} - ${title}` : defaultTitle;

  const seo = {
    title: titleWithDefault || '',
    description: description || defaultDescription || '',
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:url' content={seo.url} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
      <link
        rel='icon'
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
};
