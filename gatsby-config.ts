import { config } from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata: GatsbyConfig['siteMetadata'] = {
  siteUrl: 'http://localhost/8000',
  title: 'Dansyl',
  description: '',
  image: '/favicon.png',
};

const plugins: GatsbyConfig['plugins'] = [
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      downloadLocal: false,
    },
  },
  'gatsby-plugin-image',
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /icons/, // See below to configure properly
      },
    },
  },
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/assets/images/icon.png',
    },
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/assets/images/',
    },
    __key: 'images',
  },
];

const gatsbyConfig: GatsbyConfig = {
  siteMetadata,
  plugins,
  graphqlTypegen: true,
};

export default gatsbyConfig;
