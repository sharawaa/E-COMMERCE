//import { useState } from "react";
import PageBrowser from "./components/pages/PageBrowser";

import { Route, Routes, useNavigate } from "react-router-dom";
import ProductCard from "./components/pages/ProductCard";
import Searchs from "./components/pages/Searchs";
import { useState } from "react";
import { users } from "./util/data";
//import Header from "./components/Browser/Header";
import Profile from "./components/pages/Profile";
//import HeaderAdmin from "./components/pages/admin/HeaderAdmin";
import AdminHome from "./components/pages/admin/AdminHome";
import Main from "./components/Browser/Main";
import Login from "./components/pages/Login";
import Settings from "./components/pages/admin/adminPages/Settings";
import Control from "./components/pages/admin/adminPages/Control";
import AdminUsers from "./components/pages/admin/adminPages/AdminUsers";
import Moderator from "./components/pages/admin/adminPages/Moderator";
import Product from "./components/main component/Product";
import AdminProduct from "./components/pages/admin/adminPages/AdminProduct";
import Orders from "./components/pages/admin/adminPages/Orders";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(false);

  const Navigate = useNavigate();

  function loginHandler(userName, userPassword) {
    users.map((user) => {
      if (userName === user.userName && userPassword === user.password) {
        if (user.role === "admin") {
          Navigate("/admin");
          setIsLoggedIn(true);
        } else {
          Navigate("/");
          setIsLoggedIn(true);
        }
      }
    });
  }

  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <Login users={data} setData={setData} loginHandler={loginHandler} />
          }
        />

        <Route path="/" element={<PageBrowser isLoggedIn={isLoggedIn} />}>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/search/:product" element={<Searchs />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/admin" element={<AdminHome />}>
          <Route path="/admin/control" element={<Control />} />
          <Route path="admin/product" element={<AdminProduct />} />
          <Route path="admin/order" element={<Orders />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/moderator" element={<Moderator />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
