import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { allDatoCmsSite } = useStaticQuery(query)
  const doc = allDatoCmsSite.edges[0].node;

  const site = {
    defaultTitle: doc.globalSeo.fallbackSeo.title,
    titleTemplate: `%s ${doc.globalSeo.titleSuffix}`,
    defaultDescription: doc.globalSeo.fallbackSeo.description,
    siteUrl: 'https://hollisdesign.us',
    twitterUsername: doc.globalSeo.twitterAccount
  }

  const seo = {
    title: title || site.defaultTitle,
    description: description || site.defaultDescription,
    image: `${site.siteUrl}${image || null}`,
    url: `${site.siteUrl}${pathname}`,
  }
  
  return (
    <Helmet title={seo.title} titleTemplate={site.titleTemplate}>
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {site.twitterUsername && (
        <meta name="twitter:creator" content={site.twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}
export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    allDatoCmsSite {
      edges {
        node {
          globalSeo {
            twitterAccount
            titleSuffix
            siteName
            fallbackSeo {
              description
              title
              twitterCard
            }
          }
        }
      }
    }
  }
`