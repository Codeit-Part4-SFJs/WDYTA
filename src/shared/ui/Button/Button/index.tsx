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

const buttonBase =
  'flex justify-center items-center gap-[10px] flex-shrink-0 rounded-lg whitespace-nowrap';
const ButtonStyleByKind = {
  [ButtonKind.primary]: {
    button: 'bg-main-gradation disabled:bg-none disabled:bg-gray-35',
    p: 'text-white group-disabled:text-gray-6E',
  },
  [ButtonKind.secondary]: {
    button:
      'border border-solid border-main-blue border-transparent disabled:border-gray-35 disabled:text-gray-6E',
    p: 'group-disabled:text-gray-6E text-transparent bg-clip-text bg-main-gradation',
  },
  [ButtonKind.tertiary]: {
    button:
      'bg-transparent border border-solid border-gray-9F disabled:border-gray-35',
    p: 'text-gray-9F group-disabled:text-gray-6E',
  },
};

const Button = ({
  children,
  kind,

  customSize,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type="button"
      className={`${customSize} ${buttonBase} ${ButtonStyleByKind[kind].button} group `}
      disabled={disabled}
      {...props}
    >
      <p className={ButtonStyleByKind[kind].p}>{children}</p>
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
