import React from "react";
import ProductBannerImg from "../Assets/Images/bannerImg.webp";
import GrilleChaise from "../Assets/Images/grilleImgChaise.png";
import GrilleSofa from "../Assets/Images/grilleImgSofa.png";
import Insta from "../Assets/Images/insta.png";
import Banner3_1 from "../Assets/Images/banner3_1.png";
import Banner3_2 from "../Assets/Images/banner3_2.webp";
import { ExplainText, GrilleImage, OtherBanner } from "../Helpers/Helper";
import { HomeBanner3 } from "../Helpers/banner";

function About(props) {
  return (
    <div>
      <OtherBanner
        propriete={{
          img: ProductBannerImg,
          title: "ABOUT",
          route: "Home  >  About",
        }}
      />

      <ExplainText
        propriete={{
          title: "Our     Story",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        }}
      />

      <GrilleImage img={GrilleChaise} />

      <ExplainText
        propriete={{
          title: "Journey start from",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        }}
      />

      <GrilleImage img={GrilleSofa} />

      <ExplainText
        propriete={{
          title: "2020",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        }}
      />

      <HomeBanner3
        propriete={{
          imgInsta: Insta,
          title: (
            <h2>
              Get Inspired with <br />
              Instagram
            </h2>
          ),
          text: `Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.`,
          btnText: `Discover More`,
          imgLeft: Banner3_1,
          imgRight: Banner3_2,
        }}
      />
    </div>
  );
}

export default About;
