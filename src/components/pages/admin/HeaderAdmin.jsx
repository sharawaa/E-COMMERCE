import "./adminStyle/aHeader.css"


export default function HeaderAdmin() {
  return (
    <div className="container aHeader">
      <a href="##">
        <img src="./Logo.png" alt="" />
      </a>
      <section >
        <input className="aSearchInput" type="text" />
        <button className="aSearchButton">Search</button>
      </section>
      <a href="/"><img src="./log out.png" alt="" /></a>
    </div>
  );
}
