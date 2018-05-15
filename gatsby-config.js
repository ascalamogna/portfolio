module.exports = {
  siteMetadata: {
    title: 'Anna Scalamogna',
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-sass', 'gatsby-link', 'gatsby-plugin-catch-links', 'gatsby-plugin-react-helmet',
  	{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
 	{
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [] 
      }
    },
    `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            backgroundColor: 'transparent',
            maxWidth: 900,
          },
        },
      ],
    },
  },
  ]
}
