import styles from "../CSS/Product.module.css";
import testImage4 from "../../Images/Products/product_earphone/product_earphone_04.jpeg";
import testImage3 from "../../Images/Products/product_earphone/product_earphone_03.jpeg";
import testImage2 from "../../Images/Products/product_earphone/product_earphone_02.jpeg";
import FlexKit from "./FlexKit";
import Button3 from "./Button_3";
import { useEffect, useState } from "react";
const Product = () => {
  const [currentImage, SetCurrentImage] = useState(testImage4);
  const onImageTabButtonHandler = (item) => {
    // const productImage = document.getElementById("productImage");
    SetCurrentImage(item);
  };

  useEffect(() => {
    window.scroll(0,0)
}, [])
  return (
    <>
      <FlexKit backgroundColor="white" className="FlexKit_2">
        <div className={styles.box_1}>
          <div className={styles.box_1_Image}>
            <img id="productImage" src={currentImage} />
          </div>
          <div className={styles.box_1_Images_Tab}>
            <img
              onClick={() => onImageTabButtonHandler(testImage4)}
              src={testImage4}
            ></img>
            <img
              onClick={() => onImageTabButtonHandler(testImage2)}
              src={testImage2}
            ></img>
            <img
              onClick={() => onImageTabButtonHandler(testImage3)}
              src={testImage3}
            ></img>
          </div>
          <div className={styles.box_1_Text}>
            I'm a product description. I’m a great place to include more
            information about your product. Buyers like to know what they’re
            getting before they purchase.
          </div>
        </div>

        <div className={styles.box_2}>
          <div className={styles.box_2_Top_Part}>
            <h2>PRODUCT NAME</h2>
            <p>SKU003</p>
            <h2 className={styles.price}>₹299</h2>
            {/* <form className={styles.form}> */}
            <label>Quantity</label>
            <input type="number"></input>
            {/* </form> */}
            <Button3
              backgroundColor="rgb(49, 130, 181)"
              margin="20px 0px"
              location="#"
            >
              ADD TO CART
            </Button3>
            <Button3 backgroundColor="black" margin="10px 0px" location="#">
              BUY NOW
            </Button3>
          </div>
          <div className={styles.box_2_Bottom_Part}>
            <h2>SHIPPING</h2>
            <p>
              Shipping Poilcy dummy text Shipping Poilcy dummy text Shipping
              Poilcy dummy text Shipping Poilcy dummy text Shipping Poilcy dummy
              text Shipping Poilcy dummy text Shipping Poilcy dummy text
              Shipping Poilcy dummy text Shipping Poilcy dummy text Shipping
              Poilcy dummy text Shipping Poilcy dummy text
            </p>

            <h2>REFUND</h2>
            <p>
              Refund Poilcy Refund Poilcy Refund Poilcy Refund Poilcy Refund
              Poilcy Refund Poilcy Refund Poilcy Refund Poilcy Refund Poilcy
              Refund Poilcy Refund Poilcy Refund Poilcy Refund Poilcy Refund
              Poilcy Refund Poilcy Refund Poilcy Refund Poilcy Refund Poilcy
              Refund Poilcy Refund Poilcy Refund Poilcy
            </p>
          </div>
        </div>
      </FlexKit>
    </>
  );
};

export default Product;
