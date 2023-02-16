import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState([]);
  function loginHandler(e) {
    e.preventDefault();

    axios
      .post("http://localhost:2022/loginHandler", {
        userName: e.target.userName.value,
        userPassword: e.target.userPassword.value,
      })
      .then((res) => setUser(res.data));
  }

  return (
    <UserContext.Provider value={{ loginHandler, user }}>
      {children}
    </UserContext.Provider>
  );
}

//     localStorage.setItem("currentUser", user.id);
