import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("currentUser"))
      setUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  function loginHandler(e) {
    e.preventDefault();

    axios
      .post("http://localhost:2022/loginHandler", {
        userName: e.target.userName.value,
        userPassword: e.target.userPassword.value,
      })
      .then(
        (res) => (
          setUser(res.data),
          navigate("/"),
          localStorage.setItem("currentUser", JSON.stringify(res.data))
        )
      );
  }

  return (
    <UserContext.Provider value={{ loginHandler, user }}>
      {children}
    </UserContext.Provider>
  );
}

//     localStorage.setItem("currentUser", user.id);
