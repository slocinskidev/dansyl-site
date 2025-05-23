import { graphql, HeadProps, PageProps } from 'gatsby';
import React from 'react';

import { PageBanner } from '@/components/commons';
import { Seo } from '@/components/commons/seo';
import { ContactSection } from '@/components/contact/contact-section';
import { Layout } from '@/components/layouts';

const ContactPage = ({
  data: { contentfulContactPage, contentfulBrand },
}: PageProps<Queries.ContactPageQuery>) => (
  <Layout>
    <PageBanner
      heading={contentfulContactPage?.banner?.heading ?? null}
      description={contentfulContactPage?.banner?.description ?? null}
    />
    <ContactSection
      introHeading={contentfulContactPage?.introHeading ?? null}
      introDescription={contentfulContactPage?.introDescription ?? null}
      mapHeading={contentfulContactPage?.mapHeading ?? null}
      mapDescription={contentfulContactPage?.mapDescription ?? null}
      emailLabel={contentfulBrand?.emailLabel ?? null}
      email={contentfulBrand?.email ?? null}
      openHoursLabel={contentfulBrand?.openHoursLabel ?? null}
      openHours={contentfulBrand?.openHours ?? null}
      phoneLabel={contentfulBrand?.phoneLabel ?? null}
      phone={contentfulBrand?.phone ?? null}
      addressLabel={contentfulBrand?.addressLabel ?? null}
      addressStreet={contentfulBrand?.addressStreet ?? null}
      addressPostalCode={contentfulBrand?.addressPostalCode ?? null}
      addressCity={contentfulBrand?.addressCity ?? null}
    />
  </Layout>
);

export default ContactPage;

export const query = graphql`
  query ContactPage {
    contentfulContactPage {
      pageName
      banner {
        ...ContentfulPageBanner
      }
      introHeading
      introDescription {
        raw
      }
      mapHeading
      mapDescription {
        raw
      }
    }
    contentfulBrand {
      emailLabel
      email
      openHoursLabel
      openHours
      phoneLabel
      phone
      addressLabel
      addressStreet
      addressPostalCode
      addressCity
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.ContactPageQuery>) => (
  <Seo title={data.contentfulContactPage?.pageName ?? undefined} />
);
