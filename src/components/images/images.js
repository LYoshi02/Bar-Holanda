import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { imagesData } from "../../constants/images-data"

import styles from "./images.module.scss"

const Images = () => {
  const query = useStaticQuery(graphql`
    query {
      allImageSharp(
        filter: {
          fluid: {
            originalName: {
              in: [
                "image1.jpg"
                "image2.jpg"
                "image3.jpg"
                "image4.jpg"
                "image5.jpg"
              ]
            }
          }
        }
        sort: { fields: fluid___originalName, order: ASC }
      ) {
        edges {
          node {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
            id
          }
        }
      }
    }
  `)

  return (
    <div className={styles.Images}>
      {query.allImageSharp.edges.map((image, index) => (
        <div className={styles.ImageContainer} key={image.node.id}>
          <Image
            fluid={image.node.fluid}
            className={styles.Image}
            alt={imagesData[index].alt}
          />
          <div className={styles.Description}>
            <div className={styles.Top}></div>
            <div className={styles.Bottom}></div>
            <div className={styles.Left}></div>
            <div className={styles.Right}></div>
            <p>{imagesData[index].description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Images
