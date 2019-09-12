import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = ({ data: { startrekImage } }) => {
  return (
    <Layout>
      <SEO title="Page three" />
      <Img fluid={{ ...startrekImage.childImageSharp.fluid }} />
      <div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default ThirdPage

export const pageQuery = graphql`
  query {
    startrekImage: file(relativePath: { eq: "star-trek.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
