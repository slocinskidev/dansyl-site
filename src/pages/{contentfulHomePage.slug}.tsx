import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { CarRentList, Faq, HeroBanner } from '@/components/home';
import { Layout } from '@/components/layouts';
import { logger } from '@/lib';

const HomePage = ({ data: { contentfulHomePage } }: PageProps<Queries.HomePageQuery>) => {
  logger({ contentfulHomePage }, '{contentfulHomePage.slug}.tsx line 6');

  return (
    <Layout>
      <HeroBanner
        {...{
          heading: contentfulHomePage?.heroBanner?.heading ?? null,
          description: contentfulHomePage?.heroBanner?.description ?? null,
          image: contentfulHomePage?.heroBanner?.image ?? null,
        }}
      />
      <CarRentList
        {...{
          heading: contentfulHomePage?.carRentList?.heading ?? null,
          carList: contentfulHomePage?.carRentList?.carList ?? null,
        }}
      />
      <Faq />
    </Layout>
  );
};

export default HomePage;

export const query = graphql`
  query HomePage {
    contentfulHomePage {
      heroBanner {
        ...HeroBanner
      }
      carRentList {
        ...CarRentList
      }
    }
  }
`;
