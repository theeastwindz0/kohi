import styles from '../CSS/ImageContainer.module.css'
const ImageContainer = (props) => {
    return (
        <div className={styles.Image_Container}>
            <img src={props.Container_Image}></img>
        </div>
    )
}

export default ImageContainer
