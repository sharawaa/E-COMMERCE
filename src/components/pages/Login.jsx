import { useState } from "react";
import "../../Style/login.css";
import Register from "../mainComponent/Register";

export default function Login(prop) {

  const { loginHandler } = prop;
  const [userName1, setUserName] = useState("");
  const [password1, setPassword] = useState("");

  return (
    <div className="ContainerW ">
      <div className="cards">
        <section className="userCont">
          <img src="./image/Logo.png" alt="" />
          <input
            className="input1"
            type="text"
            placeholder="И-мэйл эсвэл Утасны дугаар"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="input1"
            type="text"
            placeholder="Нууц үг"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="button1"
            onClick={() => loginHandler(userName1, password1)}
          >
            Нэвтрэх
          </button>
          <p>----------------------------Эсвэл----------------------------</p>

          <Register />
        </section>
      </div>
    </div>
  );
}
