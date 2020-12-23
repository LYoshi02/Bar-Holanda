import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FiChevronsDown } from "react-icons/fi"
import Image from "gatsby-image"

import Button from "../button/button"
import styles from "./header.module.scss"

const Header = () => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <header className={styles.Header}>
      <div className={styles.Background}></div>
      <Image
        fluid={query.file.childImageSharp.fluid}
        alt="Bar Image"
        className={styles.BackgroundMobile}
        style={{ position: "absolute" }}
      />

      <div className={styles.Content}>
        <h1>Bar Holanda</h1>
        <div className={styles.Description}>
          <p>
            Neutra XOXO freegan, pork belly pop-up fingerstache brooklyn godard
            ennui mlkshk.
          </p>
        </div>
        <Button clicked={() => scrollTo("#text")}>Conocer Más</Button>
        <FiChevronsDown />
      </div>
    </header>
  )
}

export default Header
