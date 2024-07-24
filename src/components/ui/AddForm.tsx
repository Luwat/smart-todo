import { FC } from "react";
import { Form } from "react-router-dom";

const AddForm: FC = () => {
  return (
    <Form method="post">
      <legend>Enter Todo details.</legend>
      <p>
        <label htmlFor="title">Enter todo title:</label>
        <input type="text" id="title" name="title"/>
      </p>
      <p>
        <label htmlFor="description">Enter todo description:</label>
        <textarea id="description" name="description"/>
      </p>
      <div className="form-actions">
        <button type="submit">Add Todo</button>
      </div>
    </Form>
  );
};

export default AddForm;
