import { GatsbyNode } from 'gatsby';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  actions.createTypes(`


    type ContentfulHomePage {
        pageName: String!
      }
  `);
};
