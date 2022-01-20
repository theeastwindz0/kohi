// const dataToSend={
//     pcImage:'',
//     pcName:'',
//     pcDesc:''
//    }

import styles from "../CSS/ProductCard.module.css";
const ProductCard = (props) => {
  return (
    <div className={styles.Product_Card}>
      <div className={styles.Product_Card_Image}>
        <img
          alt={props.pcName + "Image"}
          src={props.dataToReceive.pcImage}
        ></img>
        {/* <div className={styles.Ribbon}>NEW ITEM</div> */}
      </div>

      <div className={styles.Product_Card_Text}>
        <h3>{props.dataToReceive.pcName}</h3>

        <p>{props.dataToReceive.pcDesc}</p>
        <p></p>
      </div>
    </div>
  );
};

export default ProductCard;
