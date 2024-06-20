'use client';

import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { useCompareItems } from '@/stores/useCompareItems';
import { useRouter } from 'next/navigation';

export const CheckModal = () => {
  const router = useRouter();
  const firstItem = useCompareItems((state) => state.firstItem);
  const secondItem = useCompareItems((state) => state.secondItem);
  const handleClick = () => {
    router.push(`/compare?product1=${firstItem}&product2=${secondItem}`);
  };
  return (
    <div className="w-[500px] mobile:w-[335px] h-[263px] md:h-[256px] mobile:h-[196px] flex-shrink-0">
      <div className="my-10">
        <p className="text-white text-2xl md:text-xl mobile:text-xl ">
          비교 상품이 교체되었습니다.
        </p>
        <p className="text-white text-2xl md:text-xl mobile:text-xl ">
          바로 확인해보시겠어요?
        </p>
      </div>
      <Button
        kind={ButtonKind.primary}
        onClick={handleClick}
        customSize={`w-[420px] mobile:w-[295px] h-[65px] md:h-[55px] mobile:h-[50px] `}
      >
        바로가기
      </Button>
    </div>
  );
};
