import TodoForm from "../components/ui/TodoForm"

const CreateTodoPage = () => {
    return <TodoForm method="post" todoSubmit="Add Todo"/>
}

export default CreateTodoPage