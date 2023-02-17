import { useContext } from "react";
import { UserContext } from "../mainComponent/UserProvider";

export default function Profile() {
  const { user } = useContext(UserContext);
  user && console.log("profile", user);
  return (
    <>
      <div>
        <section>
          <h1>Hello {user.userName}</h1>
        </section>
      </div>
    </>
  );
}
