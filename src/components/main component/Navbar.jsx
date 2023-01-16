import "../../Style/nav.css"
export default function Navbar() {
  return <div className="navContainer">
    <section>
        <img src="./Popular products.png" alt="" />
    </section>

    <section>
      <button className="groupButton">Cameras</button>
      <button className="groupButton">Laptops</button>
      <button className="groupButton">Tablets</button>
      <button className="groupButton">Mouse</button>
      <button className="groupButton">Sale</button>
    

    </section>

  </div>;
}
