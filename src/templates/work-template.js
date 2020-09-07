import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import PageComponents from "../components/PageComponents"

const WorkTemplate = ({data}) => {
  const doc = data.datoCmsWork
  console.log(doc)

  return (
    <Layout className="work">
      <SEO title={doc.teaser} description={doc.shortDescription} />
      <Hero teaser={doc.teaser}  headline={doc.headline}/>
      <PageComponents components={doc.pageContent} />
    </Layout>
  )
}

export default WorkTemplate

export const query = graphql`
query($slug: String!) {
    datoCmsWork(slug: {eq: $slug}) {
        teaser
        headline
        pageContent {
            ... on DatoCmsGridList {
              id
              headline
              darkBackground
              listing
              model {
                name
              }
            }
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
                video {
                  mp4Url
                  thumbnailUrl
                }
              }
            }
            ... on DatoCmsMediaColumn {
              id
              model {
                name
              }
              desktop
              mobile
              media {
                fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                  ...GatsbyDatoCmsFluid
                }
                isImage
                filename
                alt
                title
                format
                video {
                  mp4Url
                  thumbnailUrl
                }
              }
            }
        }
    }
}
`