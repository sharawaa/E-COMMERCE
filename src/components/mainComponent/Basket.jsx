import React, { useState } from "react";
import "../../Style/basked.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import { ProductContext } from "../../App";
import OrderModal from "./OrderModal";

export default function Basked() {
  const { products } = useContext(ProductContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let basketItem = JSON.parse(localStorage.getItem("baskets"));

  let basketProduct =
    products &&
    products.filter(
      (product) =>
        basketItem &&
        basketItem.find((findProduct) => findProduct.id === product.id)
    );
  function orderDeleteHandler() {
    localStorage.removeItem("baskets");
  }

  return (
    <>
      <a onClick={handleShow} href="##">
        <img src="./image/tereg.svg" alt="" />
      </a>

      <Offcanvas
        className="Offcanvas"
        placement="end"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="offTitle">
              <div>Таны сагс</div>
              <div>
                <button onClick={orderDeleteHandler}>Сагс хоослох</button>
              </div>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {basketProduct.map((prod, index) => {
            return (
              <div key={index} className="basket-product">
                <img className="basket-image" src={prod.image} alt="" />
                <h5>{prod.name}</h5>
                <h6>quanty {basketItem && basketItem[index].stock}</h6>
                <h6>price-{prod.price * basketItem[index].stock}$</h6>
              </div>
            );
          })}
        </Offcanvas.Body>
        <p>{}</p>
        <OrderModal />
      </Offcanvas>
    </>
  );
}
