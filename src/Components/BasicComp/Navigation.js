import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import styles from '../CSS/Navigation.module.css'
import { Link } from "react-router-dom"

const Navigation = (props) => {


    return (
        <>
        <span className={styles.bigScreen}>
        {/* {props.buttons.map((button, i) =>(
            <Link  key={i} to={button.location}><Button borderColor={'white'}>{button.title}</Button></Link>
            
          ))} */
          }

          <Button borderColor={"white"} buttons={props.buttons}/>
        </span>
        <span className={styles.smallScreen}>
        <FontAwesomeIcon onClick={props.onOpen} className={styles.menuIcon} icon={faBars}></FontAwesomeIcon>
        </span>

        </>
    )
}

export default Navigation
