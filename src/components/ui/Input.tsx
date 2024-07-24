import { ReactNode } from "react";

const Input = ({label, name, ...props}: {label: ReactNode, name: string}) => {
  return (
    <p>
      <label htmlFor={name}>
        {label}
      </label>
      <input {...props} id={name} name={name} required />
    </p>
  );
};

export default Input;
