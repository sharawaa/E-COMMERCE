import { useContext, useState } from "react";
import "../../Style/nav.css";
//import { DATA } from "../../util/data";
import Product from "./Product";
import { ProductContext } from "../../App";
export default function Navbar() {
  const { products } = useContext(ProductContext);
  const [filterProduct, setFilterProduct] = useState([]);

  //const [Input, setInput] = useState(products);
  function filterHandler(e) {
    if (e.target.innerText === "All") {
      setFilterProduct(products);
    } else {
      let data =
        products &&
        products.filter((product) => product.category === e.target.innerText);
      setFilterProduct(data);
      console.log(e.target.innerText);
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
          <button className="groupButton" onClick={filterHandler}>
            All
          </button>
          <button className="groupButton" onClick={filterHandler}>
            appliances
          </button>
          <button className="groupButton" onClick={filterHandler}>
            computers & tablets
          </button>
          <button className="groupButton" onClick={filterHandler}>
            gaming console
          </button>
          <button className="groupButton" onClick={filterHandler}>
            telescope
          </button>
        </section>
      </div>

      <div className="products">
        {filterProduct.map((unit, index) => (
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
