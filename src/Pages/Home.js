import React from "react";
import Insta from "../Assets/Images/insta.png";
import Banner3_1 from "../Assets/Images/banner3_1.png";
import Banner3_2 from "../Assets/Images/banner3_2.webp";
import { HomeBanner1, HomeBanner2, HomeBanner3 } from "../Helpers/banner.js";
import {
  HomeProductsList1,
  HomeProductsList2,
  HomeProductList3,
} from "../Helpers/products_list.js";

function Home(props) {
  return (
    <div>
      <HomeBanner1 />
      <HomeProductsList1 />
      <HomeBanner2 />
      <HomeProductsList2 />
      <HomeBanner3
        propriete={{
          imgInsta: Insta,
          title: `Get Inspired withInstagram`,
          text: `Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.`,
          btnText: `Discover More`,
          imgLeft: Banner3_1,
          imgRight: Banner3_2,
        }}
      />
      <HomeProductList3 />
    </div>
  );
}

export default Home;
