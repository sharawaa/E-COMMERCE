import "../../Style/product.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Product(props) {
  return (
    <div>
      <Card style={{ height: "350px", width: "282px" }}>
        <Card.Img
          variant="top"
          style={{ width: "280px", height: "168px" }}
          src={props.image}
        />
        <Card.Body>
          <Card.Title style={{ display: "flex", flexWrap: "wrap" }}>
            {props.title}
          </Card.Title>
          <Card.Text>{props.sale}%</Card.Text>
          <Card.Text>{props.price}$</Card.Text> 
          <Button variant="warning" style={{}}>
            <img
              style={{ width: "30px" }}
              src="https://cdn0.iconfinder.com/data/icons/finance-e-commerce/53/cart-shoping-trolly-plain-128.png"
              alt=""
            />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
