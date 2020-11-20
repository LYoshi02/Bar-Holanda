import React from "react"
import { Link } from "gatsby"
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
            <Link to="/">Nosotros</Link>
          </li>
          <li>
            <Link to="/">Menú</Link>
          </li>
          <li>
            <Link to="/">Reservaciones</Link>
          </li>
          <li>
            <Link to="/">Contacto</Link>
          </li>
          <li>
            <Link to="/">Trabajos</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
