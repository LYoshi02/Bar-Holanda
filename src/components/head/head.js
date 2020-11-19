import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"

const Head = () => {
  const query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  return (
    <Helmet htmlAttributes={{ lang: "es" }}>
      <title>{query.site.siteMetadata.title}</title>
      <meta name="description" content={query.site.siteMetadata.description} />
    </Helmet>
  )
}

export default Head
