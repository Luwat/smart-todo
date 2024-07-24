import { json, redirect, ActionFunction } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export async function todoLoader() {
    const response = await fetch('http://localhost:3000/todos');

    if (!response.ok) {
        throw json({message: 'Could not fetch data'}, {status: 500});
    }

    return response;
}

export const createTodoAction: ActionFunction =  async ({ request }) => {
    const formData = await request.formData()

    const todos = {
        id: uuidv4(),
        title: formData.get('title'),
        description: formData.get('description'),
        status: formData.get('status'),
        dueDate: formData.get('dueDate'),
    }

    const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'applicatioon/json'
        },
        body: JSON.stringify(todos)
    })

    if (!response.ok) {
        throw json({message: 'Could not fetch data'}, {status: 500});
    }

    return redirect('/todos')
}
