module.exports = {
  siteMetadata: {
    title: 'Red Apple code test',
    description:
      'This repo is just a code test.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
        name: 'data',
      },
    },
  ]
}
