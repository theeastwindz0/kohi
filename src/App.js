import Footer from "./Components/BasicComp/Footer";
import Header from "./Components/BasicComp/Header";
import HomePage from "./Components/Pages/HomePage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProductsPage from "./Components/Pages/ProductsPage";
import AboutPage from "./Components/Pages/AboutPage";

function App() {
  return (
    
    <>
    <BrowserRouter basename="/">
    <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='products' element={<ProductsPage/>}/>
        <Route path='about' element={<AboutPage/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
