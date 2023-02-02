import { graphql } from 'gatsby';

export const query = graphql`
  fragment ContentfulBrand on ContentfulBrand {
    logo {
      ...Image
    }
    companyName {
      companyName
    }
    companyDescription {
      companyDescription
    }
    email
    phone
    facebook
  }
`;
