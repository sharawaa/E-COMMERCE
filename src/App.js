//import { useState } from "react";
import PageBrowser from "./components/pages/PageBrowser";
import WelcomePage from "./components/pages/WelcomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*function loginHandler(userName, password) {
    console.log("login handler is running");
    console.log("username:", userName);
    console.log("password:", password);
    data.map((user) =>{
      if (userName === user.userName && password === user.password) {
        setIsLoggedIn(true);
      } else {
        console.error("wrong password or user name");
      }
    });
  }*/

  return (
    <div>
      <Routes>
<Route path="/" element={<PageBrowser />}/>
<Route path="/welcomePage" element ={<WelcomePage />}/>
            </Routes>





      {/* {isLoggedIn ? (
        <PageBrowser setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <WelcomePage setLogin={loginHandler} />
      )} */}
    </div>
  );
}

const data = [
  {
    userName: "bataa",
    password: "zxc",
  },
  {
    userName: "sharva",
    password: "asd",
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
