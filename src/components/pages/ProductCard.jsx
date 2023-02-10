import { useNavigate, useParams } from "react-router-dom";
//import { DATA } from "../../util/data";

import "../../Style/productCard.css";
import { useState, useContext } from "react";
import { ProductContext } from "../../App";

export default function ProductCard() {
  const { products } = useContext(ProductContext);
  const test = useParams();
  console.log("productCatrd id", products);

  let data = products.filter((asd) => asd.id === test.id);
  const [x, setX] = useState(data[0].stock);
  console.log("productCatrd data", data);

  function add() {
    if (x) {
      setX(x + 1);
    } else {
    }
  }
  function min() {
    setX(x - 1);
  }
  return (
    <div className="card-container">
      <div className="prod-card">
        <div className="imgContainer">
          <img src={data[0].image} alt="" />
        </div>

        <div className="information">
          <section className="PCardTop">
            <h1>{data[0].name}</h1>
            <s>{data[0].price}$</s>
            <p>Availability:</p>
            <p>{data[0].description}</p>
          </section>
          <section className="PCardMain">
            <section style={{ display: "flex" }} className="quanty">
              <h5>Quantity:</h5>
              <button onClick={min}>-</button>
              {x}
              <button onClick={add}>+</button>
            </section>

            <section className="twoButton">
              <button>Add to cart</button>
              <button>Buy it now</button>
            </section>
          </section>
          <section>
            <p>sku: 01133-9-9</p>
          </section>
        </div>
      </div>
    </div>
  );
}
