import { FC } from "react";
import { Form, Link } from "react-router-dom";

const AddForm: FC = () => {
  return (
    <Form method="post" className="w-2/3 ml-10 mt-10 relative">
      <legend className="text-2xl font-bold">Enter Todo details.</legend>
      <p className="py-4">
        <label htmlFor="title" className="block text-xl mb-2">
          Enter todo title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="rounded-md w-full"
        />
      </p>
      <p>
        <label htmlFor="description" className="block text-xl mb-2">
          Enter todo description:
        </label>
        <textarea
          id="description"
          name="description"
          className="rounded-md w-full"
        />
      </p>
      <div className="form-actions py-4 absolute right-0">
        <Link to={".."}>
          <button>Cancel</button>
        </Link>
        <button
          type="submit"
          className="rounded-sm border-2 py-2 px-4 ml-4 text-neutral-100 bg-neutral-700"
        >
          Add Todo
        </button>
      </div>
    </Form>
  );
};

export default AddForm;
