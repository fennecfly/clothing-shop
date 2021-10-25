import { BaseSyntheticEvent, InputHTMLAttributes } from "react";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (event: BaseSyntheticEvent) => void;
  label?: string;
  value: string;
}
