import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Fatodo`,
    description: `Landing page for Fatodo App`,
    author: `Vladimir Perfilev`,
    siteUrl: `https://fatodo.app`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-theme-material-ui',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `png`],
          placeholder: `none`,
          backgroundColor: `transparent`,
          quality: 95,
          breakpoints: [200, 340, 520, 750, 1080, 1366, 1920],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Fatodo Home`,
        short_name: `Fatodo`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `scripts`,
        path: `${__dirname}/static/scripts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: `${__dirname}/static/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`,
        languages: [`en`, `ru`],
        defaultLanguage: `en`,
        siteUrl: `https://fatodo.app`,
      },
    },
  ],
};

export default config;
