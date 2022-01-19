import FlexKit from "../BasicComp/FlexKit"
import ProductCard from "../BasicComp/ProductCard"
import Button2 from "../BasicComp/Button2"
import { useEffect } from "react"
const ProductsPage = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <>
        <FlexKit className='Grid_2'>
            <Button2 location='/'><ProductCard/></Button2>
            <Button2 location='/'><ProductCard/></Button2>
            <Button2 location='/'><ProductCard/></Button2>
            <Button2 location='/'><ProductCard/></Button2>
            <Button2 location='/'><ProductCard/></Button2>
            <Button2 location='/'><ProductCard/></Button2>
            <Button2 location='/'><ProductCard/></Button2>
            <Button2 location='/'><ProductCard/></Button2>


        </FlexKit>
        </>
    )
}

export default ProductsPage
