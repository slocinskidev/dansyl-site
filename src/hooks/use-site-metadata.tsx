import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery<{
    site: {
      siteMetadata: Queries.SiteSiteMetadata;
    };
  }>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
