import listOfAllProducts from "../rawData/Articles";
import EmpityImg from "../Assets/Images/Pages404/emptyImg.svg";
import InProgessImg from "../Assets/Images/Pages404/inProgress.gif";
import { Link } from "react-router-dom";

export function getSofaProduct() {
  const sofaArray = listOfAllProducts.filter(
    (product) => product.category === "sofa"
  );

  return sofaArray;
}

export function getTablesProduct() {
  const tablesArray = listOfAllProducts.filter(
    (product) => product.category === "tables"
  );

  return tablesArray;
}

export function getChaisesProduct() {
  const chaisesArray = listOfAllProducts.filter(
    (product) => product.category === "chaises"
  );

  return chaisesArray;
}

export function getLitsProduct() {
  const litsArray = listOfAllProducts.filter(
    (product) => product.category === "lits"
  );

  return litsArray;
}

export function getEclairagesProduct() {
  const eclairagesArray = listOfAllProducts.filter(
    (product) => product.category === "eclairages"
  );

  return eclairagesArray;
}

export function getDecoresProduct() {
  const decoresArray = listOfAllProducts.filter(
    (product) => product.category === "decores"
  );

  return decoresArray;
}

export function ExplainText(props) {
  const { title, description } = props.propriete;
  return (
    <div className="explainContent">
      <div className="explainHome">
        <h1 className="explainTextTitle">{title}</h1>
        <p className="explainTextParagraph">{description}</p>
      </div>
    </div>
  );
}

export function OtherBanner(props) {
  const { img, title, route } = props.propriete;
  return (
    <div className="bannerForProduct">
      <div>
        <img src={img} alt={"Image de" + img} />
      </div>
      <h1>{title}</h1>
      <p>{route}</p>
    </div>
  );
}

export function GrilleImage({ img }) {
  return (
    <div className="grilleImage">
      <img src={img} alt={"Image de" + img} />
    </div>
  );
}

export function EmpityImage() {
  return (
    <div className="emptyImg">
      <img src={EmpityImg} alt="Produit vide" />
      <div>
        <h1>Pas de Produit</h1>
        <Link className="btn" to="/Product">
          Cliquez pour choisir des Produits
        </Link>
      </div>
    </div>
  );
}

export function EnDevelopment() {
  return (
    <div className="endevopmennt">
      <img src={InProgessImg} alt="En cour de dévelopement" />
      <Link to="/" className="btn">
        Retour a la page d'acceuil
      </Link>
    </div>
  );
}
