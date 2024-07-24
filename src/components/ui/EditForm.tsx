import { FC } from "react";
import { Form, Link, useParams, useRouteLoaderData } from "react-router-dom";
import type { Todos } from "../TodosList";

const EditForm: FC = () => {
  const params = useParams()
  const todos = useRouteLoaderData("todo") as Todos[];
  
  const todoIndex = todos.findIndex(todo => todo.id === params.id)
  const todo = todos[todoIndex]
  console.log(params.id)
  console.log(todo)
  console.log(todoIndex)

  return (
    <Form method="patch">
      <legend>Enter Todo details.</legend>
      <p>
        <label htmlFor="title">Enter todo title:</label>
        <input type="text" id="title" name="title" defaultValue={todo && todo.title} />
      </p>
      <p>
        <label htmlFor="description">Enter todo description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue={todo && todo.description}
        />
      </p>
      <div className="form-actions">
        <Link to={".."}>
          <button>Cancel</button>
        </Link>
        <button type="submit">Edit Todo</button>
      </div>
    </Form>
  );
};

export default EditForm;
