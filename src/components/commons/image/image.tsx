import { GatsbyImage, GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

export type ImageType = {
  gatsbyImageData: IGatsbyImageData;
  description: string;
} & Omit<GatsbyImageProps, 'image'>;

export const Image = ({ gatsbyImageData, description, className, ...delegated }: ImageType) => (
  <GatsbyImage
    {...{
      ...delegated,
      alt: description,
      image: gatsbyImageData,
      className,
    }}
  />
);
