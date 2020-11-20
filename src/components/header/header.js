import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FiChevronsDown } from "react-icons/fi"

import Button from "../button/button"
import styles from "./header.module.scss"

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Background}></div>

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
