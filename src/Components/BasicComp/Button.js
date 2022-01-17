import styles from '../CSS/Button.module.css'
const Button = (props) => {
    return (
        <>
        <a className={styles.Button} href={props.href}>{props.children}</a>
        </>
    )
}

export default Button 
