import { graphql } from 'gatsby';

export const query = graphql`
  fragment Image on ContentfulAsset {
    gatsbyImageData
    description
  }
`;
