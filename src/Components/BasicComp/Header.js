import styles from "../CSS/Header.module.css";
import logo_white from "../../Images/logo_white.png";
import logo_text_white from "../../Images/Misc/kohi_text_white.png";
import Navigation from "./Navigation";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const onClose = () => {
    document.getElementById("overlay").style.width = "0px ";
    document.getElementById("overlay").style.right = "-100%";
  };

  const onOpen = () => {
    document.getElementById("overlay").style.width = "250px";
    document.getElementById("overlay").style.right = "0%";
  };

  const buttons = [
    { title: "HOME", location: "/" },
    {
      title: "PRODUCTS",
      location: "products",
    },
    {
      title: "ABOUT",
      location: "about",
    },
  ];

  return (
    <>
      <div className={styles.Header}>
        <div className={styles.header_left}>
          <Link to={buttons[0].location}><img src={logo_white}></img></Link>
        </div>
        <div className={styles.header_middle}>
          <img src={logo_text_white}></img>
        </div>
        <div className={styles.header_right}>
          <Navigation buttons={buttons} onOpen={onOpen} />
        </div>
      </div>
      <div className={styles.overlay} id="overlay">
        <FontAwesomeIcon
          onClick={onClose}
          icon={faTimes}
          className={styles.crossIcon}
        ></FontAwesomeIcon>
        <div className={styles.submenu}>
        <Button onClose={onClose} borderColor={"white"} buttons={buttons}/>
        </div>
      </div>
    </>
  );
};

export default Header;
