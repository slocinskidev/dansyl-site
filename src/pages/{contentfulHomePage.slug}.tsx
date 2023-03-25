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

const HomePage = ({
  data: { contentfulHomePage, allContentfulSingleProjectPage },
}: PageProps<Queries.HomePageQuery>) => (
  <Layout>
    <HeroBanner
      {...{
        heading: contentfulHomePage?.heroBanner?.heading ?? null,
        description: contentfulHomePage?.heroBanner?.description ?? null,
        image: contentfulHomePage?.heroBanner?.image ?? null,
        firstButton: contentfulHomePage?.heroBanner?.firstButton ?? null,
        secondButton: contentfulHomePage?.heroBanner?.secondButton ?? null,
      }}
    />
    <WhyUs
      {...{
        heading: contentfulHomePage?.whyUs?.heading ?? null,
        list: contentfulHomePage?.whyUs?.list ?? null,
        more: contentfulHomePage?.whyUs?.more ?? null,
      }}
    />
    <CarRentList
      {...{
        heading: contentfulHomePage?.carRentList?.heading ?? null,
        carList: contentfulHomePage?.carRentList?.carList ?? null,
        carNameLabel: contentfulHomePage?.carRentList?.carNameLabel ?? null,
        engineLabel: contentfulHomePage?.carRentList?.engineLabel ?? null,
        fuelLabel: contentfulHomePage?.carRentList?.fuelLabel ?? null,
        gearLabel: contentfulHomePage?.carRentList?.gearLabel ?? null,
        priceLabel: contentfulHomePage?.carRentList?.priceLabel ?? null,
        seatsLabel: contentfulHomePage?.carRentList?.seatsLabel ?? null,
        yearLabel: contentfulHomePage?.carRentList?.yearLabel ?? null,
        modal: contentfulHomePage?.carRentList?.modal ?? null,
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
    <RecentProjects
      {...{
        recentProjects: allContentfulSingleProjectPage.recentProjects ?? [],
      }}
    />
  </Layout>
);

export default HomePage;

export const query = graphql`
  query HomePage {
    contentfulHomePage {
      heroBanner {
        ...HeroBanner
      }
      whyUs {
        ...WhyUs
      }
      carRentList {
        ...CarRentList
      }
      faq {
        ...Faq
      }
    }
    allContentfulSingleProjectPage(
      limit: 3
      sort: { order: DESC, fields: createdAt }
    ) {
      recentProjects: nodes {
        ...ContentfulRecentProjects
      }
    }
  }
`;
