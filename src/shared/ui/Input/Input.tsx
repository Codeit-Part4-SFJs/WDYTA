import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize: 'small' | 'medium' | 'large' | 'xsmall';
  isError?: boolean;
}

const SIZE_MAP = {
  small: 'w-[360px] mobile:w-[295px] h-[55px] md:h-[60px] lg:h-[70px]',
  medium:
    'w-[295px] md:w-[510px] lg:w-[540px] h-[55px] md:h-[60px] lg:h-[70px]',
  large: 'w-[335px] md:w-[440px] lg:w-[640px] h-[55px] lg:h-[70px]',
  xsmall:
    'w-[350px] h-[70px] md:h-[55px] md:w-[240px] mobile:w-[335px] mobile:h-[55px]',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize, isError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`${SIZE_MAP[inputSize]} px-5 py-[23px] rounded-lg border border-solid bg-black-25 text-gray-F1 text-sm lg:text-base placeholder-gray-6E focus:outline-none ${
          isError
            ? 'border-red focus:border-red'
            : 'border-gray-35 focus:border-main-blue'
        }`}
        {...props}
      />
    );
  },
);
