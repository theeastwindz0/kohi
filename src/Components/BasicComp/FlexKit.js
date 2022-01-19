import styles from '../CSS/FlexKit.module.css'

const FlexKit = (props) => {
    return (
        <div style={{'backgroundColor':props.backgroundColor}} className={styles[props.className]}>
            {props.children}
        </div>
    )
}

export default FlexKit
