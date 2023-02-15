import axios from "axios";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


export default function OrderModal() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let baskets = JSON.parse(localStorage.getItem("baskets"));
  let user = localStorage.getItem("currentUser");


  // let orderProducts =
  //   products &&
  //   products.filter(
  //     (product) =>
  //       baskets && baskets.find((findBaskets) => findBaskets.id == product.id)
  //   );

  function toOrder(e) {
    e.preventDefault();
    let object = {
      address: e.target.homeAddress.value,
      phone: e.target.phoneNumber.value,
      date: new Date().toLocaleDateString(),
      orderProducts: baskets,
      userId: user,
    };
    axios
      .post("http://localhost:2022/orders", object)
      .then((res) => console.log(res));

    console.log("hayg", e.target.homeAddress.value);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={toOrder}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <section>
              <p>hurguuleh haygaa bichne uu</p>
              <input type="text" name="homeAddress" />
            </section>
            <section>
              <p>utasniii dugaaraa oruulaache pisda</p>
              <input type="text" name="phoneNumber" />
            </section>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
