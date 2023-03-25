import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { Typography } from '@/components/commons';
import { Layout } from '@/components/layouts';

const ContactPage = ({
  data: { contentfulContactPage },
}: PageProps<Queries.ContactPageQuery>) => (
  <Layout>
    <Typography as='h1'>{contentfulContactPage?.pageName}</Typography>
  </Layout>
);

export default ContactPage;

export const query = graphql`
  query ContactPage {
    contentfulContactPage {
      pageName
    }
  }
`;
