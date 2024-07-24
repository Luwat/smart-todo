import TodoItem from "./TodoItem";
import { useRouteLoaderData } from "react-router-dom";

export type Todos = {
        id: string;
        title: string;
        description: string;
    }



const TodosList = () => {
    const data = useRouteLoaderData('todo') as Todos[]




    return <section>
        <ul>
            {data.map(todo => (
                <TodoItem key={todo.id} {...todo}/>
            ))}
        </ul>
    </section>
}

export default TodosList