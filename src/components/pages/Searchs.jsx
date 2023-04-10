import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../Style/search.css";
import Product from "../mainComponent/Product";

export default function Searchs() {
  const param = useParams();
  const [serchProduct, setSearchProduct] = useState();
  console.log("paaraam", param);

  useEffect(() => {
    axios
      .post("http://localhost:2000/search", { val: param.value })
      .then((res) => setSearchProduct(res.data));
  }, []);

  console.log(serchProduct);

  return (
    <div className="container SearchCont">
      {serchProduct?.map((e, index) => (
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
  );
}
