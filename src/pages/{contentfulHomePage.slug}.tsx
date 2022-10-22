import React from 'react';
import { graphql, PageProps } from 'gatsby';

const HomePage = ({ data }: PageProps<Queries.HomePageQuery>) => {
  console.log(data);

  return <div>{data.contentfulHomePage?.pageName}</div>;
};

export default HomePage;

export const query = graphql`
  query HomePage {
    contentfulHomePage {
      pageName
    }
  }
`;
