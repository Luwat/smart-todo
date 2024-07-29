import TodoForm from "../components/ui/TodoForm";

const EditTodoPage = () => {
    return <TodoForm method="patch" todoSubmit="Edit Todo"/>
}

export default EditTodoPage;