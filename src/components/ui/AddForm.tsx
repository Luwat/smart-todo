import { FC } from "react";
import { Form } from "react-router-dom";
import Input from "./Input";

const AddForm: FC = () => {
  return (
    <Form method="post">
      <legend>Enter Todo details.</legend>
      <Input label="Enter Title:" name="title" />
      <div className="form-actions">
        <button type="submit">Add Todo</button>
      </div>
    </Form>
  );
};

export default AddForm;
