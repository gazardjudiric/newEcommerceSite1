import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Pannier from "./Pages/Pannier";
import ProductDetails from "./Pages/ProductDetails";
import Page404 from "./Pages/Page404";
import "./Assets/Css/global.css";
import "./Assets/Css/Home/banner.css";
import "./Assets/Css/products_list.css";
import "./Assets/Css/otherBanner.css";
import "./Assets/Css/explainText.css";
import "./Assets/Css/grilleImage.css";
import "./Assets/Css/infoProduct.css";
import "./Assets/Css/pannier.css";
import "./Assets/Css/contact.css";
import Navigations from "./Components/Navigations";
import Footer from "./Components/Footer";

function App() {
  const [intoCart, setIntoCart] = useState(
    localStorage.getItem("tablePannier")
      ? JSON.parse(localStorage.getItem("tablePannier"))
      : []
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Navigations intoCart={intoCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/ProductDetails/:produitId"
            element={<ProductDetails setIntoCart={setIntoCart} />}
          />
          <Route
            path="/Pannier"
            element={<Pannier intoCart={intoCart} setIntoCart={setIntoCart} />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
