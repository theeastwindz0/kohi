import FlexKit from "./FlexKit";
import styles from "../CSS/ProductContainer.module.css";
import product_mobile_holder from "../../Images/Products/product_mobile_holder/product_mobile_holder.jpeg";
import Button from "./Button";

const ProdutContainer = () => {
  return (

    <div className={styles.Product_Container}>
        <h2 className={styles.title}>BEST SELLING PRODUCT</h2>
    <FlexKit className="FlexKit_2">
      <div className={styles.box_left}>
        <h2>ORGANIC MOBILE STAND</h2>
        <p>
          {" "}
          Portable, Phone stand, Flexible, Mobile holder, Perfect for gift,
          Multi angle, Mobile stand, Foldable, Phone holderPortable, Phone
          stand, Flexible, Mobile holder, Perfect for gift, Multi angle, Mobile
          stand, Foldable, Phone holder
        </p>
        <Button>VIEW MORE</Button>
      </div>
      <div className={styles.box_right}>
        <img src={product_mobile_holder}></img>
      </div>
    </FlexKit>
    </div>
  );
};

export default ProdutContainer;
