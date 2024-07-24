import { Link } from "react-router-dom";

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
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </section>
  );
};

export default TodoItem;
