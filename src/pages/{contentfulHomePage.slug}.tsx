import { graphql, PageProps } from 'gatsby';
import React from 'react';

import Mail from '@/assets/icons/paint-spray.svg';
import { logger } from '@/lib';

const HomePage = ({ data }: PageProps<Queries.HomePageQuery>) => {
  logger({ data }, '{contentfulHomePage.slug}.tsx line 6');

  return (
    <div className='p-0 pt-2 text-3xl font-thin'>
      {data.contentfulHomePage?.pageName}
      <div className='text-primary-500'>
        <Mail />
      </div>
    </div>
  );
};

export default HomePage;

export const query = graphql`
  query HomePage {
    contentfulHomePage {
      pageName
    }
  }
`;
