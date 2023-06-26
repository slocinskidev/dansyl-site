/* eslint-disable react/no-unstable-nested-components */
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';

import { Typography } from '@/components/commons';
import { UnderlineLink } from '@/components/links';
import { ProjectGallery } from '@/components/projects/project-gallery';

export const ProjectContent = ({
  gallery,
  title,
  description,
}: Queries.ContentfulProjectContentFragment) => (
  <div className='mx-auto grid h-full w-full max-w-screen-xl gap-10 lg:mt-10 lg:grid-cols-2'>
    <ProjectGallery gallery={gallery} />

    <article className='px-4'>
      <Typography as='h2' className='mb-4 text-lochmara-900'>
        {title}
      </Typography>

      <section className='text-base leading-normal'>
        {description
          ? renderRichText(
              description as RenderRichTextData<ContentfulRichTextGatsbyReference>,
              {
                renderNode: {
                  [INLINES.HYPERLINK]: (node, children) => {
                    // eslint-disable-next-line react/destructuring-assignment
                    const { uri } = node.data;
                    return <UnderlineLink href={uri}>{children}</UnderlineLink>;
                  },
                  [BLOCKS.UL_LIST]: (_, children) => (
                    <ul className='list-disc'>{children}</ul>
                  ),
                  [BLOCKS.LIST_ITEM]: (_, children) => (
                    <li className='ml-5'>{children}</li>
                  ),
                  [BLOCKS.HEADING_2]: (_, children) => (
                    <h2 className='text-2xl'>{children}</h2>
                  ),
                },
              }
            )
          : null}
      </section>
    </article>
  </div>
);
