import { graphql } from 'gatsby';

export const query = graphql`
  fragment HeroBanner on ContentfulHeroBanner {
    heading
    description {
      raw
    }
    image {
      ...Image
    }
    firstButton {
      ...ButtonLink
    }
    secondButton {
      ...ButtonLink
    }
  }

  fragment CarRentList on ContentfulCarRentList {
    heading
    carList {
      ...CarCard
    }
  }

  fragment CarCard on ContentfulCarCard {
    image {
      ...Image
    }
    id
    gear
    fuel
    engine
    name
    price
    seats
    year(formatString: "YYYY")
    gallery {
      ...Image
    }
  }

  fragment Faq on ContentfulFaq {
    heading
    list {
      ...Accordion
    }
    image {
      ...Image
    }
  }

  fragment Accordion on ContentfulAccordion {
    header
    body {
      raw
    }
  }

  fragment ButtonLink on ContentfulButtonLink {
    label
    ariaLabel
    link {
      contentfulinternal {
        ... on ContentfulFaqPage {
          id
          pageName
          slug
        }
        ... on ContentfulOfferPage {
          id
          pageName
          slug
        }
      }
    }
  }
`;
