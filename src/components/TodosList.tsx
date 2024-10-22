import TodoItem from "./TodoItem";
import { useRouteLoaderData } from "react-router-dom";
import type { Todos } from "../util/definitions";


const TodosList = () => {
    const data = useRouteLoaderData('todo') as Todos[]




    return <section className="lg:w-8/12 mx-auto">
        <ul className="mx-4 my-10 lg:my-20">
            {data.map(todo => (
                <TodoItem key={todo.id} {...todo}/>
            ))}
        </ul>
    </section>
}

export default TodosList