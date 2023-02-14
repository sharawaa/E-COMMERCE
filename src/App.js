import PageBrowser from "./components/pages/PageBrowser";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductCard from "./components/pages/ProductCard";
import Searchs from "./components/pages/Searchs";
import { createContext, useEffect, useState } from "react";
import Profile from "./components/pages/Profile";
import axios from "axios";
import Main from "./components/Browser/Main";
import Login from "./components/pages/Login";
import Header from "./components/Browser/Header";

export const ProductContext = createContext();
function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [data, setData] = useState(false);
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:2022/users")
      .then((users) => setUsers(users.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:2022/products")
      .then((products) => setProducts(products.data));
  }, []);

  function loginHandler(userName, userPassword) {
    users.map((user) => {
      if (
        (userName === user.email ||
          userName === user.phone ||
          userName === user.userName) &&
        userPassword === user.password
      ) {
        navigate("/");
        localStorage.setItem("currentUser", user.id);
      }
    });
  }

  return (
    <div>
      <ProductContext.Provider value={{ products, setProducts }}>
        <Header />
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

          <Route path="/" element={<PageBrowser />}>
            <Route path="/" element={<Main products={products} />} />
            <Route path="/product/:id" element={<ProductCard />} />
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
