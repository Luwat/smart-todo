import { Link, useSubmit } from "react-router-dom";

const TodoItem = ({ id, title }: { id?: string; title?: string }) => {
  const submit = useSubmit()

  const handleTodoDelete = () => {
    const proceed = confirm('Are you you want to delete todo')

    if (proceed) {
      submit(null, {method: 'DELETE'})
    }
  }
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
        <button onClick={handleTodoDelete}>Delete</button>
      </div>
    </section>
  );
};

export default TodoItem;
