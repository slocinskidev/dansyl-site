import { graphql, PageProps } from 'gatsby';
import React from 'react';

import {
  CarRentList,
  Faq,
  HeroBanner,
  RecentProjects,
} from '@/components/home';
import OpinionList from '@/components/home/opinion-list';
import WhyUs from '@/components/home/why-us';
import { Layout } from '@/components/layouts';
import { logger } from '@/lib';

const HomePage = ({
  data: { contentfulHomePage },
}: PageProps<Queries.HomePageQuery>) => {
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
      <WhyUs />
      <CarRentList
        {...{
          heading: contentfulHomePage?.carRentList?.heading ?? null,
          carList: contentfulHomePage?.carRentList?.carList ?? null,
        }}
      />
      <OpinionList />
      <Faq
        {...{
          heading: contentfulHomePage?.faq?.heading ?? null,
          list: contentfulHomePage?.faq?.list ?? null,
          image: contentfulHomePage?.faq?.image ?? null,
        }}
      />
      <RecentProjects />
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
      faq {
        ...Faq
      }
    }
  }
`;
