'use client';

import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { useRouter } from 'next/navigation';

interface AlertModalProps {
  errorMessage: string;
  buttonText: string;
  path: string;
}

export const AlertModal = ({
  errorMessage,
  buttonText,
  path,
}: AlertModalProps) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(path);
  };
  return (
    <div className="flex flex-col h-[136px] md:h-[156px] lg:h-[163px] justify-between items-center">
      <span className="text-gray-F1 text-base">{errorMessage}</span>
      <Button
        kind={ButtonKind.primary}
        customSize="lg:text-lg w-[420px] mobile:w-[295px] h-[50px] md:h-[55px] lg:h-[65px]"
        onClick={handleButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};
