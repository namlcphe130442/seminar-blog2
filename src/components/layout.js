import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Header from "./header"
import Hero from "./hero"
import logo from '../images/fabbi.svg'

const Layout = ({ children }) => {
  const colors = [
    "#FF6F61",
    "#6B5B95",
    "#88B04B",
    "#F7CAC9",
    "#92A8D1",
    "#955251",
    "#B565A7",
    "#009B77",
    "#DD4124",
    "#D65076",
    "#45B8AC",
    "#EFC050",
    "#5B5EA6",
    "#9B2335",
    "#DFCFBE",
    "#55B4B0",
    "#E15D44",
    "#7FCDCD",
    "#BC243C",
    "#C3447A",
    "#98B4D4",
    "#FF0000",
  ]

  const randomColor = (colors) =>{
    return colors[ Math.floor(Math.random() * colors.length)]
  }

  const randomPosition = () => {
    const screenSize = window.screen;
    const x = Math.floor(Math.random() * screenSize.width);
    const y = Math.floor(Math.random() * screenSize.height);
    return [x,y]
  }

  const displayImage = (body) => {
    const divElement = document.createElement('div');
    const position = randomPosition();
    divElement.style.position = 'fixed';
    divElement.style.left = `${position[0]}px`;
    divElement.style.top = `${position[1]}px`;
    divElement.innerHTML = '&#10084;';
    divElement.style.color = randomColor(colors);
    divElement.classList.add('tim-bay');
    body.appendChild(divElement);
    setTimeout(() => {
      divElement.remove();
    }, 1400);
  }

  const body = document.querySelector("body");
  setInterval(function() {
    displayImage(body);
  },500)

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
