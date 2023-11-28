import { graphql, HeadProps, PageProps } from 'gatsby';
import React from 'react';

import { CarRentList, PageBanner } from '@/components/commons';
import { Seo } from '@/components/commons/seo';
import { Layout } from '@/components/layouts';

const CarRentPage = ({
  data: { contentfulCarRentPage },
}: PageProps<Queries.CarRentPageQuery>) => (
  <Layout>
    <PageBanner
      heading={contentfulCarRentPage?.banner?.heading ?? null}
      description={contentfulCarRentPage?.banner?.description ?? null}
    />

    <CarRentList
      {...{
        heading: contentfulCarRentPage?.carRentList?.heading ?? null,
        carList: contentfulCarRentPage?.carRentList?.carList ?? null,
        carNameLabel: contentfulCarRentPage?.carRentList?.carNameLabel ?? null,
        engineLabel: contentfulCarRentPage?.carRentList?.engineLabel ?? null,
        fuelLabel: contentfulCarRentPage?.carRentList?.fuelLabel ?? null,
        gearLabel: contentfulCarRentPage?.carRentList?.gearLabel ?? null,
        priceLabel: contentfulCarRentPage?.carRentList?.priceLabel ?? null,
        seatsLabel: contentfulCarRentPage?.carRentList?.seatsLabel ?? null,
        yearLabel: contentfulCarRentPage?.carRentList?.yearLabel ?? null,
        modal: contentfulCarRentPage?.carRentList?.modal ?? null,
      }}
    />
  </Layout>
);

export default CarRentPage;

export const query = graphql`
  query CarRentPage {
    contentfulCarRentPage {
      pageName
      banner {
        ...ContentfulPageBanner
      }
      carRentList {
        ...CarRentList
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.CarRentPageQuery>) => (
  <Seo title={data.contentfulCarRentPage?.pageName ?? undefined} />
);
