import "../../Style/header.css";

export default function Header(prop) {
  const { setIsLoggedIn } = prop;
  return (
    <div className="header">
      <div className="container">
        <img src="./E-logo (1).png" alt="#" />

        <section>
          <input type="" />
          <button id="searchButton">Search</button>
        </section>

        <section style={{ display: "flex" }}>
          <a href="##">
            <img
              src="https://cdn2.iconfinder.com/data/icons/user-interface-169/32/about-512.png"
              alt="#"
            />
          </a>
          <a href="##" id="signIn">
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
