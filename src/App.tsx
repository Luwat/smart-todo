import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.tsx";
import RootLayout from "./pages/Root.tsx";
import TodoLayout from "./pages/TodoLayout.tsx";
import TodosPage from "./pages/Todos.tsx";
import EditTodoPage from "./pages/Edit.tsx";
import TodoDetailsPage from "./pages/Details.tsx";
import CreateTodoPage from "./pages/Create.tsx";
import { createTodoAction, deleteTodo, todoLoader, updateTodo } from "./util/http.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/todos",
        element: <TodoLayout />,
        id: "todo",
        children: [
          { path: '/todos', element: <TodosPage />, action: deleteTodo},
          {
            path: "/todos/create",
            element: <CreateTodoPage />,
            action: createTodoAction,
          },
          { path: "/todos/:id", element: <TodoDetailsPage /> },
          { path: "/todos/:id/edit", element: <EditTodoPage />, action: updateTodo },
        ],
        loader: todoLoader
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
