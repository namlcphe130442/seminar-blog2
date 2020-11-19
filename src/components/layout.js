import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Header from "./header"
import Hero from "./hero"
import logo from '../images/fabbi.svg'

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <header>
        <Header />
        <Hero title={data.site.siteMetadata?.title || `Title`} />
      </header>
      <main>{children}</main>
      <footer>
        <img src={logo} alt={'logo'}/>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
