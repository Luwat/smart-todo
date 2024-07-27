import TodoDetails from "../components/TodoDetails";
import { useRouteLoaderData, useParams } from "react-router-dom";
import type { Todos } from "../components/TodosList";

/*
Type assertions have saved me a lot of typescript error issues.
I had to use assertion after several other trials have refused to 
stop throwing "todo could be undefined error"
*/

type Todo = {
  title: string;
  description: string;
};

const TodoDetailsPage = () => {
  const params = useParams();
  const data = useRouteLoaderData("todo") as Todos[];
  const todo = data.find((todo) => todo.id === params.id) as Todo;

  return <TodoDetails title={todo.title} description={todo.description} />;
};

export default TodoDetailsPage;
