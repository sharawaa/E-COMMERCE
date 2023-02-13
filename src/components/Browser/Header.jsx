import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/header.css";
import "../main component/Basket.jsx";
import Basked from "../main component/Basket.jsx";
//import TestShop from "../main component/TestShop";

export default function Header(prop) {
  const { isLoggedIn } = prop;
  const navigate = useNavigate();
  const [val, setVal] = useState("");
  function qwe() {
    navigate(`/search/${val}`);
  }
  return (
    <div className="header">
      <div className="HeaderCont container">
        <img src="./image/E-logo (1).png" alt="#" />

        <section>
          <input
            placeholder="Search any things"
            className="searchInp"
            onChange={(e) => setVal(e.target.value)}
            type=""
          />
          <button onClick={qwe} id="searchButton">
            Search
          </button>
        </section>

        <section style={{ display: "flex" }}>
          {isLoggedIn ? (
            <div>
              <a href="/profile">
                <img src="./image/profile.svg" alt="#" />
              </a>

              <a className="logOut" href="/">
                Log out
              </a>
            </div>
          ) : (
            <a href="login" id="signIn">
              sign in
            </a>
          )}
          {/* <TestShop /> */}
          <Basked />

          <p className="shopingP">+0</p>
        </section>
      </div>
    </div>
  );
}
