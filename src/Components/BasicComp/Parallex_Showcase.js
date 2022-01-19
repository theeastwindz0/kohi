import styles from "../CSS/Parallex_Showcase.module.css";
import FlexKit from "./FlexKit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import testImage from '../../Images/Background/bg_image_03.jpg'
import {
  faWeight,
  faMobile,
  faRupeeSign,
  faFlag,
  faDumbbell,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";

const Parallex_Showcase = () => {
  return (
    <div className={styles.Parallex_Showcase}>
      <div className={styles.box_1}>
        <h1>PRODUCT FEATURES</h1>
      </div>
      <div className={styles.box_2}>
        <img src={testImage}/>
          <h2>Video Details</h2>
      </div>
      <FlexKit backgroundColor={'black'} className="Grid_3">
        <div className={styles.box}>
          <FontAwesomeIcon className={styles.icon} icon={faWeight} />
          <p>Light Weight</p>
        </div>
        <div className={styles.box}>
          <FontAwesomeIcon className={styles.icon} icon={faMobile} />
          <p>Supports Most Models</p>
        </div>
        <div className={styles.box}>
          <FontAwesomeIcon className={styles.icon} icon={faRupeeSign} />
          <p>Reasonable Price</p>
        </div>
        <div className={styles.box}>
        <FontAwesomeIcon className={styles.icon} icon={faFlag} />
          <p>Made in India</p>
        </div>
        <div className={styles.box}>
        <FontAwesomeIcon className={styles.icon} icon={faDumbbell} />
          <p>Strong Material</p>
        </div>
        <div className={styles.box}>
        <FontAwesomeIcon className={styles.icon} icon={faBriefcase} />
          <p>Portable</p>
        </div>
      </FlexKit>
    </div>
  );
};

export default Parallex_Showcase;
