import Navbar from "../main component/Navbar";

import Slider from "../main component/Slider";
import "../../Style/main.css";
import Image from "../main component/Image";
import Bottom from "../m-bottom/Bottom";
import Aside from "../m-bottom/Aside";
import Product from "../main component/Product";

export default function Main() {
  return (
    <div class="Container container">
      <Slider />
      <Navbar />
      <section className="product">
        <Product />
      </section>
      <section
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Image />
      </section>
      <section style={{ display: "flex" }}>
        <Bottom />
        <Aside />
      </section>
    </div>
  );
}
