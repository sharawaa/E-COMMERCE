import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/login.css";

export default function Login(prop) {
  const { setLogin } = prop;
  const { loginHandler } = prop;
  const navigate = useNavigate();
  const [userName1, setUserName] = useState("");
  const [password1, setPassword] = useState("");
  function login() {
    console.log(userName1);
    prop.loginHandler(userName1, password1);
    navigate("/");
  }

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

          <button className="button2">Бүртгүүлэх</button>
        </section>
      </div>
    </div>
  );
}
