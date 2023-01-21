import { graphql } from 'gatsby';

export const query = graphql`
  fragment ImageFragment on ContentfulImageStructure {
    image {
      gatsbyImageData
      svg {
        content
      }
      file {
        contentType
      }
    }
    alt
  }
`;
