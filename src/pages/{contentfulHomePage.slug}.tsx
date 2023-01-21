import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { Layout } from '@/components/layouts';
import { logger } from '@/lib';

const HomePage = ({ data }: PageProps<Queries.HomePageQuery>) => {
  logger({ data }, '{contentfulHomePage.slug}.tsx line 6');

  return <Layout>{data.contentfulHomePage?.pageName}</Layout>;
};

export default HomePage;

export const query = graphql`
  query HomePage {
    contentfulHomePage {
      pageName
    }
  }
`;
