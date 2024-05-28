import { ButtonHTMLAttributes } from 'react';
import IconComponent from '../../Icon/Icon';

interface FloatingProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  location?: string;
}

const Floating = ({ location }: FloatingProps) => {
  const makingAlertNow = () => {
    alert('Floating이 클릭되었습니다!');
  };

  return (
    <button
      type="button"
      className={`flex w-[60px] h-[60px] rounded-full fixed bg-main-gradation items-center justify-center  ${location}`}
    >
      <IconComponent
        name="AddIcon"
        className={`w-[40px] text-white `}
        onClick={makingAlertNow}
      />
    </button>
  );
};

export default Floating;

/*
  onClick으로 상품 등록 Modal Open 해야 함.
*/
