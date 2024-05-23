"use client";
import { InputProps } from "@/shared/types/input";
import Icon from "../Icon/Icon";
import { useState } from "react";

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
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);

  const hasErrorStyle = errors[id]
    ? "border-red focus:border-red"
    : "border-gray-35 focus:border-main-blue";

  const toggleIcon = () => {
    setShowPasswordIcon(!showPasswordIcon);
  };

  return (
    <div className="flex flex-col gap-2.5">
      <label
        htmlFor={id}
        className="text-gray-F1 text-sm lg:text- font-base normal"
      >
        {label}
      </label>
      <div className="relative w-[335px] md:w-[440px] lg:w-[640px] h-[55px] lg:h-[70px]">
        <input
          id={id}
          className={`w-full h-full px-5 py-[23px] rounded-lg border border-solid bg-black-25 text-gray-F1 text-sm lg:text-base font-normal placeholder-gray-6E focus:outline-none ${hasErrorStyle}`}
          type={showPasswordIcon ? "text" : type}
          placeholder={placeholder}
          {...register(id, validation)}
        />
        {type === "password" && (
          <Icon
            name={showPasswordIcon ? "VisibilityIcon" : "VisibilityOffIcon"}
            iconSizeClass="absolute top-[16px] lg:top-[23px] right-5 w-[22px] h-[22px] lg:w-6 lg:h-6"
            color="#9fa8b2"
            onClick={toggleIcon}
          />
        )}
      </div>
      {errors[id] ? (
        <span className="text-red text-xs lg:text-sm font-normal">
          {errors[id]?.message}
        </span>
      ) : (
        helperText && (
          <span className="text-gray-6E text-xs lg:text-sm font-normal">
            {helperText}
          </span>
        )
      )}
    </div>
  );
};

export default AuthInput;
