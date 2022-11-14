import React from "react";
import ProductBannerImg from "../Assets/Images/bannerImg.webp";
import { EmpityImage, OtherBanner } from "../Helpers/Helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useParams } from "react-router-dom";
import listOfAllProducts from "../rawData/Articles.js";

function ProductDetails({ setIntoCart }) {
  const lesparams = useParams();
  const produitId = lesparams.produitId;
  const [nombreProduct, setNombreProduct] = useState(0);

  function handleDecrement() {
    if (nombreProduct > 0) {
      const newValue = parseInt(nombreProduct) - 1;
      setNombreProduct(newValue);
      // setProductAdd(newValue)
    } else {
      // setProductAdd('')
    }
  }

  function handleIncrement() {
    const newValue = parseInt(nombreProduct) + 1;
    setNombreProduct(newValue);
    // setProductAdd(newValue)
  }

  function getTheProductDetail() {
    const copy = [...listOfAllProducts];
    const newA = copy.findIndex((el) => el.id === parseInt(produitId));
    return listOfAllProducts[newA];
  }

  console.log(getTheProductDetail());
  function handleAddToCart() {
    const productToAdd = getTheProductDetail();

    setIntoCart((prev) => {
      const copy = [...prev];
      const verify = copy.findIndex((el) => el.id === productToAdd.id);
      if (verify > -1) {
        copy[verify].quantity = copy[verify].quantity + nombreProduct;
      } else {
        productToAdd.quantity = nombreProduct;
        copy.push(productToAdd);
      }
      localStorage.setItem("tablePannier", JSON.stringify(copy));
      setNombreProduct(0);
      return copy;
    });
  }

  return (
    <div>
      <OtherBanner
        propriete={{
          img: ProductBannerImg,
          title: "Product Details",
          route: "Home  >  Produuct Details",
        }}
      />
      {getTheProductDetail() ? (
        <div className="infoProductHome">
          <div className="infoProductImagePart">
            <img src={getTheProductDetail().img} alt="Chaise1" />
          </div>
          <div className="infoProductInfoPart">
            <h3>{getTheProductDetail().title}</h3>
            <h2>${getTheProductDetail().price}</h2>
            <ul>
              <li>
                <a href="/ProductDetails/:produitId" className="active">
                  <span>Category</span> : House
                </a>
              </li>
              <li>
                <a href="/ProductDetails/:produitId">
                  <span>Availibility</span> : In Stock
                </a>
              </li>
            </ul>
            <p>
              Mill Oil is an innovative oil filled radiator with the most modern
              technology. If you are looking for something that can make your
              interior look awesome, and at the same time.
            </p>

            <div className="displayAddToCard">
              <span onClick={handleDecrement}>-</span>
              <input
                type="nombre"
                value={nombreProduct}
                onChange={(e) => setNombreProduct(e.target.value)}
              />
              <span onClick={handleIncrement}>+</span>
            </div>
            <div className="infoProductLike">
              <button
                disabled={nombreProduct === 0 ? true : false}
                className="btn"
                onClick={handleAddToCart}
              >
                Add To Card
              </button>
              <a href="/ProductDetails/:produitId">
                <FontAwesomeIcon icon={faAppleAlt} />
              </a>
            </div>
            <div className="infoProductSocialMedia">
              <a
                href="http://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faAppleAlt} />
              </a>

              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faAppleAlt} />
              </a>

              <a
                href="http://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faAppleAlt} />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <EmpityImage />
      )}
    </div>
  );
}

export default ProductDetails;
