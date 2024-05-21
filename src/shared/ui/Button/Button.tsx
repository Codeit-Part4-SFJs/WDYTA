import { PropsWithChildren, ButtonHTMLAttributes } from "react";

export enum ButtonSizeEnum {
  S = "w-[335px] h-[50px] text-base",
  M = "w-[440px] h-[55px] text-base",
  L = "w-[640px] h-[65px] text-lg",
}

export enum ButtonKind {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: ButtonKind;
  size?: ButtonSizeEnum;
  customSize?: string;
}

const buttonBase =
  "flex justify-center items-center gap-[10px] flex-shrink-0 rounded-lg whitespace-nowrap";
const ButtonStyleByKind = {
  [ButtonKind.primary]: {
    button: "bg-main-gradation disabled:bg-none disabled:bg-gray-35",
    p: "text-white",
    disabledP: "text-gray-6E",
  },
  [ButtonKind.secondary]: {
    button:
      "border border-solid border-linear-gradients border-transparent disabled:border-gray-35 disabled:text-gray-6E",
    p: "disabled:text-gray-6E text-transparent bg-clip-text bg-main-gradation",
    disabledP: "text-gray-6E",
  },
  [ButtonKind.tertiary]: {
    button:
      "bg-transparent border border-solid border-gray-9F disabled:border-gray-35",
    p: "text-gray-9F disabled:text-gray-6E",
    disabledP: "text-gray-6E",
  },
};

const Button = ({
  children,
  kind,
  size,
  customSize,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const sizeClass = customSize || size || "";
  const pStyle = disabled
    ? ButtonStyleByKind[kind].disabledP
    : ButtonStyleByKind[kind].p;
  return (
    <button
      className={`${buttonBase} ${ButtonStyleByKind[kind].button} ${sizeClass}`}
      disabled={disabled}
      {...props}
    >
      <p className={pStyle}>{children}</p>
    </button>
  );
};

/* 사용법 
크기를 L, M, S로 두고, disabled의 경우에는 boolean 값으로 disabled를 설정하시면 됩니다.
onClick Prop을 활용하여 다음 동작을 결정하시면 됩니다.
      <PrimaryButton size="S" disabled={true}>
        스몰 비활성화
      </PrimaryButton>
  와 같이 사용하시면 children props로 값이 전달됩니다. 
*/

export default Button;
