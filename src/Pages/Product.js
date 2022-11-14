import React from "react";
import { HomeProductsList1 } from "../Helpers/products_list.js";
import ProductBannerImg from "../Assets/Images/bannerImg.webp";
import { OtherBanner } from "../Helpers/Helper.js";

function Product(props) {
  return (
    <div>
      <OtherBanner
        propriete={{
          img: ProductBannerImg,
          title: "Product",
          route: "Home  >  Product",
        }}
      />
      <HomeProductsList1 />
    </div>
  );
}

export default Product;
