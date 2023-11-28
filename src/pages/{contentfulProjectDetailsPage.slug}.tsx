import { graphql, HeadProps, PageProps } from 'gatsby';
import React from 'react';

import { Seo } from '@/components/commons/seo';
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
  query ProjectDetailsPage($slug: String) {
    contentfulProjectsPage {
      pageName
    }
    contentfulProjectDetailsPage(slug: { eq: $slug }) {
      projectName
      realizationDate
      projectContent {
        ...ContentfulProjectContent
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.ProjectDetailsPageQuery>) => {
  const pageNameWithProjectName = `${data.contentfulProjectsPage?.pageName} - ${data.contentfulProjectDetailsPage?.projectName}`;

  return <Seo title={pageNameWithProjectName ?? undefined} />;
};
