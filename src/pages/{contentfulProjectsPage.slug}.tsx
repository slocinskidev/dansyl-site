import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { ContentContainer, PageBanner } from '@/components/commons';
import { RecentProjectCard } from '@/components/home/recent-project-card';
import { Layout } from '@/components/layouts';

const ProjectsPage = ({
  data: { contentfulProjectsPage },
}: PageProps<Queries.ProjectsPageQuery>) => (
  <Layout>
    <PageBanner
      heading={contentfulProjectsPage?.banner?.heading ?? null}
      description={contentfulProjectsPage?.banner?.description ?? null}
    />

    <ContentContainer>
      {contentfulProjectsPage?.projectsList?.length ? (
        <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {contentfulProjectsPage.projectsList.map((project) =>
            project ? (
              <li key={project?.slug}>
                <RecentProjectCard {...project} />
              </li>
            ) : null
          )}
        </ul>
      ) : null}
    </ContentContainer>
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
      projectsList {
        ...ContentfulProjectDetailsPage
      }
    }
  }
`;
