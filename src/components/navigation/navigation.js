import React from "react"
import styles from "./navigation.module.scss"

const Navigation = () => {
  const [openNavigation, setOpenNavigation] = React.useState(false)
  const navigationClasses = [styles.Navigation]

  if (openNavigation) {
    navigationClasses.push(styles.NavigationOpen)
  }

  return (
    <div className={navigationClasses.join(" ")}>
      <div
        className={styles.Burger}
        onClick={() => setOpenNavigation(prev => !prev)}
      >
        <span></span>
      </div>
      <div className={styles.Sidebar}>
        <ul>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Menú</a>
          </li>
          <li>
            <a href="#">Reservaciones</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Trabajos</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
