import React from 'react'

import aboutImg from "../../assets/images/about.jpg"
import reservationImg from "../../assets/images/reservation.jpg"
import Button from '../button/button'
import styles from "./about.module.scss"

const About = () => {
    return (  
        <React.Fragment>
        <div className={styles.About}>
            <div className={styles.Content}>
                <h2>Nosotros</h2>
                <p>Kinfolk put a bird on it twee, chambray master cleanse whatever franzen pour-over glossier.</p>
                <Button>Ver más</Button>
            </div>

            <div className={styles.Image}>
                <img src={aboutImg} alt="Nosotros" />
            </div>
        </div>

        <div className={`${styles.About} ${styles.AboutMirror}`}>
            <div className={styles.Content}>
                <h2>Reservaciones</h2>
                <p>Kinfolk put a bird on it twee, chambray master cleanse whatever franzen pour-over glossier.</p>
                <Button>Realizar Reservación</Button>
            </div>

            <div className={styles.Image}>
                <img src={reservationImg} alt="Nosotros" />
            </div>
        </div>
        </React.Fragment>
        
    );
}
 
export default About;