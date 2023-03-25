import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { Typography } from '@/components/commons';
import { Layout } from '@/components/layouts';

const FaqPage = ({
  data: { contentfulFaqPage },
}: PageProps<Queries.FaqPageQuery>) => (
  <Layout>
    <Typography as='h1'>{contentfulFaqPage?.pageName}</Typography>
  </Layout>
);

export default FaqPage;

export const query = graphql`
  query FaqPage {
    contentfulFaqPage {
      pageName
    }
  }
`;
