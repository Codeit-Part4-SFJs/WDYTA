import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface FormValues {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
  text: string;
}

interface BaseInputProps {
  id: keyof FormValues;
  placeholder: string;
  register: UseFormRegister<FormValues>;
  validation?: object | undefined;
}

export interface InputProps extends BaseInputProps {
  label: string;
  type: string;
  errors: FieldErrors<FormValues>;
  helperText?: string | undefined;
}

export interface TextFieldProps extends BaseInputProps {
  size?: "large" | "small";
  maxLength?: number | undefined;
}
