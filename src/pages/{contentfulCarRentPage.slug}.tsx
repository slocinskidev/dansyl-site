import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { Typography } from '@/components/commons';
import { Layout } from '@/components/layouts';

const CarRentPage = ({
  data: { contentfulCarRentPage },
}: PageProps<Queries.CarRentPageQuery>) => (
  <Layout>
    <Typography as='h1'>{contentfulCarRentPage?.pageName}</Typography>
  </Layout>
);

export default CarRentPage;

export const query = graphql`
  query CarRentPage {
    contentfulCarRentPage {
      pageName
    }
  }
`;
