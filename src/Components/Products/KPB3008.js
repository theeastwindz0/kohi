import Product from "../BasicComp/Product"
import Img1 from "../../Images/Products/product_polybag/product_polybag_01.jpeg";
import Img2 from "../../Images/Products/product_polybag/product_polybag_02.jpeg";



const KPB3008=()=>
{
    const dataToSend = {
        pName: "Poly Bag",
        pImages: [Img1,Img2],
        pDescription:
          "Im a product description. Im a great place to include more information about your product. Buyers like to know what theyrgetting before they purchase.",
    
        pID: "KPB3008",
        pPrice: "50",
        pTags: [],
      }
     
    return(
        <>
        <Product dataToReceive={dataToSend}/>
        </>
    )
}

export default KPB3008