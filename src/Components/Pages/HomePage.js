import ImageContainer from "../BasicComp/ImageContainer"
import bg_image_03 from '../../Images/Background/bg_image_04.jpg'
import ProdutContainer from "../BasicComp/ProdutContainer"

const HomePage = () => {
    return (
        <>
            <ImageContainer Container_Image={bg_image_03}/>
            <ProdutContainer></ProdutContainer>
        </>
    )
}

export default HomePage