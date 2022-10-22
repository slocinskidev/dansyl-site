import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { logger } from '@/lib';

const HomePage = ({ data }: PageProps<Queries.HomePageQuery>) => {
  logger({ data }, '{contentfulHomePage.slug}.tsx line 6');

  return <div className='text-3xl font-thin'>{data.contentfulHomePage?.pageName}</div>;
};

export default HomePage;

export const query = graphql`
  query HomePage {
    contentfulHomePage {
      pageName
    }
  }
`;
