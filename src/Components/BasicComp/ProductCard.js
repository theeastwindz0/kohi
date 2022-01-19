import test from '../../Images/Products/product_mobile_holder/product_mobile_holder.jpeg'
import styles from '../CSS/ProductCard.module.css'
import Button from '../BasicComp/Button'
import Button2 from './Button2'
const ProductCard = () => {
    const productButton=[
        {
            title:"VIEW MORE",
            location:'#'
        }
    ]
    return (
        <div className={styles.Product_Card}>

            <div className={styles.Product_Card_Image}>
            <img src={test}></img>
            {/* <div className={styles.Ribbon}>NEW ITEM</div> */}

            </div>
            

            <div className={styles.Product_Card_Text}>
            <h3>DESC</h3>
            
            <p>Lorem ipsum dolor sjdfklasjdflksdjflkasjdflsjadflk </p>
            </div>
            {/* <span className={styles.Price}><p >$2999</p></span> */}
        </div>
    )
}

export default ProductCard
