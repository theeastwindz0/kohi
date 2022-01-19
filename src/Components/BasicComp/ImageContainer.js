import styles from '../CSS/ImageContainer.module.css'
const ImageContainer = (props) => {
    return (
        <div className={styles.Image_Container}>
            <img src={props.Container_Image}></img>
            <div className={styles.Image_Text}>
                <h2>LET GO GREEN</h2>
            </div>
        </div>
    )
}

export default ImageContainer
