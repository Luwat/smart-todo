import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const TodoLayout = () => {
  return (
    <>
      <SideNav />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
};

export default TodoLayout;
