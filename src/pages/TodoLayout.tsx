import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

const TodoLayout = () => {
  return (
    <main className="lg:flex lg:gap-5 w-screen min-h-screen bg-neutral-100">
      <SideNav />
      <Outlet />
    </main>
  );
};

export default TodoLayout;
