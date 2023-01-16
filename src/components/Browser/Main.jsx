import Navbar from "../main component/Navbar";
import Products from "../main component/Products";
import Slider from "../main component/Slider";
import '../../Style/main.css';
import Image from "../main component/Image";
import Bottom from "../m-bottom/Bottom";
import Aside from "../m-bottom/Aside";

export default function Main() {
  
  return (
    <div class="Container container">
      <Slider />
      <Navbar />
      <section className="productC">
        <Products />
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
