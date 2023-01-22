import { useNavigate } from "react-router-dom";
import "./adminStyle/sideMenu.css";

export default function SideMenu() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sideMenu">
        <button
          className="sideBtn"
          onClick={() => {
            navigate("/admin/control");
          }}
        >
          <img src="./Dashboard1.svg" alt="" /> хянах самбар
        </button>
        <button
          className="sideBtn"
          onClick={() => {
            navigate("admin/products");
          }}
        >
          <img src="./monitor2.svg" alt="" /> Бүтээгдэхүүнүүд
        </button>
        <button
          className="sideBtn"
          onClick={() => {
            navigate("admin/order");
          }}
        >
          <img src="./Vector3.svg" alt="" /> Захиалгууд
        </button>
        <button
          className="sideBtn"
          onClick={() => {
            navigate("/admin/users");
          }}
        >
          <img src="./users4.svg" alt="" /> Хэрэглэгчид
        </button>
        <button
          className="sideBtn"
          onClick={() => {
            navigate("/admin/moderator");
          }}
        >
          <img src="./suitcase5.svg" alt="" /> Модератор
        </button>
        <button
          className="sideBtn"
          onClick={() => {
            navigate("/admin/settings");
          }}
        >
          <img src="./wrench6.svg" alt="" /> Тохиргоо
        </button>

        <img src="" alt="" />
      </div>
    </>
  );
}
