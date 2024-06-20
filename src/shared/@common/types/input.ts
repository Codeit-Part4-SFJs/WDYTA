import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface FormValues {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
  text: string;
  textarea: string;
}

export interface AuthInputProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}
