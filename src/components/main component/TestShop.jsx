import React, { useContext, useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import "../../Style/testShop.css"
import { ProductContext } from "../../App";

export default function TestShop() {
  const { data } = useContext(ProductContext)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [stocks, setStocks] = useState();
  const [cardProd, setCardProd] = useState([]);
  let baskets = JSON.parse(localStorage.getItem("baskets"));
  let arr = [];
  baskets &&
  useEffect(() => {
    baskets.forEach((stocks) => {
      return arr.push(stocks.stock);
    });
    let i = arr.length >= 1 && arr.reduce((prev, curr) => prev + curr);
    setStocks(i);
    let filter =
      data &&
      data.filter((product) => baskets.find((a) => a.id === product.id));
    setCardProd(filter);
  }, [show]);

function deleteProduct(id) {
  let deleteProduct =
    baskets && baskets.filter((delProd) => delProd.id !== id);
  localStorage.setItem("baskets", JSON.stringify(deleteProduct));
}

function chechout() {
  console.log(cardProd);
  console.log("dataa shuu",data)
}
return (
  <>
    <Button className="shopbtn" onClick={handleShow}>
   
      <div className="frame-round">{stocks ? stocks : 0}</div>
    </Button>

    <Offcanvas
      className="shop-offcanvas"
      placement="end"
      show={show}
      onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <div className="canvas-title">
         
            <h5>Your basket</h5>
          </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cardProd &&
          cardProd.map((product, index) => (
            <div className="shop-canvas-prod" key={index}>
            
              <div className="descr">
                <p className="name">{product.name}</p>
                <p className="stock">quantity: {baskets[index].stock}</p>
                <span className="desc-price">${product.price}</span>
              </div>
              <button
                className="delete-button"
                onClick={() => deleteProduct(product.id)}
              >
            
              </button>
            </div>
          ))}
        <div className="checkout">
          <p>Total: </p>
          <button onClick={chechout} className="chechout-button">
            CHECKOUT
          </button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  </>
);
}
