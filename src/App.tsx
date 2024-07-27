import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.tsx";
import RootLayout from "./pages/Root.tsx";
import TodoLayout from "./pages/TodoLayout.tsx";
import TodosPage from "./pages/Todos.tsx";
import EditTodoPage from "./pages/Edit.tsx";
import TodoDetailsPage from "./pages/Details.tsx";
import CreateTodoPage from "./pages/Create.tsx";
import { createTodoAction, todoLoader, updateTodo } from "./util/http.ts";
import { deleteTodo } from "./pages/destroy.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/todos",
        element: <TodoLayout />,
        errorElement: <ErrorPage />,
        id: "todo",
        children: [
          { path: "/todos", element: <TodosPage /> },
          {
            path: "/todos/create",
            element: <CreateTodoPage />,
            action: createTodoAction,
          },
          {
            path: "/todos/:id",
            element: <TodoDetailsPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/todos/:id/edit",
            element: <EditTodoPage />,
            action: updateTodo,
          },
          { path: "/todos/:id/destroy", action: deleteTodo },
        ],
        loader: todoLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
