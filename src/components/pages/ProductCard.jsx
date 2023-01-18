import { useNavigate, useParams } from "react-router-dom";
import { DATA } from "../../util/data";
import Footer from "../Browser/Footer";
import Header from "../Browser/Header";
import "../../Style/productCard.css";

export default function ProductCard() {
  const test = useParams();
  console.log(test.id);
  let data = DATA.filter((asd) => asd.id.includes(test.id));

  return (
    <>
      <Header />
      <div className="container">
        <div className="imgContainer">
          <img src={data[0].image} alt="" />
        </div>
        <div className="information">
          <h1>{data[0].name}</h1>
        </div>
      </div>
    </>
  );
}
