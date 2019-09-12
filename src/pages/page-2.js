import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import cheese from "../data/cheese"

const SecondPage = ({
  data: { autobotsImage, decepticonsImage, starshipImage },
}) => {
  return (
    <Layout>
      <SEO title="Page two" />
      <Img fluid={{ ...autobotsImage.childImageSharp.fluid }} />
      <Img fixed={{ ...decepticonsImage.childImageSharp.fixed }} />
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "22px",
          lineHeight: "30px",
        }}
      >
        {cheese.paragraphs.map(paragraph => (
          <p>{paragraph}</p>
        ))}
      </div>
      <Img loading="lazy" fluid={{ ...starshipImage.childImageSharp.fluid }} />
      <div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default SecondPage

export const pageQuery = graphql`
  query {
    autobotsImage: file(relativePath: { eq: "autobots.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    decepticonsImage: file(relativePath: { eq: "decepticons.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    starshipImage: file(relativePath: { eq: "starship.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
