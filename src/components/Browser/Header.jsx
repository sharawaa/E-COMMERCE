import { useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import "../../Style/header.css";

export default function Header(prop) {
  const { setIsLoggedIn } = prop;
  const navigate = useNavigate();
  const [val, setVal] = useState("");
  function qwe() {
    navigate(`/search/${val}`);
  }
  return (
    <div className="header">
      <div className="container">
        <img src="./E-logo (1).png" alt="#" />

        <section>
          <input onChange={(e) => setVal(e.target.value)} type="" />
          <button onClick={qwe} id="searchButton">
            Search
          </button>
        </section>

        <section style={{ display: "flex" }}>
          <a href="##">
            <img
              src="https://cdn2.iconfinder.com/data/icons/user-interface-169/32/about-512.png"
              alt="#"
            />
          </a>
          <a href="login" id="signIn">
            sign in
          </a>
          <a href="##">
            <img
              src="https://cdn0.iconfinder.com/data/icons/finance-e-commerce/53/cart-shoping-trolly-plain-128.png"
              alt=""
            />
          </a>

          <p className="shopingP">+0</p>
          <button
            type="button"
            href="/"
            class="btn btn-light"
            style={{ marginLeft: "30px" }}
            onClick={() => setIsLoggedIn(false)}
          >
            Log out
          </button>
        </section>
      </div>
    </div>
  );
}
