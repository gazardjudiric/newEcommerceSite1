import React from "react";
import { IconClosed } from "../Assets/Icons/icons.js";
import { EmpityImage } from "../Helpers/Helper.js";

function Pannier({ intoCart, setIntoCart }) {
  function handleDecrementPannier(el, index) {
    const copy = [...intoCart];
    if (el.quantity !== 0) {
      copy[index].quantity--;
      localStorage.setItem("tablePannier", JSON.stringify(copy));
      setIntoCart(copy);
    }
  }

  function handleIncrementPannier(index) {
    const copy = [...intoCart];
    copy[index].quantity++;
    localStorage.setItem("tablePannier", JSON.stringify(copy));
    setIntoCart(copy);
  }

  function handleInput(e, index) {
    const copy = [...intoCart];
    if (e.target.value >= 0) {
      copy[index].quantity = e.target.value;
      localStorage.setItem("tablePannier", JSON.stringify(copy));
      setIntoCart(copy);
    } else {
    }
  }

  // function sousTotal() {
  //   console.log(copy);
  //   var valeurSousTotal = 0;
  //   for (let i = 0; i < copy.length + 1; i++) {
  //     const total = copy[i].quantity * parseInt(copy[i].price);
  //     valeurSousTotal = valeurSousTotal + total;
  //   }
  //   return valeurSousTotal;
  // }

  function handleClick(index) {
    setIntoCart((prev) => {
      const copy = [...prev];
      copy.splice(index, 1);
      localStorage.setItem("tablePannier", JSON.stringify(copy));
      return copy;
    });
  }

  return (
    <div>
      {intoCart.length !== 0 ? (
        <div className="pannierHome">
          <div className="pannierInfoProduct">
            <div className="pannierInfoProductHead">
              <h1>Mon Pannier</h1>
              <span>Les articles seront réservés pendant 60 minutes</span>
            </div>
            {intoCart.map((el, index) => (
              <div key={index} className="pannierInfoProductDetails">
                <div className="pannierInfoProductDetailsContent">
                  <div>
                    <img src={el.img} alt={"Image de " + el.img} />
                  </div>
                  <div>
                    <span>${el.price}</span>
                    <h2>{el.title}</h2>
                    <span>{el.category}</span>
                    <span>Quantity : {el.quantity}</span>
                    <span>
                      Total of this product: ${parseInt(el.price) * el.quantity}
                    </span>
                  </div>
                </div>

                <div>
                  <IconClosed onClick={() => handleClick(index)} />

                  <div className="displayAddToCard  displayAddToCardPanier">
                    <span onClick={() => handleDecrementPannier(el, index)}>
                      -
                    </span>

                    <input
                      type="nombre"
                      value={el.quantity}
                      onChange={(e) => handleInput(e, index)}
                    />

                    <span onClick={() => handleIncrementPannier(index)}>+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pannierPay">
            <div className="pannierPayContent">
              <h2>Total</h2>
              <div>
                <ul>
                  <li>
                    <h3>Sous-total</h3>
                    {/* <span>{sousTotal()}</span> */}
                  </li>
                  <li>
                    <h3>Livraison</h3>
                    <span>Partout dans le monde</span>
                  </li>
                </ul>
                {/* <input type="text" /> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmpityImage />
      )}
    </div>
  );
}

export default Pannier;
