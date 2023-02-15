import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/header.css";
import "../mainComponent/Basket.jsx";
import Basked from "../mainComponent/Basket.jsx";
//import TestShop from "../main component/TestShop";

export default function Header(prop) {
  const navigate = useNavigate();
  const [val, setVal] = useState("");
  function qwe() {
    navigate(`/search/${val}`);
  }
  function logOut() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("baskets");
  }
  return (
    <div className="header">
      <div className="HeaderCont container">
        <a href="/">
          {" "}
          <img src="./image/E-logo (1).png" alt="#" />
        </a>

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
          {localStorage.getItem("currentUser") ? (
            <div>
              <a href="/profile">
                <img src="./image/profile.svg" alt="#" />
              </a>

              <a className="logOut" href="/" onClick={logOut}>
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
