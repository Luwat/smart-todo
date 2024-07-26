import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

const TodoLayout = () => {
  return (
    <main className="flex gap-5 bg-teal-100">
      <SideNav />
      <Outlet />
    </main>
  );
};

export default TodoLayout;
