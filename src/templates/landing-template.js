import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const LandingTemplate = ({data}) => {
  const doc = data.datoCmsLanding

  return (
    <Layout>
      <SEO title={doc.teaser}  />
      <Hero teaser={doc.teaser}  headline={doc.headline}/>
    </Layout>
  )
}

export default LandingTemplate

export const query = graphql`
query($slug: String!) {
    datoCmsLanding(slug: {eq: $slug}) {
        teaser
        headline
    }
}
`