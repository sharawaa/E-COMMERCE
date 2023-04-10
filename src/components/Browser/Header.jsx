import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/header.css";
import "../mainComponent/Basket.jsx";
import Basked from "../mainComponent/Basket.jsx";
//import TestShop from "../main component/TestShop";

export default function Header() {
  const navigate = useNavigate();

  //query geer paramsaa barij avaad shidne

  function searchHandler(e) {
    e.preventDefault();

    navigate(`/search/${e.target.search.value}`);
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

        <form onSubmit={searchHandler}>
          <input
            placeholder="Search any things"
            className="searchInp"
            name="search"
          />
          <button type="submit" id="searchButton">
            Search
          </button>
        </form>

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
          <Basked />

          <p className="shopingP">+0</p>
        </section>
      </div>
    </div>
  );
}
