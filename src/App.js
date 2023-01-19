//import { useState } from "react";
import PageBrowser from "./components/pages/PageBrowser";
import WelcomePage from "./components/pages/WelcomePage";
import {  Route, Routes, useNavigate } from "react-router-dom";
import ProductCard from "./components/pages/ProductCard";
import Searchs from "./components/pages/Searchs";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(false);

  const Navigate = useNavigate();

  function loginHandler(userName, userPassword) {
    console.log("login handler is running");
    console.log("username:", userName);
    console.log("password:", userPassword);
    users.map((user) => {
      if (userName === user.userName && userPassword === user.password) {
        setIsLoggedIn(true);
        Navigate("/");
      } else {
        console.error("wrong password or user name");
      }
    });
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<PageBrowser />} />

        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="/search/:product" element={<Searchs />} />
        <Route
          path="/login"
          element={
            <WelcomePage
              users={data}
              setData={setData}
              loginHandler={loginHandler}
            />
          }
        />
      </Routes>

      {/* {isLoggedIn ? (
        <PageBrowser setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <WelcomePage setLogin={loginHandler} />
      )} */}
    </div>
  );
}

const users = [
  {
    userName: "bataa",
    password: "zxc",
  },
  {
    userName: "sharva",
    password: "123",
  },
  {
    userName: "suhee",
    password: "iop",
  },
  {
    userName: "suldee",
    password: "qwe",
  },
];

export default App;
