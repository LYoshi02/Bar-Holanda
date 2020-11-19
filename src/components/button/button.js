import React from 'react'

import styles from "./button.module.scss"

const Button = (props) => {
    return (  
        <a className={styles.Button} href="#">{props.children}</a>
    );
}
 
export default Button;