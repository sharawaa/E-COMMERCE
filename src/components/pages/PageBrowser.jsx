import { Outlet } from "react-router-dom";
import Footer from "../Browser/Footer";
import Header from "../Browser/Header";
//import Main from "../Browser/Main";
export default function PageBrowser(prop) {
  //const { setIsLoggedIn } = prop;
  const { isLoggedIn } = prop;
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className="App"
    >
      <Header isLoggedIn={isLoggedIn} />
      <Outlet />
      <Footer />
    </div>
  );
}
