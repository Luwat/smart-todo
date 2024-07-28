import { ActionFunction, json, redirect } from "react-router-dom";

export const deleteTodo: ActionFunction = async ({ params }) => {
    const id = params.id;
  
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE"
    });
  
    if (!response.ok) {
      throw json({ message: "Could not fetch data" }, { status: 500 });
    }
  
    return redirect("/todos");
  };
  