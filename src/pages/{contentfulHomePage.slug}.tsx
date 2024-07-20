import { graphql, HeadProps, PageProps } from 'gatsby';
import React from 'react';

import { CarRentList } from '@/components/commons';
import { Seo } from '@/components/commons/seo';
import { Faq, HeroBanner, RecentProjects } from '@/components/home';
import WhyUs from '@/components/home/why-us';
import { Layout } from '@/components/layouts';

const HomePage = ({
  data: { contentfulHomePage },
}: PageProps<Queries.HomePageQuery>) => (
  <Layout>
    <HeroBanner
      {...{
        heading: contentfulHomePage?.heroHeading ?? null,
        description: contentfulHomePage?.heroDescription ?? null,
        image: contentfulHomePage?.heroImage ?? null,
        firstButton: contentfulHomePage?.heroFirstButton ?? null,
        secondButton: contentfulHomePage?.heroSecondButton ?? null,
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
        isSlider: true,
      }}
    />

    <RecentProjects
      {...{
        heading: contentfulHomePage?.chosenRealizations?.heading ?? null,
        button: contentfulHomePage?.chosenRealizations?.button ?? null,
        realizations:
          contentfulHomePage?.chosenRealizations?.realizations ?? [],
      }}
    />

    <Faq
      {...{
        heading: contentfulHomePage?.faq?.heading ?? null,
        list: contentfulHomePage?.faq?.list ?? null,
        image: contentfulHomePage?.faq?.image ?? null,
      }}
    />
  </Layout>
);

export default HomePage;

export const query = graphql`
  query HomePage {
    contentfulHomePage {
      pageName
      heroHeading
      heroDescription {
        raw
      }
      heroImage {
        ...Image
      }
      heroFirstButton {
        ...ButtonLink
      }
      heroSecondButton {
        ...ButtonLink
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
      chosenRealizations {
        ...ContentfulChosenRealizations
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.HomePageQuery>) => (
  <Seo title={data.contentfulHomePage?.pageName ?? undefined} />
);
