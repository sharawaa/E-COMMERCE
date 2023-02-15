import {  useParams } from "react-router-dom";
//import { DATA } from "../../util/data";

import "../../Style/productCard.css";
import { useState, useContext } from "react";
import { ProductContext } from "../../App";

export default function ProductCard() {
  const { products } = useContext(ProductContext);
  const test = useParams();

  let data = products && products.filter((product) => product.id === test.id);
  const [x, setX] = useState(0);

  function add() {
    if (x < data[0].stock) {
      setX(x + 1);
    } else {
    }
  }
  function min() {
    if (x > 1) {
      setX(x - 1);
    }
  }
  function addBasket() {
    let baskets = [];
    setX(0);

    if (localStorage.getItem("baskets")) {
      baskets = JSON.parse(localStorage.getItem("baskets"));
      const findData = baskets.find((product) => product.id === data[0].id);

      if (findData) {
        baskets[baskets.indexOf(findData)].stock =
          baskets[baskets.indexOf(findData)].stock + x;
        baskets = [...baskets];
      } else {
        baskets = [...baskets, { id: data[0].id, stock: x }];
      }
    } else {
      baskets = [...baskets, { id: data[0].id, stock: x }];
    }
    localStorage.setItem("baskets", JSON.stringify(baskets));
  }
  return (
    <div className="card-container">
      <div className="imgContainer">
        {data.length > 0 && <img src={data[0].image} alt="" />}
      </div>

      <div className="information">
        <section className="PCardTop">
          <h1>{data.length > 0 && data[0].name}</h1>
          <h4>
            {data.length > 0 &&
              Math.floor(data[0].price - (data[0].price * data[0].sale) / 100)}
            $
          </h4>
          <p>Availability: {data.length > 0 && data[0].stock}</p>

          <p>
            Hurry up! only {data.length > 0 && data[0].stock} product left in
            stock!
          </p>
        </section>

        <section className="PCardMain">
          <section style={{ display: "flex" }} className="quanty">
            <h6>Quantity:</h6>
            <button onClick={min}>-</button>
            {/* <input type="text" defaultValue={x} /> */}
            {x}
            <button onClick={add}>+</button>
          </section>

          <section className="twoButton">
            <button onClick={addBasket}>Add to cart</button>
            <button>Buy it now</button>
          </section>
        </section>

        <section className="proCard-footer">
          <h6>sku: 01133-9-9</h6>
          <h6>Category: {data.length > 0 && data[0].category}</h6>

          <section className="proCard-share">
            <h6>Share: </h6>
            <section className="proCard-img">
              <img
                style={{ width: "30px" }}
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt=""
              />
              <img
                style={{ width: "30px", margin: "0px 50px" }}
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt=""
              />
              <img
                style={{ width: "30px" }}
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt=""
              />
            </section>
          </section>
        </section>
      </div>
    </div>
  );
}
