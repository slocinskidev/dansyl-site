import { graphql } from 'gatsby';

export const query = graphql`
  fragment ImageFragment on ContentfulAsset {
    gatsbyImageData
    description
  }
`;
