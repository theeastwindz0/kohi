import ImageContainer from "../BasicComp/ImageContainer"
import bg_image_03 from '../../Images/Background/bg_image_04.jpg'
import ProdutContainer from "../BasicComp/ProdutContainer"
import product_mobile_holder from "../../Images/Products/product_mobile_holder/product_mobile_holder_01.jpeg";
import {useEffect} from 'react'
import Parallex_Showcase from "../BasicComp/Parallex_Showcase";

const HomePage = () => {
    
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    const dataToSend={
    pcTitle:'BEST SELLING PRODUCT',
    pcFlexKitSize:'FlexKit_2',
    pcBoxLeftTitle:'ORGANIC MOBILE STAND',
    pcBoxLeftDesc:'Portable, Phone stand, Flexible, Mobile holder, Perfect for gift,Multi angle, Mobile stand, Foldable, Phone holderPortable, Phone stand, Flexible, Mobile holder, Perfect for gift, Multi angle, Mobile stand, Foldable, Phone holder',
    pcboxLeftButtonName:'VIEW MORE',
    pcBoxLeftButtonLocation:'products/KMH3008',
    pcBoxRightImage:product_mobile_holder
    }
  
    return (
        <>
            <ImageContainer Container_Image={bg_image_03}/>
            <ProdutContainer dataToReceive={dataToSend}></ProdutContainer>
            <Parallex_Showcase/>
        </>
    )
}

export default HomePage