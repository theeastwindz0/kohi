 // const dataToSend={
  //   pcTitle:'',
  //   pcFlexKitSize:'',
  //   pcBoxLeftTitle:'',
  //   pcBoxLeftDesc:'',
  //   pcboxLeftButtonName:'',
  //   pcBoxLeftButtonLocation:'',
  //   pcBoxRightImage:''
  // }

import FlexKit from "./FlexKit";
import styles from "../CSS/ProductContainer.module.css";
import Button from "./Button";

const ProdutContainer = (props) => {

  const viewMoreButton=[
    {
      title:'VIEW MORE',
      location:'#'
    }
  ]
 
  return (

    <div className={styles.Product_Container}>
        <h2 className={styles.title}>{props.dataToReceive.pcTitle}</h2>
    <FlexKit className={props.dataToReceive.pcFlexKitSize}>
      <div className={styles.box_left}>
        <h2>{props.dataToReceive.pcBoxLeftTitle}</h2>
        <p>
          {props.dataToReceive.pcBoxLeftDesc}
        </p>
        <Button color='black' buttons={viewMoreButton}>{props.dataToReceive.pcboxLeftButtonName}</Button>
      </div>
      <div className={styles.box_right}>
        <img src={props.dataToReceive.pcBoxRightImage}></img>
      </div>
    </FlexKit>
    </div>
  );
};

export default ProdutContainer;
