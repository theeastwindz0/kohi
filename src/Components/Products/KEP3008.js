import Product from "../BasicComp/Product"
import Img1 from "../../Images/Products/product_earphone/product_earphone_01.jpeg";
import Img2 from "../../Images/Products/product_earphone/product_earphone_02.jpeg";
import Img3 from "../../Images/Products/product_earphone/product_earphone_03.jpeg";
import Img4 from "../../Images/Products/product_earphone/product_earphone_04.jpeg";

const KEP3008=()=>
{
    const dataToSend = {
        pName: "Ear Phone",
        pImages: [Img4,Img1, Img2,Img3],
        pDescription:
          "Im a product description. Im a great place to include more information about your product. Buyers like to know what theyrgetting before they purchase.",
    
        pID: "KEP3008",
        pPrice: "299",
        pTags: [],
      }
     
    return(
        <>
        <Product dataToReceive={dataToSend}/>
        </>
    )
}

export default KEP3008