import "../../Style/product.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
export default function Product(props) {
  const navigate = useNavigate();
  function pop() {
    navigate(`/product/${props.id}`);
  }

  return (
    <div className="productContainer">
      <Card className="card" onClick={pop}>
        <Card.Img variant="top" className="cardImg" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.sale}%</Card.Text>
          <Card.Text>{props.price}$</Card.Text>
          <Button variant="warning" style={{}}>
            <img
              className="icon"
              src="https://cdn0.iconfinder.com/data/icons/finance-e-commerce/53/cart-shoping-trolly-plain-128.png"
              alt=""
            />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
