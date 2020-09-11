import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import WorksMosaic from "../components/WorksMosaic"
import PageComponents from "../components/PageComponents"

const Works = ({data}) => {
  const works = data.allDatoCmsWork
  const doc = data.datoCmsLanding
  console.log(works)

  const workList = works.edges.map(item => {
      return ({
        id: item.node.id,
        teaser: item.node.teaser,
        shortDescription: item.node.shortDescription,
        slug: item.node.slug,
        thumbnail: item.node.thumbnail,
      })
  })

  return (
    <Layout className="works">
      <SEO title="Works" />
      <Hero teaser={doc.teaser} headline={doc.headline} short={true}/>
      <WorksMosaic works={workList}/>
      <PageComponents components={doc.components} />
    </Layout>
  )
}

export default Works

export const query = graphql`
{
    allDatoCmsWork(sort: {fields: position}) {
        edges {
            node {
                teaser
                shortDescription
                id
                slug
                position
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
    }
    datoCmsLanding(slug: {eq: "works"}) {
        headline
        teaser
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