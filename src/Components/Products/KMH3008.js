import Product from "../BasicComp/Product"
import Img1 from "../../Images/Products/product_mobile_holder/product_mobile_holder_01.jpeg";


const KMH3008=()=>
{
    const dataToSend = {
        pName: "Mobile Holder",
        pImages: [Img1],
        pDescription:
          "Im a product description. Im a great place to include more information about your product. Buyers like to know what theyrgetting before they purchase.",
    
        pID: "KMH3008",
        pPrice: "199",
        pTags: [],
      }
     
    return(
        <>
        <Product dataToReceive={dataToSend}/>
        </>
    )
}

export default KMH3008