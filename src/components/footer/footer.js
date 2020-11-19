import React from 'react'
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";


import styles from "./footer.module.scss"

const Footer = () => {
    return (  
        <footer className={styles.Footer}>
            <div className={styles.Icon}>
                <ImInstagram />
            </div>
            <div className={styles.Icon}>
                <ImFacebook />
            </div>
            <div className={styles.Icon}>
                <ImTwitter />
            </div>
        </footer>
    );
}
 
export default Footer;