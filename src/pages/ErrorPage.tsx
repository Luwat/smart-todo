import { Link, useRouteError } from "react-router-dom";

interface RouteError {
  message: string;
  statusText: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center gap-3 w-8/12 h-8/12 m-auto text-center py-40"
    >
      <h1 className="font-bold text-2xl">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/todos"}>
        <button className="py-2 px-4 md:py4 md:px-8 text-lg bg-neutral-700 text-neutral-100 rounded-md hover:text-neutral-300">View Todos</button>
      </Link>
    </div>
  );
}
