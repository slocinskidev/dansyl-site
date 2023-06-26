import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { PageBanner } from '@/components/commons';
import { Layout } from '@/components/layouts';

const ProjectsPage = ({
  data: { contentfulProjectsPage },
}: PageProps<Queries.ProjectsPageQuery>) => (
  <Layout>
    <PageBanner
      heading={contentfulProjectsPage?.banner?.heading ?? null}
      description={contentfulProjectsPage?.banner?.description ?? null}
    />
  </Layout>
);

export default ProjectsPage;

export const query = graphql`
  query ProjectsPage {
    contentfulProjectsPage {
      pageName
      banner {
        ...ContentfulPageBanner
      }
    }
  }
`;
