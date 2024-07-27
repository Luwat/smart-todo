import { Link } from "react-router-dom";
import bgImg from "../assets/todo.jpg";

export default function HomePage() {
  return (
    <main
      className=" w-screen h-screen bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex justify-center items-center flex-col w-screen h-screen text-neutral-100 bg-neutral-700 bg-opacity-60 text-center">
        <h1 className="text-4xl md:text-8xl m-8  uppercase font-bold">
          Smart Todo
        </h1>
        <nav>
          <Link
            to={"/todos"}
            className="w-52 h-48"
          >
            <li className="border-2 px-4 py-2 sm:px-8 sm:py-4 sm:text-2xl hover:text-neutral-700 hover:bg-neutral-100 border-neutral-100 rounded-md list-none opacity-100">
              View all Todos
            </li>
          </Link>
        </nav>
      </div>
    </main>
  );
}
