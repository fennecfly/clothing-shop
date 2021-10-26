import React from "react";
import { CustomButtonProps } from "./CustomButtonInterfaces";
import "./CustomButtonStyles.scss";

const CustomButton = ({
  children,
  ...otherProps
}: CustomButtonProps): JSX.Element => (
  <button className="customButton" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
