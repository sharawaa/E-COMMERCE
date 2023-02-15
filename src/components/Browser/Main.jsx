import Navbar from "../mainComponent/Navbar";

import Slider from "../mainComponent/Slider";
import "../../Style/main.css";
import Image from "../mainComponent/Image";
// import Bottom from "../m-bottom/Bottom";
// import Aside from "../m-bottom/Aside";
// import Product from "../main component/Product";

export default function Main(props) {
  const { products } = props;
  return (
    <div className="Container">
      <Slider />
      <Navbar products={products} />

      <section
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Image />
      </section>
      <section style={{ display: "flex" }}>
        {/* <Bottom />
        <Aside /> */}
      </section>
    </div>
  );
}
