import PageBrowser from "./components/pages/PageBrowser";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductCard from "./components/pages/ProductCard";
import Searchs from "./components/pages/Searchs";
import { createContext, useEffect, useState } from "react";
import { users } from "./util/data";
import Profile from "./components/pages/Profile";
import axios from "axios";
import Main from "./components/Browser/Main";
import Login from "./components/pages/Login";

export const ProductContext = createContext();
function App() {
  const [products, setProducts] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(false);
  const navigate = useNavigate();
  /* datagaa oruulj irjiine*/

  useEffect(() => {
    axios
      .get("http://localhost:2022/products")
      .then((products) => setProducts(products.data));
  }, []);

  console.log("products shuu:", products);
  function loginHandler(userName, userPassword) {
    users.map((user) => {
      if (userName === user.userName && userPassword === user.password) {
        if (user.role === "user") {
          navigate("/");
          setIsLoggedIn(true);
        } else {
          navigate("/");
          setIsLoggedIn(true);
        }
      }
    });
  }

  return (
    <div>
      <ProductContext.Provider
        value={{ products: products, setProducts: setProducts }}
      >
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                users={data}
                setData={setData}
                loginHandler={loginHandler}
              />
            }
          />

          <Route path="/" element={<PageBrowser isLoggedIn={isLoggedIn} />}>
            <Route path="/" element={<Main products={products} />} />
            <Route
              path="/product/:id"
              element={<ProductCard products={products} />}
            />
            <Route
              path="/search/:product"
              element={<Searchs products={products} />}
            />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
