module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hollis-harris-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `00fd6d618a0c329d8f7e028f757cc0`,
        environment: `main`,
        previewMode: false,
        disableLiveReload: false,
        localeFallbacks: {
          it: ['en'],
        }
      }
    }
  ],
}
