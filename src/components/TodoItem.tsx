const TodoItem = ({
  title,
  completed,
  dueDate,
}: {
  title: string;
  completed: boolean;
  dueDate: string;
}) => {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <p>Status: {completed}</p>
        <p>Due date: {dueDate}</p>
      </div>
    </section>
  );
};

export default TodoItem;
