import { FC } from "react";
import { Form, Link, useParams, useRouteLoaderData } from "react-router-dom";
import type { Todos } from "../TodosList";

const EditForm: FC = () => {
  const params = useParams();
  const todos = useRouteLoaderData("todo") as Todos[];

  const todoIndex = todos.findIndex((todo) => todo.id === params.id);
  const todo = todos[todoIndex];

  return (
    <Form method="patch" className="w-2/3 ml-10 mt-10 relative">
      <legend className="text-2xl font-bold">Edit Todo details.</legend>
      <p className="py-4">
        <label htmlFor="title" className="block text-xl mb-2">
          Enter todo title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={todo.title}
          className="rounded-md w-full p-4"
        />
      </p>
      <p>
        <label htmlFor="description" className="block text-xl mb-2">
          Enter todo description:
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={todo.description}
          className="rounded-md w-full p-4"
        />
      </p>
      <div className="form-actions py-4 absolute right-0">
        <Link to={".."}>
          <button>Cancel</button>
        </Link>
        <button
          type="submit"
          className="rounded-md border-2 py-2 px-4 ml-4 text-neutral-100 bg-neutral-700"
        >
          Edit Todo
        </button>
      </div>
    </Form>
  );
};

export default EditForm;
