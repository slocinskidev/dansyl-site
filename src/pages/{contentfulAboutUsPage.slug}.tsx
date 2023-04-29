import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { PageBanner } from '@/components/commons';
import { Layout } from '@/components/layouts';

const AboutUsPage = ({
  data: { contentfulAboutUsPage },
}: PageProps<Queries.AboutUsPageQuery>) => (
  <Layout>
    <PageBanner
      heading={contentfulAboutUsPage?.banner?.heading ?? null}
      description={contentfulAboutUsPage?.banner?.description ?? null}
    />
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
    }
  }
`;
