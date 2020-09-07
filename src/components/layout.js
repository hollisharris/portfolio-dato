/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import 'normalize.css/normalize.css'
import 'flexboxgrid/dist/flexboxgrid.min.css'
import '../styles/global.scss'

const Layout = ({ children, className }) => {

  return (
    <>
      <Header />
      <div className={`${className}`}>
        <main>{children}</main>
        <footer className="text-light">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                © {new Date().getFullYear()}, Hollis Harris
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
