import React from "react";
import BannerImg from "../Assets/Images/bannerImg.webp";
import ImgBanner2 from "../Assets/Images/banner2.webp";
import { Link } from "react-router-dom";

export function HomeBanner1(props) {
  return (
    <div className="banner">
      <div className="banner-img">
        <img src={BannerImg} alt="Banner" />
      </div>
      <div className="banner-titles">
        <span>70% Sale off</span>
        <h1>Furniture At Cost</h1>
        <p>
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla.
        </p>
        <div>
          <Link to="/product"> Discover More</Link>
        </div>
      </div>
    </div>
  );
}

export function HomeBanner2(props) {
  return (
    <div className="banner2Content">
      <div>
        <img src={ImgBanner2} alt="Banner2" />
      </div>

      <div>
        <h2>
          Best Furniture <br /> manufacturer
        </h2>
        <p>
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla.
        </p>
        <p>
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla.
        </p>

        <Link className="btn discoverMore" to="/Product">
          Discover More
        </Link>
      </div>
    </div>
  );
}

export function HomeBanner3(props) {
  const { imgInsta, title, text, btnText, imgLeft, imgRight } = props.propriete;
  return (
    <div className="banner3Content">
      <div>
        <div>
          <img src={imgInsta} alt={"Logo de " + imgInsta} />

          <h2>{title}</h2>
        </div>

        <p>{text}</p>

        <Link className="btn discoverMoreHomeBanner3" to="/Product">
          {btnText}
        </Link>
      </div>

      <div>
        <img src={imgLeft} alt={"Image de" + imgLeft} />
      </div>

      <div>
        <img src={imgRight} alt={"Image de " + imgRight} />
      </div>
    </div>
  );
}
