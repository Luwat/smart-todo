import { Form, Link } from "react-router-dom";


const TodoItem = ({ id, title }: { id?: string; title?: string }) => {

  return (
    <section style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <p>
        <input type="checkbox" />
      </p>
      <Link to={`/todos/${id}`}>
        <div>
          <h1>{title}</h1>
        </div>
      </Link>
      <div>
        <Link to={`/todos/${id}/edit`}>
          <button>Edit</button>
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
          <button type="submit">Delete</button>
        </Form>
      </div>
    </section>
  );
};

export default TodoItem;
