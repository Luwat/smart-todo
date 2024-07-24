import TodoItem from "./TodoItem";
import { useLoaderData } from "react-router-dom";

type Todos = {
        id: string;
        title: string;
        description: string;
        completed: boolean,
        dueDate: string;
    }



const TodosList = () => {
    const data = useLoaderData() as Todos[]




    return <section>
        <ul>
            {data.map(todo => (
                <TodoItem key={todo.id} {...todo}/>
            ))}
        </ul>
    </section>
}

export default TodosList