import styles from '../CSS/FlexKit.module.css'

const FlexKit = (props) => {
    return (
        <div className={styles[props.className]}>
            {props.children}
        </div>
    )
}

export default FlexKit
