import React from "react"

import styles from "./button.module.scss"

const Button = props => {
  return (
    <button type="button" className={styles.Button} onClick={props.clicked}>
      {props.children}
    </button>
  )
}

export default Button
