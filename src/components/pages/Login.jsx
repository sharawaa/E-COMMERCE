import { useContext } from "react";

import "../../Style/login.css";
import Register from "../mainComponent/Register";
import { UserContext } from "../mainComponent/UserProvider";

export default function Login() {
  const { loginHandler, user } = useContext(UserContext);

  return (
    <div className="ContainerW ">
      <div className="cards">
        <form onSubmit={loginHandler}>
          <section className="userCont">
            <img src="./image/Logo.png" alt="" />
            <input
              className="input1"
              type="text"
              placeholder="И-мэйл эсвэл Утасны дугаар"
              name="userName"
            />
            <input
              className="input1"
              type="text"
              placeholder="Нууц үг"
              name="userPassword"
            />
            <button className="button1" type="submit">
              Нэвтрэх
            </button>
            <p>----------------------------Эсвэл----------------------------</p>
          </section>
        </form>
        <section className="register">
          <Register />
        </section>
      </div>
    </div>
  );
}
