import FlexKit from "../BasicComp/FlexKit";
import ProductCard from "../BasicComp/ProductCard";
import Button2 from "../BasicComp/Button2";
import { useEffect } from "react";

import KEP3008 from "../../Images/Products/product_earphone/product_earphone_04.jpeg";
import KMH3008 from "../../Images/Products/product_mobile_holder/product_mobile_holder_01.jpeg";
import KNB3008 from "../../Images/Products/product_pencil/product_pencil_01.jpeg";
import KPB3008 from "../../Images/Products/product_polybag/product_polybag_02.jpeg";
import KPN3008 from "../../Images/Products/product_pen/product_pen_01.jpeg";
import KPNL3008 from "../../Images/Products/product_pencil/product_pencil_01.jpeg";


const ProductsPage = (props) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  //If Product have short Description add spaces  Sample given below
  //"                                                                              "
  const dataToSend = [
    {
      pcImage: KEP3008,
      pcName: "Earphone",
      pcDesc: "Repaired Brands Earphone.",
      pathname: "KEP3008",
    },
    {
        pcImage: KMH3008,
        pcName: "Mobile Holder",
        pcDesc: "Mobile Holder , Supports most models.",
        pathname: "KMH3008",
      },
      {
        pcImage: KNB3008,
        pcName: "Note Book",
        pcDesc: "Pen which grow plants when decompsed..",
        pathname: "KNB3008",
      },
      {
        pcImage: KPB3008,
        pcName: "Poly Bag",
        pcDesc: "Made with the fibre jute.",
        pathname: "KPB3008",
      },
    {
      pcImage: KPN3008,
      pcName: "Pen",
      pcDesc: "Pen which grow plants when decompsed.",
      pathname: "KPN3008",
    },
    {
        pcImage: KPNL3008,
        pcName: "Pencil",
        pcDesc: "Pencil which grow plants when decompsed..",
        pathname: "KPNL3008",
      },
  ];

  return (
    <>
      <FlexKit className="Grid_2">
        {dataToSend.map((element, i) => (
          <Button2 key={i} location={dataToSend[i].pathname}>
            <ProductCard dataToReceive={dataToSend[i]} />
          </Button2>
        ))}
      </FlexKit>
    </>
  );
};

export default ProductsPage;
