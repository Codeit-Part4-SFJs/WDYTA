import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface FormValues {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

export interface InputProps {
  id: keyof FormValues;
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  validation: object;
  helperText?: string;
}
