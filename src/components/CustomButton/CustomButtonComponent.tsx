import React from "react";
import { CustomButtonProps } from "./CustomButtonInterfaces";
import "./CustomButtonStyles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherProps
}: CustomButtonProps): JSX.Element => (
  <button
    className={`${isGoogleSignIn ? "googleSignIn" : ""} customButton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
