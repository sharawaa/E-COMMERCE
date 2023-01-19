import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/welcomePage.css";

export default function WelcomePage(prop) {
  const { setLogin } = prop;
  const { loginHandler } = prop;
  const navigate = useNavigate();
  const [userName1, setUserName] = useState("");
  const [password1, setPassword] = useState("");
  function login() {
    console.log(userName1);
     loginHandler(userName1, password1);
     navigate("/");
  }

  return (
    <div className="ContainerW container">
      <div className="cards">
        <input
          className="input"
          type="text"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={() => login(userName1, password1)}>
          Log in
        </button>
      </div>
    </div>
  );
}
