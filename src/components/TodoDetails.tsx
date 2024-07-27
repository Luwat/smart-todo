const TodoDetails = ({
    title,
    description,
  }: {
    title: string;
    description: string;
    
  }) => {
    return (
      <section className="my-8 mx-auto md:mx-8 md:my-20 w-10/12">
        <div>
          <h1 className="text-4xl font-semibold mb-6">{title}</h1>
          <div className="">
              <h3 className="text-2xl mb-4">Description:</h3>
              <p className="text-lg">{description}</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default TodoDetails;