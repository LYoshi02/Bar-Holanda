import React from "react"
import { Link } from "gatsby"

import styles from "./button.module.scss"

const Button = props => {
  return (
    <Link to="/" className={styles.Button} onClick={props.clicked}>
      {props.children}
    </Link>
  )
}

export default Button
