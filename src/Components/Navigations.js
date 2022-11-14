import React, { useState } from "react";
import Logo from "../Assets/Images/logo.png";
import Logo2 from "../Assets/Images/logo2.png";
import Card from "../Assets/Images/card.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { IconArrow, IconsBArs } from "../Assets/Icons/icons.js";
import "../Assets/Css/navigation.css";

function Navigations({ intoCart }) {
  const [navBar, setNavBar] = useState(false);
  const [etatBarsBtn, setEtatBarsBtn] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  });

  function handleReturnTop() {
    window.scrollTo(0, 0);
  }

  function handleBarsBtn() {
    setEtatBarsBtn(!etatBarsBtn);
  }

  return (
    <div className={" nav " + (navBar && " activeNav ")}>
      <div className="navContent">
        {navBar ? (
          <div className="navContentLogo2">
            <a href="#">
              <img src={Logo2} alt="Logo" className="imgLogo2" />
            </a>
          </div>
        ) : (
          <div className="navContentLogo">
            <a href="#">
              <img src={Logo} alt="Logo" className="imgLogo" />
            </a>
          </div>
        )}

        <div className="navContentLinks">
          <ul>
            <li>
              <Link to="/" className="navContentLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Product" className="navContentLink">
                Product
              </Link>
            </li>
            <li>
              <Link to="/About" className="navContentLink">
                About
              </Link>
            </li>
            <li>
              <Link to="" className="navContentLink">
                Page
              </Link>

              <ul className="pageMenu">
                <li>
                  <Link to="">login</Link>
                </li>
                <li>
                  <Link to="">card</Link>
                </li>
                <li>
                  <Link to="">categories</Link>
                </li>
                <li>
                  <Link to="">Checkout</Link>
                </li>
                <li>
                  <Link to="/ProductDetails">Product details</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="" className="navContentLink">
                Blog
              </Link>

              <ul className="pageMenu">
                <li>
                  <Link to="">blog</Link>
                </li>
                <li>
                  <Link to="">blog details</Link>
                </li>
                <li>
                  <Link to="">Element</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Contact" className="navContentLink">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="responsiveNav">
          <div>
            <button className="barsBtn" onClick={handleBarsBtn}>
              <span>Menu</span>
              <IconsBArs />
            </button>
          </div>

          <ul className={etatBarsBtn ? "openMenu" : ""}>
            <li>
              <Link to="/" className="responsiveNavLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Product" className="responsiveNavLink">
                Product
              </Link>
            </li>
            <li>
              <Link to="/About" className="responsiveNavLink">
                About
              </Link>
            </li>
            <li>
              <Link to="" className="responsiveNavLink">
                Page +
              </Link>

              <ul className="pageMenu">
                <li>
                  <Link to="">login</Link>
                </li>
                <li>
                  <Link to="">card</Link>
                </li>
                <li>
                  <Link to="">categories</Link>
                </li>
                <li>
                  <Link to="">Checkout</Link>
                </li>
                <li>
                  <Link to="/ProductDetails">Product details</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="" className="responsiveNavLink">
                Blog +
              </Link>

              <ul className="pageMenu">
                <li>
                  <Link to="">blog</Link>
                </li>
                <li>
                  <Link to="">blog details</Link>
                </li>
                <li>
                  <Link to="">Element</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Contact" className="responsiveNavLink">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="navContentSearch">
          <ul>
            <li>
              <input type="text" name="search" placeholder="Search products" />
              <FontAwesomeIcon
                className="navContentSearchIcon"
                icon={faMagnifyingGlass}
              />
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <img src={Card} alt="card" />
              <Link to="/Pannier">{intoCart.length}</Link>
            </li>
          </ul>
        </div>
      </div>

      <IconArrow
        onClick={handleReturnTop}
        className={navBar ? "returnTop returnTopActive" : "returnTop"}
      />
    </div>
  );
}

export default Navigations;
