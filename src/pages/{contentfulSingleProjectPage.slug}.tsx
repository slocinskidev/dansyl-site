import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { Typography } from '@/components/commons';
import { Layout } from '@/components/layouts';

const SingleProjectPage = ({
  data: { contentfulSingleProjectPage },
}: PageProps<Queries.SingleProjectPageQuery>) => (
  <Layout>
    <Typography as='h1'>{contentfulSingleProjectPage?.projectName}</Typography>
  </Layout>
);

export default SingleProjectPage;

export const query = graphql`
  query SingleProjectPage($projectName: String) {
    contentfulSingleProjectPage(projectName: { eq: $projectName }) {
      projectName
    }
  }
`;
