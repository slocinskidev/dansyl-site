/* eslint-disable react/no-unstable-nested-components */
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { graphql, PageProps } from 'gatsby';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';

import { PageBanner } from '@/components/commons';
import { Layout } from '@/components/layouts';
import { UnderlineLink } from '@/components/links';

const AboutUsPage = ({
  data: { contentfulAboutUsPage },
}: PageProps<Queries.AboutUsPageQuery>) => (
  <Layout>
    <PageBanner
      heading={contentfulAboutUsPage?.banner?.heading ?? null}
      description={contentfulAboutUsPage?.banner?.description ?? null}
    />
    <div className='relative mx-auto grid gap-14 px-4 pt-10 pb-20 lg:py-20'>
      <div className='mx-auto grid w-full max-w-screen-xl'>
        {contentfulAboutUsPage?.description
          ? renderRichText(
              contentfulAboutUsPage.description as RenderRichTextData<ContentfulRichTextGatsbyReference>,
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
      </div>
    </div>
  </Layout>
);

export default AboutUsPage;

export const query = graphql`
  query AboutUsPage {
    contentfulAboutUsPage {
      pageName
      banner {
        ...ContentfulPageBanner
      }
      description {
        raw
      }
    }
  }
`;