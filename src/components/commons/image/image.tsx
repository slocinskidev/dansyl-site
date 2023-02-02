import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image';
import React from 'react';

export type ImageType = Queries.ImageFragment & Omit<GatsbyImageProps, 'image' | 'alt'>;

export const Image = ({ gatsbyImageData, description, className, ...delegated }: ImageType) =>
  gatsbyImageData ? (
    <GatsbyImage
      {...{
        ...delegated,
        alt: description || '',
        image: gatsbyImageData,
        className,
      }}
    />
  ) : null;
