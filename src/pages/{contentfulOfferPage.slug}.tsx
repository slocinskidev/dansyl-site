import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { PageBanner } from '@/components/commons';
import { Layout } from '@/components/layouts';

const OfferPage = ({
  data: { contentfulOfferPage },
}: PageProps<Queries.OfferPageQuery>) => (
  <Layout>
    <PageBanner
      heading={contentfulOfferPage?.banner?.heading ?? null}
      description={contentfulOfferPage?.banner?.description ?? null}
    />
  </Layout>
);

export default OfferPage;

export const query = graphql`
  query OfferPage {
    contentfulOfferPage {
      pageName
      banner {
        ...ContentfulPageBanner
      }
    }
  }
`;
