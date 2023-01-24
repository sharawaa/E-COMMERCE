import PageBrowser from "./components/pages/PageBrowser";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductCard from "./components/pages/ProductCard";
import Searchs from "./components/pages/Searchs";
import { useState } from "react";
import { users } from "./util/data";
import Profile from "./components/pages/Profile";

import Main from "./components/Browser/Main";
import Login from "./components/pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(false);

  const navigate = useNavigate();

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
      </Routes>
    </div>
  );
}

export default App;
