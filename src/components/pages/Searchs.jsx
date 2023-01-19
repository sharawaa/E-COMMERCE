import { useParams } from "react-router-dom";
import { DATA } from "../../util/data";
import "../../Style/search.css"

import Product from "../main component/Product";

export default function Searchs() {
  const test = useParams();

  let dat = DATA.filter((a) =>
    a.name.toLowerCase().includes(test.product.toLowerCase())
  );

  return (
    <div className="container SearchCont">
      {dat.map((e) => (
        <Product
          title={e.name}
          image={e.image}
          description={e.description}
          price={e.price}
          sale={e.sale}
          id={e.id}
        />
      ))}
    </div>
  );
}
