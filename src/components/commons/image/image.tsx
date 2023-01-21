import { GatsbyImage, GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

export type ImageType = {
  alt: string;
  image?: {
    gatsbyImage?: IGatsbyImageData;
    gatsbyImageData?: IGatsbyImageData;
    file?: {
      contentType?: string;
      url: string;
    };
    svg?: {
      content: string;
    };
  };
} & Omit<GatsbyImageProps, 'image'>;

export const Image = ({ image, className, alt, ...delegated }: ImageType) => {
  if (image?.file?.contentType === 'image/svg+xml') {
    return image?.svg?.content ? (
      // eslint-disable-next-line react/no-danger
      <div dangerouslySetInnerHTML={{ __html: image.svg.content }} {...{ className }} />
    ) : (
      <img {...{ alt, className, src: image.file.url }} />
    );
  }

  if (image?.gatsbyImageData)
    return <GatsbyImage {...{ ...delegated, alt, image: image.gatsbyImageData, className }} />;

  return null;
};
