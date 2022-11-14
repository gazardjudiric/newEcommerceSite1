import React from "react";
import { Link } from "react-router-dom";

export function ProductCard1(props) {
  const { img, title, price, id } = props.propriete;
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt={"Image de " + title} />
      </div>
      <div className="card-title">
        <h3>
          <Link to={"/ProductDetails/" + id}>{title}</Link>
        </h3>
        <span>$ {price}</span>
      </div>
    </div>
  );
}
