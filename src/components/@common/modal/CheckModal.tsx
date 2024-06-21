'use client';

import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { useCompareItems } from '@/stores/useCompareItems';
import { useRouter } from 'next/navigation';

export const CheckModal = () => {
  const router = useRouter();
  const firstItem = useCompareItems((state) => state.firstItem);
  const secondItem = useCompareItems((state) => state.secondItem);
  const handleClick = () => {
    router.replace(`/compare?product1=${firstItem}&product2=${secondItem}`, {
      scroll: false,
    });
    router.refresh();
  };
  return (
    <div className="flex flex-col gap-[30px] md:gap-[45px] lg:gap-10">
      <div>
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
