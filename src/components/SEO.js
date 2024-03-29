/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title }) => {
   const { site } = useStaticQuery(
      graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
   )

   const metaDescription = description || site.siteMetadata.description
   const defaultTitle = site.siteMetadata?.title

   return (
      <Helmet
         htmlAttributes={{
            lang,
         }}
         title={defaultTitle}
         titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
         meta={[
            {
               name: `description`,
               content: metaDescription,
            },
            {
               property: `og:title`,
               content: title,
            },
            {
               property: `og:description`,
               content: metaDescription,
            },
            {
               property: `og:type`,
               content: `website`,
            },
            {
               name: `twitter:card`,
               content: `summary`,
            },
            {
               name: `twitter:creator`,
               content: site.siteMetadata?.author || ``,
            },
            {
               name: `twitter:title`,
               content: title,
            },
            {
               name: `twitter:description`,
               content: metaDescription,
            },
         ].concat(meta)}
      >
         {/* Global site tag (gtag.js) - Google Analytics  */}
<script async src={`https://www.googletagmanager.com/gtag/js?id=G-35V17C35SE`}></script>
<script>
   {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-35V17C35SE');
  `}
</script>
      </Helmet>
   )
}

SEO.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
}

// SEO.propTypes = {
//    description: PropTypes.string,
//    lang: PropTypes.string,
//    meta: PropTypes.arrayOf(PropTypes.object),
//    title: PropTypes.string.isRequired,
// }

export default SEO
