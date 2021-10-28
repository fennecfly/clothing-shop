import { ButtonHTMLAttributes } from "react";

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: true;
}
