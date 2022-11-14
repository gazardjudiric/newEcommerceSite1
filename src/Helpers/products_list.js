import React from "react";
import { ProductCard1 } from "../Components/Globals/cards";
import { Tabs1 } from "../Components/Globals/tabs";
import { Link } from "react-router-dom";
import {
  getChaisesProduct,
  getDecoresProduct,
  getEclairagesProduct,
  getLitsProduct,
  getSofaProduct,
  getTablesProduct,
} from "./Helper.js";

export function HomeProductsList1(props) {
  const tablist = [
    {
      label: "Sofa",
      render: (
        <div className="homeCards">
          {getSofaProduct().map((el, index) => (
            <ProductCard1
              key={index}
              propriete={{
                img: el.img,
                title: el.title,
                id: el.id,
                price: el.price,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      label: "Tables",
      render: (
        <div className="homeCards">
          {getTablesProduct().map((el, index) => (
            <ProductCard1
              key={index}
              propriete={{
                img: el.img,
                title: el.title,
                id: el.id,
                price: el.price,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      label: "Chaises",
      render: (
        <div className="homeCards">
          {getChaisesProduct().map((el, index) => (
            <ProductCard1
              key={index}
              propriete={{
                img: el.img,
                title: el.title,
                id: el.id,
                price: el.price,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      label: "Lits",
      render: (
        <div className="homeCards">
          {getLitsProduct().map((el, index) => (
            <ProductCard1
              key={index}
              propriete={{
                img: el.img,
                title: el.title,
                id: el.id,
                price: el.price,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      label: "Eclairage",
      render: (
        <div className="homeCards">
          {getEclairagesProduct().map((el, index) => (
            <ProductCard1
              key={index}
              propriete={{
                img: el.img,
                title: el.title,
                id: el.id,
                price: el.price,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      label: "Decore",
      render: (
        <div className="homeCards">
          {getDecoresProduct().map((el, index) => (
            <ProductCard1
              key={index}
              propriete={{
                img: el.img,
                title: el.title,
                id: el.id,
                price: el.price,
              }}
            />
          ))}
        </div>
      ),
    },
  ];
  return (
    <div className="product1">
      <div className="product1Text">
        <div>
          <h2>Popular Products</h2>
          <span>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla.
          </span>
        </div>
      </div>

      <div>
        <Tabs1 props={{ tablist }} />
      </div>
    </div>
  );
}

export function HomeProductsList2(props) {
  return (
    <div className="product2">
      <div className="product2Text">
        <div>
          <h2>Products you may like</h2>
          <span>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla.
          </span>
        </div>
      </div>

      <div className="homeCards">
        {getChaisesProduct().map((el, index) => (
          <ProductCard1
            key={index}
            propriete={{
              img: el.img,
              title: el.title,
              id: el.id,
              price: el.price,
            }}
          />
        ))}
      </div>

      <Link className="btn discoverMoreOpenProductList2" to="/Product">
        Discover More
      </Link>
    </div>
  );
}

export function HomeProductList3(props) {
  return (
    <div className="product3">
      <div className="product3Text">
        <div>
          <h2>Top Pick</h2>
          <span>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla.
          </span>
        </div>
      </div>

      <div className="homeCards">
        {getTablesProduct().map((el, index) => (
          <ProductCard1
            key={index}
            propriete={{
              img: el.img,
              title: el.title,
              id: el.id,
              price: el.price,
            }}
          />
        ))}
      </div>

      <Link className="btn discoverMoreOpenProductList3" to="/Product">
        Discover More
      </Link>
    </div>
  );
}
