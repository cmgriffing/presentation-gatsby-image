import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = ({ data: { partidgeFamilyBotImage } }) => {
  console.log({ ...partidgeFamilyBotImage.childImageSharp.fluid })
  return (
    <Layout>
      <SEO title="Page three" />
      <Img
        fluid={{
          ...partidgeFamilyBotImage.childImageSharp.fluid,
          base64: partidgeFamilyBotImage.childImageSharp.sqip.dataURI,
        }}
      />
      <Img
        fluid={{
          aspectRatio: partidgeFamilyBotImage.childImageSharp.fluid.aspectRatio,
          sizes: partidgeFamilyBotImage.childImageSharp.fluid.sizes,
          base64: partidgeFamilyBotImage.childImageSharp.sqip.dataURI,
        }}
      />
      <div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default FourthPage

export const pageQuery = graphql`
  query {
    partidgeFamilyBotImage: file(
      relativePath: { eq: "partridgefamilybot.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
        sqip(numberOfPrimitives: 100, blur: 0) {
          dataURI
        }
      }
    }
  }
`
