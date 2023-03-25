import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { Typography } from '@/components/commons';
import { Layout } from '@/components/layouts';

const OfferPage = ({
  data: { contentfulOfferPage },
}: PageProps<Queries.OfferPageQuery>) => (
  <Layout>
    <Typography as='h1'>{contentfulOfferPage?.pageName}</Typography>
  </Layout>
);

export default OfferPage;

export const query = graphql`
  query OfferPage {
    contentfulOfferPage {
      pageName
    }
  }
`;
