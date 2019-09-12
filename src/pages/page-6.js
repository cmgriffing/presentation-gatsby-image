import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SixthPage = ({
  data: {
    ectoEllipseImage: {
      childImageSharp: { fluid: ellipseFluid, sqip: ellipseSqip },
    },
    ectoCircleImage: {
      childImageSharp: { sqip: circleSqip },
    },
    ectoRotatedEllipseImage: {
      childImageSharp: { sqip: rotatedEllipseSqip },
    },
    ectoBezierImage: {
      childImageSharp: { sqip: bezierSqip },
    },
    ectoPolygonImage: {
      childImageSharp: { sqip: polygonSqip },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Page three" />
      <Img
        fluid={{
          ...ellipseFluid,
          base64: ellipseSqip.dataURI,
        }}
      />
      <Img
        fluid={{
          aspectRatio: ellipseFluid.aspectRatio,
          sizes: ellipseFluid.sizes,
          base64: ellipseSqip.dataURI,
        }}
      />
      <Img
        fluid={{
          aspectRatio: ellipseFluid.aspectRatio,
          sizes: ellipseFluid.sizes,
          base64: circleSqip.dataURI,
        }}
      />
      <Img
        fluid={{
          aspectRatio: ellipseFluid.aspectRatio,
          sizes: ellipseFluid.sizes,
          base64: rotatedEllipseSqip.dataURI,
        }}
      />
      <Img
        fluid={{
          aspectRatio: ellipseFluid.aspectRatio,
          sizes: ellipseFluid.sizes,
          base64: bezierSqip.dataURI,
        }}
      />
      <Img
        fluid={{
          aspectRatio: ellipseFluid.aspectRatio,
          sizes: ellipseFluid.sizes,
          base64: polygonSqip.dataURI,
        }}
      />
      <div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default SixthPage

export const pageQuery = graphql`
  query {
    ectoEllipseImage: file(relativePath: { eq: "batmobilebot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
        sqip(numberOfPrimitives: 100, blur: 0, mode: 3) {
          dataURI
        }
      }
    }
    ectoCircleImage: file(relativePath: { eq: "batmobilebot.jpg" }) {
      childImageSharp {
        sqip(numberOfPrimitives: 100, blur: 0, mode: 4) {
          dataURI
        }
      }
    }
    ectoRotatedEllipseImage: file(relativePath: { eq: "batmobilebot.jpg" }) {
      childImageSharp {
        sqip(numberOfPrimitives: 100, blur: 0, mode: 7) {
          dataURI
        }
      }
    }
    ectoBezierImage: file(relativePath: { eq: "batmobilebot.jpg" }) {
      childImageSharp {
        sqip(numberOfPrimitives: 100, blur: 0, mode: 6) {
          dataURI
        }
      }
    }
    ectoPolygonImage: file(relativePath: { eq: "batmobilebot.jpg" }) {
      childImageSharp {
        sqip(numberOfPrimitives: 100, blur: 0, mode: 8) {
          dataURI
        }
      }
    }
  }
`
