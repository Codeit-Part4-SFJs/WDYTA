'use client';

import { Icon } from '@/shared/ui/Icon';
import { useRouter } from 'next/navigation';

export const Floating = () => {
  const router = useRouter();
  const openModal = () => {
    // alert('Floating이 클릭되었습니다!');
    router.push(`/modal/home/productAdd`);
  };

  /*
    onClick으로 상품 등록 Modal Open 해야 함.
  */

  return (
    <button
      type="button"
      className="flex w-[60px] h-[60px] rounded-full fixed bg-main-gradation items-center justify-center right-[160px] bottom-[50px] md:right-[30px] md:bottom-[60px] mobile:right-5 mobile:bottom-10"
    >
      <Icon
        name="AddIcon"
        className={`w-[40px] text-white `}
        onClick={openModal}
      />
    </button>
  );
};
