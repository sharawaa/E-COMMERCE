import axios from "axios";
import { useParams } from "react-router-dom";
import "../../Style/search.css";

export default function Searchs() {
  const param = useParams();

  console.log("products",param)


  
  // let dat = products.filter((product) =>
  // product.name.toLowerCase().includes(test.product.toLowerCase())
  // );

  return (
    <div className="container SearchCont">
      {/* {dat.map((e, index) => (
        <Product
          key={index}
          title={e.name}
          image={e.image}
          description={e.description}
          price={e.price}
          sale={e.sale}
          id={e.id}
        />
      ))} */}
     
    </div>
  );
}
