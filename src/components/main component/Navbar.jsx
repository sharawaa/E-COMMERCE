import { useContext, useState } from "react";
import "../../Style/nav.css";
//import { DATA } from "../../util/data";
import Product from "./Product";
import { ProductContext } from "../../App";
export default function Navbar(props) {
  const { products, setProducts } = useContext(ProductContext);
  //const [Input, setInput] = useState(products);
  function sharva(e) {
    if (e.target.innerText === "All") {
      setProducts(products);
    } else {
      let hoho = products.filter(
        (product) => product.category === e.target.innerText
      );
      setProducts(hoho);
    }
  }
  // console.log(Input);
  return (
    <div className="container">
      <div className="navContainer">
        <section className="imgNav">
          <img src="./image/Popular products.png" alt="" />
        </section>

        <section>
          <button className="groupButton" onClick={sharva}>
            All
          </button>
          <button className="groupButton" onClick={sharva}>
            appliances
          </button>
          <button className="groupButton" onClick={sharva}>
            computers & tablets
          </button>
          <button className="groupButton" onClick={sharva}>
            gaming console
          </button>
          <button className="groupButton" onClick={sharva}>
            telescope
          </button>
        </section>
      </div>

      <div className="products">
        {products.map((unit, index) => (
          <Product
            key={index}
            title={unit.name}
            image={unit.image}
            description={unit.description}
            price={unit.price}
            sale={unit.sale}
            id={unit.id}
          />
        ))}
      </div>
    </div>
  );
}
