import React from "react"

import styles from "./text.module.scss"

const Text = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Text}>
        <h2>Una experiencia totalmente nueva</h2>
        <hr />
        <div className={styles.Paragraph}>
          <p>
            Biodiesel lo-fi quinoa knausgaard irony, vexillologist stumptown
            cloud bread direct trade letterpress church-key ethical brooklyn...
          </p>
        </div>
      </div>
    </div>
  )
}

export default Text
