import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import aboutImg from "../../assets/images/about.jpg"
import reservationImg from "../../assets/images/reservation.jpg"
import Button from "../button/button"
import styles from "./about.module.scss"

const About = () => {
  const query = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      reservation: file(relativePath: { eq: "reservation.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <div className={styles.About}>
        <div className={styles.Content}>
          <h2>Nosotros</h2>
          <p>
            Kinfolk put a bird on it twee, chambray master cleanse whatever
            franzen pour-over glossier.
          </p>
          <Button>Ver más</Button>
        </div>

        <Image
          className={styles.Image}
          alt="Nosotros"
          fluid={query.about.childImageSharp.fluid}
        />
      </div>

      <div className={`${styles.About} ${styles.AboutMirror}`}>
        <div className={styles.Content}>
          <h2>Reservaciones</h2>
          <p>
            Kinfolk put a bird on it twee, chambray master cleanse whatever
            franzen pour-over glossier.
          </p>
          <Button>Realizar Reservación</Button>
        </div>

        <Image
          className={styles.Image}
          alt="Nosotros"
          fluid={query.reservation.childImageSharp.fluid}
        />
      </div>
    </React.Fragment>
  )
}

export default About
