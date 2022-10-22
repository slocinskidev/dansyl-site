import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { logger } from '@/lib';
import Mail from '@/assets/icons/paint-spray.svg';
import Xd from '@/assets/icons/Mail.svg';

const HomePage = ({ data }: PageProps<Queries.HomePageQuery>) => {
  logger({ data }, '{contentfulHomePage.slug}.tsx line 6');

  return (
    <div className='text-3xl font-thin'>
      {data.contentfulHomePage?.pageName}
      <div className='text-primary-500'>
        <Mail />
        <Xd />
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
