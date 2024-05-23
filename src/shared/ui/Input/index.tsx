import { FormValues } from "@/shared/types/input";
import { InputHTMLAttributes } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: keyof FormValues;
  inputSize: "small" | "medium" | "large";
  register: UseFormRegister<FormValues>;
  validation?: object | undefined;
  errors: FieldErrors<FormValues>;
}

const SIZE_MAP = {
  small: "w-[360px] mobile:w-[295px] h-[55px] md:h-[60px] lg:h-[70px]",
  medium:
    "w-[295px] md:w-[510px] lg:w-[540px] h-[55px] md:h-[60px] lg:h-[70px]",
  large: "w-[335px] md:w-[440px] lg:w-[640px] h-[55px] lg:h-[70px]",
};

const Input = ({
  id,
  inputSize,
  register,
  errors,
  validation,
  ...props
}: InputProps) => {
  return (
    <input
      className={`${SIZE_MAP[inputSize]} px-5 py-[23px] rounded-lg border border-solid bg-black-25 text-gray-F1 text-sm lg:text-base placeholder-gray-6E focus:outline-none ${
        errors[id]
          ? "border-red focus:border-red"
          : "border-gray-35 focus:border-main-blue"
      }`}
      {...register(id, validation)}
      {...props}
    />
  );
};

export default Input;
