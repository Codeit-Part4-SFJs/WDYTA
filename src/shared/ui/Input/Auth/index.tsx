import { InputProps } from "@/shared/types/input";

const AuthInput = ({
  id,
  label,
  type,
  placeholder,
  register,
  errors,
  validation,
  helperText,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2.5">
      <label
        htmlFor={id}
        className="text-gray-F1 text-sm lg:text- font-base normal"
      >
        {label}
      </label>
      <input
        id={id}
        className={`w-[335px] md:w-[440px] lg:w-[640px] h-[55px] lg:h-[70px] px-5 py-[23px] rounded-lg border border-solid bg-black-25 text-gray-F1 text-sm lg:text-base font-normal placeholder-gray-6E focus:outline-none ${errors[id] ? "border-red focus:border-red" : "border-gray-35 focus:border-main-blue"}`}
        type={type}
        placeholder={placeholder}
        {...register(id, validation)}
      />
      {errors[id] && (
        <span className="text-red text-xs lg:text-sm font-normal">
          {errors[id]?.message as string}
        </span>
      )}
      {!errors[id] && helperText && (
        <span className="text-gray-6E text-xs lg:text-sm font-normal">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default AuthInput;
