import { useState } from "react";
import "../../Style/nav.css";
import { DATA } from "../../util/data";
import Product from "./Product";

export default function Navbar() {
  const [Input, setInput] = useState(DATA);
  function sharva(e) {
    if (e.target.innerText === "All") {
      setInput(DATA);
    } else {
      let hoho = DATA.filter((product) => product.category === e.target.innerText);
      setInput(hoho);
    }
  }
  // console.log(Input);
  return (
    <>
      <div className="navContainer">
        <section>
          <img src="./Popular products.png" alt="" />
        </section>

        <section>
          <button className="groupButton" onClick={sharva}>All</button>
          <button className="groupButton" onClick={sharva}>appliances</button>
          <button className="groupButton" onClick={sharva}>computers & tablets</button>
          <button className="groupButton" onClick={sharva}>gaming console</button>
          <button className="groupButton" onClick={sharva}>telescope</button>
        </section>
      </div>

      <div>
        {Input.map((unit) => (
          <Product
            title={unit.name}
            image={unit.image}
            description={unit.description}
            price={unit.price}
            sale={unit.sale}
          />
        ))}
      </div>
    </>
  );
}
