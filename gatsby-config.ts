import { config } from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata: GatsbyConfig['siteMetadata'] = {
  siteUrl: 'https://dansyl.pl',
  title: 'Dansyl',
  description:
    'Jesteśmy warsztatem posiadającym ogromny staż w swoim fachu, podejmujemy się każdej pracy i wykonujemy ją sumiennie, każde auto, które do nas trafia jest traktowane jak nasze własne. Podczas wykonywanych usług zabezpieczamy środek auta przed jakimikolwiek zabrudzeniami, dodatkowo przed oddaniem pojazdu sprzątamy go dokładnie wewnątrz i zewnątrz jesteśmy zaufanym warsztatem, który współpracuje z dużą ilością ubezpieczalni, dla dwóch z nich jesteśmy zakładem partnerskim w tym rejonie. Staramy się, aby każdy klient był usatysfakcjonowany z naszej pracy.',
  image: './src/assets/images/logo-secondary.png',
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
        include: /icons/,
      },
    },
  },
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/assets/images/logo-secondary.png',
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
