import { Button, ButtonKind } from '@/shared/ui/Button/Button';

interface AlertModalProps {
  errorMessage: string;
  buttonText: string;
  handleButtonClick: () => void;
}

export const AlertModal = ({
  errorMessage,
  buttonText,
  handleButtonClick,
}: AlertModalProps) => {
  return (
    <div className="mt-[30px] ml-5 relative border border-white rounded-3xl flex flex-col items-center w-[500px] mobile:w-[335px] h-[196px] md:h-[256px] lg:h-[263px] pt-[70px] p-[40px] mobile:pt-[50px] mobile:p-5">
      <span className="text-gray-F1 text-base">{errorMessage}</span>
      <Button
        kind={ButtonKind.primary}
        customSize="absolute bottom-[40px] mobile:bottom-[20px] left-[40px] mobile:left-[20px] lg:text-lg w-[420px] mobile:w-[295px] h-[50px] md:h-[55px] lg:h-[65px]"
        onClick={handleButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};
