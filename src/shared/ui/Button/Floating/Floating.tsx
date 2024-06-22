'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@/shared/ui/Icon';
import { useRouter } from 'next/navigation';
import { checkAccessTokenExists } from './checkAccessToken';

export const Floating = () => {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      const hasAccessToken = await checkAccessTokenExists(); // 서버 액션 호출
      setShowButton(hasAccessToken);
    };

    checkAccess();
  }, []);

  const openModal = () => {
    router.push(`/modal/home/productAdd`, { scroll: false });
  };

  return (
    <button
      type="button"
      className={`flex w-[60px] h-[60px] rounded-full fixed bg-main-gradation items-center justify-center right-[160px] bottom-[50px] md:right-[30px] md:bottom-[60px] mobile:right-5 mobile:bottom-10 ${!showButton && 'hidden'}`}
      onClick={openModal}
    >
      <Icon name="AddIcon" className={`w-[40px] text-white `} />
    </button>
  );
};
