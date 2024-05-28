import { Icon } from '@/shared/ui/Icon';

interface FloatingProps {
  location?: string;
}

const Floating = ({ location }: FloatingProps) => {
  const makingAlertNow = () => {
    alert('Floating이 클릭되었습니다!');
  };

  return (
    <div
      className={`flex w-[60px] h-[60px] rounded-full fixed bg-main-gradation ${location} align-center justify-center`}
    >
      <Icon
        name="AddIcon"
        className={`w-[40px] text-white `}
        onClick={makingAlertNow}
      />
    </div>
  );
};

export default Floating;

/*
  onClick으로 상품 등록 Modal Open 해야 함.
*/
