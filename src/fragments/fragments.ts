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

  fragment ContentfulCarRentModal on ContentfulCarRentModal {
    callUsLabel
    choosenCarLabel
    closeButtonInfo
    description {
      description
    }
  }

  fragment CarRentList on ContentfulCarRentList {
    heading
    carList {
      ...CarCard
    }
    carNameLabel
    engineLabel
    fuelLabel
    gearLabel
    priceLabel
    seatsLabel
    yearLabel
    modal {
      ...ContentfulCarRentModal
    }
  }

  fragment CarCard on ContentfulCarRentCard {
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
        ... on ContentfulAboutUsPage {
          id
          pageName
          slug
        }
      }
    }
  }

  fragment WhyUs on ContentfulWhyUs {
    heading
    more {
      ...ButtonLink
    }
    list {
      ...WhyUsCard
    }
  }

  fragment WhyUsCard on ContentfulWhyUsCard {
    heading
    icon
    id
    description {
      description
    }
  }

  fragment ContentfulRecentProjects on ContentfulSingleProjectPage {
    projectName
    gallery {
      ...Image
    }
    slug
  }

  fragment ContentfulPageBanner on ContentfulPageBanner {
    heading
    description {
      raw
    }
  }
`;
