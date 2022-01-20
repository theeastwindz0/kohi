import Product from "../BasicComp/Product"
import Img1 from "../../Images/Products/product_pen/product_pen_01.jpeg";
import Img2 from "../../Images/Products/product_pen/product_pen_02.jpeg";

const KPN3008=()=>
{
    const dataToSend = {
        pName: "Pen",
        pImages: [Img1,Img2],
        pDescription:
          "Im a product description. Im a great place to include more information about your product. Buyers like to know what theyrgetting before they purchase.",
    
        pID: "KPN3008",
        pPrice: "100",
        pTags: [],
      }
     
    return(
        <>
        <Product dataToReceive={dataToSend}/>
        </>
    )
}

export default KPN3008