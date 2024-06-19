import { PropsWithChildren, ButtonHTMLAttributes } from 'react';

export enum ButtonKind {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: ButtonKind;
  customSize?: string;
}

export const buttonBase =
  'flex justify-center items-center gap-[10px] rounded-lg whitespace-nowrap';
export const ButtonStyleByKind = {
  [ButtonKind.primary]: {
    button: 'bg-main-gradation disabled:bg-none disabled:bg-gray-35',
    p: 'text-white group-disabled:text-gray-6E',
  },
  [ButtonKind.secondary]: {
    button:
      'border border-solid bg-transparent disabled:border-gray-35 disabled:text-gray-6E',
    p: 'group-disabled:text-gray-6E text-transparent bg-clip-text bg-main-gradation',
  },
  [ButtonKind.tertiary]: {
    button:
      'bg-transparent border border-solid border-gray-9F disabled:border-gray-35',
    p: 'text-gray-9F group-disabled:text-gray-6E',
  },
};

export const Button = ({
  children,
  kind,
  customSize,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type="button"
      className={` ${buttonBase} ${ButtonStyleByKind[kind].button} group  ${customSize}`}
      disabled={disabled}
      {...props}
    >
      <p className={ButtonStyleByKind[kind].p}>{children}</p>
    </button>
  );
};
