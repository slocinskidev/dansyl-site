import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { PageBanner } from '@/components/commons';
import { Layout } from '@/components/layouts';

const ProjectPage = ({
  data: { contentfulProjectPage },
}: PageProps<Queries.ProjectPageQuery>) => (
  <Layout>
    <PageBanner
      heading={contentfulProjectPage?.banner?.heading ?? null}
      description={contentfulProjectPage?.banner?.description ?? null}
    />
  </Layout>
);

export default ProjectPage;

export const query = graphql`
  query ProjectPage {
    contentfulProjectPage {
      pageName
      banner {
        ...ContentfulPageBanner
      }
    }
  }
`;
