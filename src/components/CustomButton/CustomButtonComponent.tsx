import React from "react";
import { CustomButtonProps } from "./CustomButtonInterfaces";
import "./CustomButtonStyles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: CustomButtonProps): JSX.Element => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "googleSignIn" : ""
    } customButton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
