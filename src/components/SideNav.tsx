import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <aside className="flex flex-col justify-center items-center gap-5 h-32 lg:h-screen lg:w-3/12 bg-neutral-700 text-neutral-100 text-center">
      <section>
        <h1 className="text-5xl font-bold">Smart Todo</h1>
      </section>
      <section>
        <nav className="flex lg:block justify-center gap-5">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/todos"}>View all Todos</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/todos/create"}>Create Todo</Link>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
}
