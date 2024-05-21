"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

const TextBoxInput = () => {
  const { register, watch } = useForm();
  const [isFocused, setIsFocused] = useState(false);

  const text = watch("textarea", "");

  return (
    <div
      className={`relative w-[295px] md:w-[510px] lg:w-[540px] h-[120px] md:h-[160px] p-[20px] rounded-[8px] border border-solid ${isFocused ? "border-main-blue" : "border-gray-35"} bg-black-25`}
    >
      <textarea
        className="box-border overflow-auto scrollbar-hide w-full h-[66px] md:h-[106px] bg-black-25 text-gray-F1 text-[14px] lg:text-[16px] font-normal placeholder-gray-6 resize-none focus:outline-none leading-[20px] lg:leading-[22px]"
        placeholder="리뷰를 작성해 주세요"
        {...register("textarea")}
        maxLength={299}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <p className="absolute bottom-[20px] right-[20px] text-gray-6E text-[14px] font-normal">
        {text.length}/300
      </p>
    </div>
  );
};

export default TextBoxInput;
