const TodoDetails = ({
    title,
    description,
    status,
    dueDate,
  }: {
    title: string;
    description: string;
    status: string;
    dueDate: string;
  }) => {
    return (
      <section>
        <div>
          <h1>{title}</h1>
          <div>
              <h3>Description</h3>
              <p>{description}</p>
          </div>
          <p>Status: {status}</p>
          <p>Due date: {dueDate}</p>
        </div>
      </section>
    );
  };
  
  export default TodoDetails;