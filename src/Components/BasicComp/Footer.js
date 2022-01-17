import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../CSS/Footer.module.css'
import { faYoutube,faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    // const year=Date.getFullYear();
    // console.log(year);
    return (
        <>
        <div className={styles.Footer}>
            <div className={styles.footer_left}>
                <FontAwesomeIcon className={styles.icon} icon={faFacebook}/>
                <a href='https://www.instagram.com/kohi.desi' target='_blank'><FontAwesomeIcon className={styles.icon} icon={faInstagram}/></a>
                <FontAwesomeIcon className={styles.icon} icon={faYoutube}/>

            </div>
            <div className={styles.footer_middle}>
            <h4>Copyright &copy; 2022 All rights reserved</h4>
            </div>
            <div className={styles.footer_right}>
                
            </div>
            
        </div>
        </>
    )
}

export default Footer
