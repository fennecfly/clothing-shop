import React from "react";
import { FormInputProps } from "./FormInputInterfaces";
import "./FormInputStyles.scss";

const FormInput = ({
  handleChange,
  label,
  ...otherProps
}: FormInputProps): JSX.Element => (
  <div className="group">
    <input className="formInput" onChange={handleChange} {...otherProps} />

    {label ? (
      <label
        className={`${otherProps.value.length ? "shrink" : ""} formInputLabel`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
