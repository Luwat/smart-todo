import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/Home.tsx";
import RootLayout from "./pages/Root.tsx";
import TodoLayout from "./pages/TodoLayout.tsx";
import TodosPage from "./pages/Todos.tsx";
import EditTodoPage from "./pages/Edit.tsx";
import TodoDetailsPage from "./pages/Details.tsx";
import CreateTodoPage from "./pages/Create.tsx";
import { createTodoAction, todoLoader } from "./util/http.ts";

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {path: '/', element: <HomePage />},
    {path: '/todos', element: <TodoLayout />, children: [
      {path: '/todos', element: <TodosPage />, loader: todoLoader},
      {path: '/todos/create', element: <CreateTodoPage />, action: createTodoAction},
      {path: '/todos/:id', element: <TodoDetailsPage />},
      {path: '/todos/:id/edit', element: <EditTodoPage />}
    ]}
  ]},
])

function App() {

  return <RouterProvider router={router} />
}

export default App
