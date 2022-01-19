//  location=''

import { Link } from "react-router-dom"
import styles from '../CSS/Button.module.css'

const Button2 = (props) => {
    return (
        <Link className={styles.Button_2} to={props.location}>{props.children}</Link>
    )
}

export default Button2
