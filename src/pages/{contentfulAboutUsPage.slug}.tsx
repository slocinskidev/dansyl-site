import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { Typography } from '@/components/commons';
import { Layout } from '@/components/layouts';

const AboutUsPage = ({
  data: { contentfulAboutUsPage },
}: PageProps<Queries.AboutUsPageQuery>) => (
  <Layout>
    <Typography as='h1'>{contentfulAboutUsPage?.pageName}</Typography>
  </Layout>
);

export default AboutUsPage;

export const query = graphql`
  query AboutUsPage {
    contentfulAboutUsPage {
      pageName
    }
  }
`;
