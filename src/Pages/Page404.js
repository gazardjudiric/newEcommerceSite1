import React from "react";
import Image3 from "../Assets/Images/Pages404/image3.gif";
import { Link } from "react-router-dom";

function Page404(props) {
  return (
    <div className="page404">
      <img src={Image3} alt="404" />
      <Link className="btn" to="/Product">
        Cliquez pour choisir des Produits
      </Link>
    </div>
  );
}

export default Page404;
