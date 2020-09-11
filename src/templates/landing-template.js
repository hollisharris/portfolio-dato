import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import PageComponents from "../components/PageComponents"

const LandingTemplate = ({data}) => {
  const doc = data.datoCmsLanding

  return (
    <Layout>
      <SEO title={doc.teaser}  />
      <Hero teaser={doc.teaser}  headline={doc.headline}/>
      <PageComponents components={doc.components} />
    </Layout>
  )
}

export default LandingTemplate

export const query = graphql`
query($slug: String!) {
    datoCmsLanding(slug: {eq: $slug}) {
      headline
      teaser
      shortDescription
      components {
        ... on DatoCmsContentBlock {
          id
          splitContent
          sticky
          teaser
          content
          contentPosition
          model {
            name
          }
          media {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
            isImage
            filename
            alt
            title
          }
        }
        ... on DatoCmsGridList {
          id
          headline
          darkBackground
          listing
          model {
            name
          }
        }
        ... on DatoCmsFeaturedWork {
          id
          headline
          model {
            name
          }
          work {
            id
            shortDescription
            teaser
            slug
            thumbnail {
              fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
              }
              isImage
              filename
              alt
              title
            }
          }
        }
        ... on DatoCmsCtaBlock {
          id
          teaser
          headline
          description
          model {
            name
          }
          link {
            ... on DatoCmsContact {
              slug
            }
          }
        }
      }
    }
}
`