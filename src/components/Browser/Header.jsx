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
          <input onChange={(e) => setVal(e.target.value)} type="" />
          <button onClick={qwe} id="searchButton">
            Search
          </button>
        </section>

        <section style={{ display: "flex" }}>
          {prop.isLoggedIn ? (<div>
            <a href="##">
              <img
                src="https://cdn2.iconfinder.com/data/icons/user-interface-169/32/about-512.png"
                alt="#"
              />
            </a>
            <a href="profile" id="profile">
              Profile
            </a>
            <a href="/">Log out</a>
          </div>):(<div>
           
            <a href="login" id="signIn">
              sign in
            </a>
          </div>)}
          


          
          <a href="##">
            <img
              src="https://cdn0.iconfinder.com/data/icons/finance-e-commerce/53/cart-shoping-trolly-plain-128.png"
              alt=""
            />
          </a>

          <p className="shopingP">+0</p>
          
        </section>
      </div>
    </div>
  );
}
