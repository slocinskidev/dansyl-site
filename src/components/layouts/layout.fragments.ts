import { graphql } from 'gatsby';

export const query = graphql`
  fragment Brand on ContentfulBrand {
    logo {
      ...Image
    }
    companyName {
      companyName
    }
    companyDescription {
      companyDescription
    }
    emailLabel
    email
    phoneLabel
    phone
    facebookLabel
    facebook
    openHours
  }

  fragment Navigation on ContentfulNavigation {
    list {
      ... on ContentfulAboutUsPage {
        id
        slug
        pageName
      }
      ... on ContentfulHomePage {
        id
        slug
        pageName
      }
      ... on ContentfulCarRentPage {
        id
        slug
        pageName
      }
      ... on ContentfulContactPage {
        id
        slug
        pageName
      }
      ... on ContentfulFaqPage {
        id
        slug
        pageName
      }
      ... on ContentfulOfferPage {
        id
        slug
        pageName
      }
      ... on ContentfulProjectsPage {
        id
        slug
        pageName
      }
    }
    highlightItem {
      id
      slug
      pageName
    }
  }
`;
