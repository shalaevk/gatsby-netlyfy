/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

{/* <Helmet>
  <title></title>
  <meta name="description" content="" />
  <meta name="keywords" content="Mazda, auto, coupe, car" />
  <meta name="robots" content="index, follow" />
</Helmet> */}


module.exports = {
  pathPrefix: "/Gatsbys",
  siteMetadata: {
    title: 'Mazda vision',
    description: 'Global Website of Mazda Motor Corporation - brand stories, design and technology as well as company profile, IR and CSR.',
    image: '/static/logo.svg',

  },
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src`,
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
    `gatsby-plugin-netlify`,
  { resolve: `gatsby-transformer-remark` },
  {
    resolve: `gatsby-source-wordpress`, options: {
      url: 'https://kirill.s-tet.top/graphql',
    }
  },
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      // Available options and their defaults:
      base64Width: 20,
      forceBase64Format: `png`, // valid formats: png,jpg,webp
      useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
      stripMetadata: true,
      defaultQuality: 50,
      failOnError: true,
      toFormatBase64: true,
    },
  },
  {
    resolve: `gatsby-transformer-sharp`,
    options: {
      // The option defaults to true
      checkSupportedExtensions: false,
    },
  },
    `gatsby-plugin-react-helmet`,
  ]
};
