import Product from "../BasicComp/Product"
import Img1 from "../../Images/Products/product_pencil/product_pencil_01.jpeg";


const KNB3008=()=>
{
    const dataToSend = {
        pName: "Note Book",
        pImages: [Img1],
        pDescription:
          "Im a product description. Im a great place to include more information about your product. Buyers like to know what theyrgetting before they purchase.",
    
        pID: "KNB3008",
        pPrice: "40",
        pTags: [],
      }
     
    return(
        <>
        <Product dataToReceive={dataToSend}/>
        </>
    )
}

export default KNB3008