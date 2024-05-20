import { PropsWithChildren } from "react";

interface ButtonProps extends React.ComponentProps<'button'> {
  size : string;
  onClick?: () => void;
  disabled?: boolean;
}

const TertiaryButton = ({size, onClick, disabled = false, children} : PropsWithChildren<ButtonProps>) => {

  let buttonClass = `flex py-6  justify-center items-center gap-[10px] flex-shrink-0 rounded-lg whitespace-nowrap`;
  let pClass = '';

  switch (size) {
    case 'L' : 
      buttonClass += ' w-[640px] h-[65px]';
      pClass += 'text-lg';
      break;
    case 'M' :
      buttonClass += ' w-[440px] h-[55px]';
      pClass += 'text-base';
      break;
    case 'S' :
      buttonClass += ' w-[335px] h-[50px]';
      pClass += 'text-base';
      break;
  }

  if (disabled) {
    buttonClass += ' bg-transparent border-gray-35 border border-solid ';
    pClass += ' text-gray-6E';
  } else {
    buttonClass += ' bg-transparent border-gray-9F border border-solid';
    pClass += ' text-gray-9F';
  }


  

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}  
    >
      <p className={pClass}>
        {children}
      </p>
    </button>
  );
};

export default TertiaryButton;