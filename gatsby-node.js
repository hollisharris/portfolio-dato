const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const workPageEntry = path.resolve('src/templates/work-template.js')
    const landingPageEntry = path.resolve('src/templates/landing-template.js')

    resolve(
      graphql(
        `{
            workPages: allDatoCmsWork {
              edges {
                node {
                  slug
                }
              }
            }
            allDatoCmsLanding(filter: {slug: {nin: ["home","works"]}}) {
                edges {
                  node {
                    slug
                  }
                }
            }
          }`
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const landing_pages = result.data.allDatoCmsLanding.edges
        landing_pages.forEach((entry, index) => {
          createPage({
            path: `/${entry.node.slug}`,
            component: landingPageEntry,
            context: {
                slug: entry.node.slug
            }
          })
        })
        const case_studies = result.data.workPages.edges
        case_studies.forEach((entry, index) => {
          createPage({
            path: `/works/${entry.node.slug}`,
            component: workPageEntry,
            context: {
                slug: entry.node.slug
            }
          })
        })
      })
    )
  })
}