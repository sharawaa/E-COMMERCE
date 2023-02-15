import { useParams } from "react-router-dom";
//import { DATA } from "../../util/data";
import "../../Style/search.css";

import Product from "../mainComponent/Product";

export default function Searchs(props) {
  const test = useParams();
  const { products } = props;

  let dat = products.filter((a) =>
    a.name.toLowerCase().includes(test.product.toLowerCase())
  );

  return (
    <div className="container SearchCont">
      {dat.map((e, index) => (
        <Product
          key={index}
          title={e.name}
          image={e.image}
          description={e.description}
          price={e.price}
          sale={e.sale}
          id={e.id}
        />
      ))}
    </div>
    // function deleteHandler(id){
    //   let deleteHandler =
    //   basketItem && basketItem.filter((delProd) => delProd.id !== id);
    // localStorage.setItem("baskets", JSON.stringify(deleteHandler));
    // }
  );
}
