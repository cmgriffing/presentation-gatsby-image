import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FifthPage = ({
  data: {
    ectoTriangleImage: {
      childImageSharp: { fluid: triangleFluid, sqip: triangleSqip },
    },
    ectoRectangleImage: {
      childImageSharp: { sqip: rectangleSqip },
    },
    ectoRotatedRectangleImage: {
      childImageSharp: { sqip: rotatedRectangleSqip },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Page three" />
      <Img
        fluid={{
          ...triangleFluid,
          base64: triangleSqip.dataURI,
        }}
      />
      <Img
        fluid={{
          aspectRatio: triangleFluid.aspectRatio,
          sizes: triangleFluid.sizes,
          base64: triangleSqip.dataURI,
        }}
      />
      <Img
        fluid={{
          aspectRatio: triangleFluid.aspectRatio,
          sizes: triangleFluid.sizes,
          base64: rectangleSqip.dataURI,
        }}
      />
      <Img
        fluid={{
          aspectRatio: triangleFluid.aspectRatio,
          sizes: triangleFluid.sizes,
          base64: rotatedRectangleSqip.dataURI,
        }}
      />
      <div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default FifthPage

export const pageQuery = graphql`
  query {
    ectoTriangleImage: file(relativePath: { eq: "ecto1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
        sqip(numberOfPrimitives: 100, blur: 0, mode: 1) {
          dataURI
        }
      }
    }
    ectoRectangleImage: file(relativePath: { eq: "ecto1.jpg" }) {
      childImageSharp {
        sqip(numberOfPrimitives: 100, blur: 0, mode: 2) {
          dataURI
        }
      }
    }
    ectoRotatedRectangleImage: file(relativePath: { eq: "ecto1.jpg" }) {
      childImageSharp {
        sqip(numberOfPrimitives: 100, blur: 0, mode: 5) {
          dataURI
        }
      }
    }
  }
`
