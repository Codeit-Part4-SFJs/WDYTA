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
    <div className="flex flex-col gap-[10px]">
      <label
        htmlFor={id}
        className="text-gray-F1 text-[14px] lg:text-[16px] font-normal"
      >
        {label}
      </label>
      <input
        id={id}
        className={`w-[335px] md:w-[440px] lg:w-[640px] h-[55px] lg:h-[70px] px-[20px] py-[23px] rounded-[8px] border border-solid bg-black-25 text-gray-F1 text-[14px] lg:text-[16px] font-normal placeholder-gray-6E focus:outline-none ${errors[id] ? "border-red focus:border-red" : "border-gray-35 focus:border-main-blue"}`}
        type={type}
        placeholder={placeholder}
        {...register(id, validation)}
      />
      {errors[id] && (
        <span className="text-red text-[12px] lg:text-[14px] font-normal">
          {errors[id]?.message as string}
        </span>
      )}
      {!errors[id] && helperText && (
        <span className="text-gray-6E text-[12px] lg:text-[14px] font-normal">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default AuthInput;
