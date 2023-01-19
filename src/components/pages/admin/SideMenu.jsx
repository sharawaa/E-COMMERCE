import { useNavigate } from "react-router-dom";
import "./adminStyle/sideMenu.css"


export default function SideMenu() {
const navigate = useNavigate()


  return (
    <>
      <div className="sideMenu">
      <button className="sideBtn"  onClick={()=>{navigate("/")}}><img src="./Dashboard1.svg" alt="" />   хянах самбар</button>
    <button className="sideBtn" onClick={()=>{navigate("/Бүтээгдэхүүнүүд")}}><img src="./monitor2.svg" alt="" />  Бүтээгдэхүүнүүд</button>
    <button className="sideBtn" onClick={()=>{navigate("/Захиалгууд")}}><img src="./Vector3.svg" alt="" />  Захиалгууд</button>
    <button className="sideBtn" onClick={()=>{navigate("/Хэрэглэгчид")}}><img src="./users4.svg" alt="" />   Хэрэглэгчид</button>
    <button className="sideBtn" onClick={()=>{navigate("/Модератор")}}><img src="./suitcase5.svg" alt="" />  Модератор</button>
    <button className="sideBtn" onClick={()=>{navigate("/Тохиргоо")}}><img src="./wrench6.svg" alt="" />  Тохиргоо</button>

      <img src="" alt="" />
      </div>
      
      
    </>
  );
}
