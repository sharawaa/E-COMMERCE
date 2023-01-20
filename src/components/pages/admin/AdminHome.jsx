import SideMenu from "./SideMenu";
import HeaderAdmin from "./HeaderAdmin";
import { Outlet } from "react-router-dom";

export default function AdminHome() {
  return (
    <>
      <HeaderAdmin />
      <div style={{ display: "flex" }}>
        <SideMenu />
        <Outlet />
      </div>
    </>
  );
}
