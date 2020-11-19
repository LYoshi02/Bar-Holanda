import React from "react"
import Navigation from "../navigation/navigation"

import styles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={styles.Layout}>
      <Navigation />
      {props.children}
    </div>
  )
}

export default Layout
