import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { Typography } from '@/components/commons';
import { Layout } from '@/components/layouts';

const ProjectPage = ({
  data: { contentfulProjectPage },
}: PageProps<Queries.ProjectPageQuery>) => (
  <Layout>
    <Typography as='h1'>{contentfulProjectPage?.pageName}</Typography>
  </Layout>
);

export default ProjectPage;

export const query = graphql`
  query ProjectPage {
    contentfulProjectPage {
      pageName
    }
  }
`;
