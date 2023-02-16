import PageBrowser from "./components/pages/PageBrowser";
import { Route, Routes } from "react-router-dom";
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
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:2022/products")
      .then((products) => setProducts(products.data));
  }, []);

  return (
    <div>
      <ProductContext.Provider value={{ products, setProducts }}>
        <Header />
        <Routes>

          <Route
            path="/login"
            element={<Login />}
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
