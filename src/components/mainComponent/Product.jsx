import "../../Style/product.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function Product(props) {
  const navigate = useNavigate();
  function pop() {
    navigate(`/product/${props.id}`);
  }

  return (
    <div className="productContainer">
      <Card id="card" onClick={pop}>
        {props.sale ? (
          <div className="sale">
            <p>Sale {props.sale}% off</p>
          </div>
        ) : (
          <p></p>
        )}
        <Card.Img variant="top" id="cardImg" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <section className="cardBottom">
            <section>
              {props.sale ? <s>{props.price}$</s> : <p></p>}
              <h2>
                {Math.floor(props.price - (props.price * props.sale) / 100)}$
              </h2>
            </section>
            <section>
              <button className="product-button">
                <img className="icon" src="./image/shop.svg" alt="" />
              </button>
            </section>
          </section>
        </Card.Body>
      </Card>
    </div>
  );
}
