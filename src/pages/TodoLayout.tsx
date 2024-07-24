import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

const TodoLayout = () => {
  return (
    <>
      <SideNav />
      <Outlet />
    </>
  );
};

export default TodoLayout;
