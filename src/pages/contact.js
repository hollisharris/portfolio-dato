import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const Contact = ({data}) => {
  const doc = data.datoCmsContact

  return (
    <Layout className="contact">
      <SEO title="Contact" />
      <Hero teaser={doc.teaser}  />
      <div className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-9">
              <a className="text-lg" href={`mailto:${doc.email}`}>{doc.email}</a>
              <p className="text-light">{doc.emailDescription}</p>

              <a className="text-lg" href={`tel:${doc.phone}`}>{doc.phone}</a>
              <p className="text-light">{doc.phoneDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export const query = graphql`
{
  datoCmsContact {
    teaser
    phoneDescription
    phone
    email
    emailDescription
  }
}
`