import Product from "../BasicComp/Product"
import Img1 from "../../Images/Products/product_pencil/product_pencil_01.jpeg";


const KPNL3008=()=>
{
    const dataToSend = {
        pName: "Pencil",
        pImages: [Img1],
        pDescription:
          "Im a product description. Im a great place to include more information about your product. Buyers like to know what theyrgetting before they purchase.",
    
        pID: "KPNL3008",
        pPrice: "100",
        pTags: [],
      }
     
    return(
        <>
        <Product dataToReceive={dataToSend}/>
        </>
    )
}

export default KPNL3008