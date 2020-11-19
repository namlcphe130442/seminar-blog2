import React from "react"
import "./hero.css"

const Hero = ({ title }) => {
  return (
    <section>
      <div>
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default Hero
