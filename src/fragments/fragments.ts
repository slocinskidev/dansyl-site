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
  }
`;
