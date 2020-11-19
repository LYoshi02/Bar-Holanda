import React from "react"

import img1 from "../../assets/images/image1.jpg"
import img2 from "../../assets/images/image2.jpg"
import img3 from "../../assets/images/image3.jpg"
import img4 from "../../assets/images/image4.jpg"
import img5 from "../../assets/images/image5.jpg"

import styles from "./images.module.scss"

const Images = () => {
  return (
    <div className={styles.Images}>
      <div className={`${styles.Image} ${styles.MainImage}`}>
        <img src={img1} alt="Bartender" />
        <div className={styles.Description}>
          <div className={styles.Top}></div>
          <div className={styles.Bottom}></div>
          <div className={styles.Left}></div>
          <div className={styles.Right}></div>
          <p>Bartenders Profesionales</p>
        </div>
      </div>

      <div className={styles.Image}>
        <img src={img2} alt="Bartender" />
        <div className={styles.Description}>
          <div className={styles.Top}></div>
          <div className={styles.Bottom}></div>
          <div className={styles.Left}></div>
          <div className={styles.Right}></div>
          <p>Cocktails</p>
        </div>
      </div>

      <div className={styles.Image}>
        <img src={img3} alt="Bartender" />
        <div className={styles.Description}>
          <div className={styles.Top}></div>
          <div className={styles.Bottom}></div>
          <div className={styles.Left}></div>
          <div className={styles.Right}></div>
          <p>Comidas</p>
        </div>
      </div>

      <div className={styles.Image}>
        <img src={img4} alt="Bartender" />
        <div className={styles.Description}>
          <div className={styles.Top}></div>
          <div className={styles.Bottom}></div>
          <div className={styles.Left}></div>
          <div className={styles.Right}></div>
          <p>Artistas en Vivo</p>
        </div>
      </div>

      <div className={styles.Image}>
        <img src={img5} alt="Bartender" />
        <div className={styles.Description}>
          <div className={styles.Top}></div>
          <div className={styles.Bottom}></div>
          <div className={styles.Left}></div>
          <div className={styles.Right}></div>
          <p>Tragos</p>
        </div>
      </div>
    </div>
  )
}

export default Images
