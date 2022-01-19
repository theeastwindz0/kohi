import styles from "../CSS/Button.module.css";
import { Link } from "react-router-dom";
const Button = (props) => {

    return (
    <>
      {/* <div style={{'borderColor':props.borderColor}} className={styles.Button}>{props.children}</div> */}
      {props.buttons.map((button, i) => (
        <Link className={styles.LinkButton} style={{'color':props.color,'textDecoration':'none'}} key={i} to={button.location}>
          <div
            onClick={props.onClose}
            style={{ borderColor: props.borderColor }}
            className={styles.Button}
          >
            {button.title}
          </div>
        </Link>
      ))}
    </>
  );
};

export default Button;
