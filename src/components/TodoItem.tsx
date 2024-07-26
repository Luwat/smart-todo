import { Form, Link } from "react-router-dom";

const TodoItem = ({ id, title }: { id?: string; title?: string }) => {
  return (
    <section className="flex gap-10 px-4 md:px-8 my-4 w-full text-lg rounded-lg justify-center items-center h-28 bg-neutral-50 shadow-lg">
      <div className="w-8/12 my-4 flex gap-4 items-center">
        <p>
          <input type="checkbox" className="rounded-full hover:border-blue-500 hover:border-4" />
        </p>
        <Link to={`/todos/${id}`} className="">
          <h1 className="hover:text-blue-500 hover:underline">{title}</h1>
        </Link>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <Link to={`/todos/${id}/edit`}>
          <button className="py-2 px-4 rounded-md bg-neutral-700 hover:bg-neutral-200 text-neutral-100 hover:text-neutral-700">
            Edit
          </button>
        </Link>
        <Form
          method="post"
          action={`${id}/destroy`}
          onSubmit={(event) => {
            if (!confirm("Are you you want to delete todo")) {
              event.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="py-2 px-4 rounded-md bg-red-700 hover:bg-red-200 text-red-100 hover:text-red-700"
          >
            Delete
          </button>
        </Form>
      </div>
    </section>
  );
};

export default TodoItem;
