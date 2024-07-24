const TodoDetails = ({
    title,
    description,
  }: {
    title: string;
    description: string;
    
  }) => {
    return (
      <section>
        <div>
          <h1>{title}</h1>
          <div>
              <h3>Description</h3>
              <p>{description}</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default TodoDetails;