import Footer from "./Components/BasicComp/Footer";
import Header from "./Components/BasicComp/Header";
import HomePage from "./Components/Pages/HomePage";
import {  Routes, Route } from "react-router-dom";
import ProductsPage from "./Components/Pages/ProductsPage";
import AboutPage from "./Components/Pages/AboutPage";
import ErrorPage from "./Components/Pages/ErrorPage";
import KEP3008 from "./Components/Products/KEP3008";
import KPN3008 from "./Components/Products/KPN3008";
import KPNL3008 from "./Components/Products/KPNL3008";
import KMH3008 from "./Components/Products/KMH3008";
import KPB3008 from "./Components/Products/KPB3008";
import KNB3008 from "./Components/Products/KNB3008"

function App() {
  const allTheRoutes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "products",
      element: <ProductsPage />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },
    {
      path: "products/KEP3008",
      element: <KEP3008/>,
    },
    {
      path:"products/KMH3008",
      element:<KMH3008/>
    },
    {
      path:"products/KNB3008",
      element:<KNB3008/>
    },
    {
      path:"products/KPB3008",
      element:<KPB3008/>
    },
    {
      path:"products/KPN3008",
      element:<KPN3008/>
    },
    {
      path:"products/KPNL3008",
      element:<KPNL3008/>
    },
    {
      path:"*",
      element:<ErrorPage/>
    },
    
  ];
  return (
    <>
      <Header />
      <Routes>
        {allTheRoutes.map((page, i) => (
          <Route key={i} path={page.path} element={page.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
