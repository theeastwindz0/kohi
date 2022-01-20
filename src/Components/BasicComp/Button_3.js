//  location=''

import { Link } from "react-router-dom"
import styles from '../CSS/Button.module.css'

const Button3 = (props) => {
    return (
        <Link style={{'backgroundColor':props.backgroundColor, 'margin':props.margin}} className={styles.Button_3} to={props.location}>{props.children}</Link>
    )
}

export default Button3
