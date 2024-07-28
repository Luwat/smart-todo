import { FC } from "react";
import { Form, Link, useActionData } from "react-router-dom";
import type { Error } from "../../util/http";

const AddForm: FC = () => {
  const errors = useActionData() as Error

  return (
    <Form method="post" className="w-2/3 ml-10 mt-10 relative">
      <legend className="text-2xl font-bold">
        What would you like to do?{" "}
        <span aria-label="required" className="font-light text-lg"><i>All fields are required</i></span>
      </legend>
      <p className="py-4">
        <label htmlFor="title" className="block text-xl mb-2">
          Enter todo title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="rounded-md w-full"
          required
          placeholder="not less than 5 characters"
          minLength={5}
          />
          {errors?.title && <span>{errors.title}</span>}
      </p>
      <p>
        <label htmlFor="description" className="block text-xl mb-2">
          Enter todo description:
        </label>
        <textarea
          id="description"
          name="description"
          className="rounded-md w-full"
          required
          placeholder="not less than 150 characters"
          minLength={150}
          />
           {errors?.description && <span>{errors.description}</span>}
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
