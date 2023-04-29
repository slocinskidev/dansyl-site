import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { PageBanner } from '@/components/commons';
import { Layout } from '@/components/layouts';

const ContactPage = ({
  data: { contentfulContactPage },
}: PageProps<Queries.ContactPageQuery>) => (
  <Layout>
    <PageBanner
      heading={contentfulContactPage?.banner?.heading ?? null}
      description={contentfulContactPage?.banner?.description ?? null}
    />
  </Layout>
);

export default ContactPage;

export const query = graphql`
  query ContactPage {
    contentfulContactPage {
      pageName
      banner {
        ...ContentfulPageBanner
      }
    }
  }
`;
