'use client';

import { FormValues } from '@/shared/@common/types/input';
import { InputHTMLAttributes, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface TextBoxInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FormValues>;
  text: string;
}

export const TextBoxInput = ({
  register,
  text,
  placeholder,
}: TextBoxInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusStyle = isFocused ? 'border-main-blue' : 'border-gray-35';

  return (
    <div
      className={`relative w-[295px] md:w-[510px] lg:w-[540px] h-[160px] mobile:h-[120px] p-5 rounded-lg border border-solid ${focusStyle} bg-black-25`}
    >
      <textarea
        className="scrollbar-hide w-full h-[66px] md:h-[106px] bg-black-25 text-gray-F1 text-sm lg:text-base font-normal placeholder-gray-6E resize-none focus:outline-none leading-5 lg:leading-[22px]"
        placeholder={placeholder}
        {...register('textarea')}
        maxLength={300}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <p className="absolute bottom-5 right-5 text-gray-6E text-sm font-normal">
        {text.length}/300
      </p>
    </div>
  );
};
