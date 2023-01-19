import { useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import "../../Style/header.css";

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
        <img src="./E-logo (1).png" alt="#" />

        <section>
          <input placeholder="Search any things" className="searchInp" onChange={(e) => setVal(e.target.value)} type="" />
          <button onClick={qwe} id="searchButton">
            Search
          </button>
        </section>

        <section style={{ display: "flex" }}>
          {isLoggedIn ? (
            <div>
              <a href="/profile">
                <img
                  src="./profile.svg"
                  alt="#"
                />
              </a>

              <a className="logOut" href="/">Log out</a>
            </div>
          ) : (
            
              <a href="login" id="signIn">
                sign in
              </a>
            
          )}

          <a href="##">
          <img  src="./tereg.svg" alt="" />
          </a>

          <p className="shopingP">+0</p>
        </section>
      </div>
    </div>
  );
}
