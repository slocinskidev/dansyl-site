import { graphql, HeadProps, PageProps } from 'gatsby';
import React from 'react';

import { PageBanner } from '@/components/commons';
import { Seo } from '@/components/commons/seo';
import { FaqList } from '@/components/faq/faq-list';
import { Layout } from '@/components/layouts';

const FaqPage = ({
  data: { contentfulFaqPage },
}: PageProps<Queries.FaqPageQuery>) => (
  <Layout>
    <PageBanner
      heading={contentfulFaqPage?.banner?.heading ?? null}
      description={contentfulFaqPage?.banner?.description ?? null}
    />

    <FaqList list={contentfulFaqPage?.list as Queries.AccordionFragment[]} />
  </Layout>
);

export default FaqPage;

export const query = graphql`
  query FaqPage {
    contentfulFaqPage {
      pageName
      banner {
        ...ContentfulPageBanner
      }
      list {
        ...Accordion
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.FaqPageQuery>) => (
  <Seo title={data.contentfulFaqPage?.pageName ?? undefined} />
);
