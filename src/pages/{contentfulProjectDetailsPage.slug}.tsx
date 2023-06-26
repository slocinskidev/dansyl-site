import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { Layout } from '@/components/layouts';
import { ProjectBanner } from '@/components/projects/project-banner';
import { ProjectContent } from '@/components/projects/project-content';

const ProjectDetailsPage = ({
  data: { contentfulProjectDetailsPage },
}: PageProps<Queries.ProjectDetailsPageQuery>) => (
  <Layout>
    <ProjectBanner
      projectName={contentfulProjectDetailsPage?.projectName}
      realizationDate={contentfulProjectDetailsPage?.realizationDate}
    />
    <ProjectContent
      title={contentfulProjectDetailsPage?.projectContent?.title ?? null}
      description={
        contentfulProjectDetailsPage?.projectContent?.description ?? null
      }
      gallery={contentfulProjectDetailsPage?.projectContent?.gallery ?? null}
    />
  </Layout>
);

export default ProjectDetailsPage;

export const query = graphql`
  query ProjectDetailsPage($projectName: String) {
    contentfulProjectDetailsPage(projectName: { eq: $projectName }) {
      projectName
      realizationDate
      projectContent {
        ...ContentfulProjectContent
      }
    }
  }
`;
