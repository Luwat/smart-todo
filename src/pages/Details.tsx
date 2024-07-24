import TodoDetails from "../components/TodoDetails";
import { useRouteLoaderData, useParams } from "react-router-dom";
import type { Todos } from "../components/TodosList";

const TodoDetailsPage = () => {
    const params = useParams()
    const data = useRouteLoaderData('todo') as Todos[]
    const todo = data?.find((todo) => todo.id === params.id)
    
    console.log(params.id)
    console.log(data)

    return <TodoDetails title={todo.title} description={todo.description}/>
}

export default TodoDetailsPage;