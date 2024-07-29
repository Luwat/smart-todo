import { Form, FormMethod, Link, useActionData, useParams, useRouteLoaderData } from "react-router-dom";
import type { Error, Todos } from "../../util/definitions";

const TodoForm = ({method, todoSubmit}: {method: FormMethod; todoSubmit: string}) => {
  const params = useParams();
  const todos = useRouteLoaderData("todo") as Todos[];

  const todoIndex = todos.findIndex((todo) => todo.id === params.id);
  const todo = todos[todoIndex];
  const errors = useActionData() as Error

  return (
    <Form method={method} className="w-2/3 ml-10 mt-10 relative">
      <legend className="text-2xl font-bold">
        What would you like to do?{" "}
        <span aria-label="required" className="font-light text-lg"><i>All fields are required</i></span>
      </legend>
      <p className="py-4">
        <label htmlFor="title" className="block text-xl mb-2">
          Todo title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={todo && todo.title}
          className="rounded-md w-full"
          required
          placeholder="not less than 5 characters"
          />
          {errors?.title && <span>{errors.title}</span>}
      </p>
      <p>
        <label htmlFor="description" className="block text-xl mb-2">
          Todo description:
        </label>
        <textarea
          id="description"
          name="description"
          className="rounded-md w-full"
          defaultValue={todo && todo.description}
          required
          placeholder="not less than 150 characters"
          />
           {errors?.description && <span>{errors.description}</span>}
      </p>
      <div className="form-actions py-4 absolute right-0">
        <Link to={".."}>
          <button>Cancel</button>
        </Link>
        <button
          type="submit"
          className="rounded-sm border-2 py-2 px-4 ml-4 text-neutral-100 bg-neutral-700"
        >
          {todoSubmit}
        </button>
      </div>
    </Form>
  );
};

export default TodoForm;
