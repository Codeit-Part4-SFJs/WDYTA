'use client';

import { useClose } from '@/shared/@common/hooks';
import { logoutAction } from '@/shared/@common/utils';
import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react';

interface SettingOptionsProps {
  handleClose: () => void;
}

const SettingOptions = ({ handleClose }: SettingOptionsProps) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await logoutAction();
    window.location.reload();
  };

  const handleMyProfileClick = () => {
    router.push('/profile');
    handleClose();
  };

  return (
    <div className="z-50 top-[30px] lg:right-[0px] md:right-[0px] mobile:hidden md:block lg:block absolute overflow-hidden bg-black-1C rounded-lg border border-solid border-black-25 text-gray-F1 not-italic font-normal leading-normal md:text-[14px] lg:text-4 text-center">
      <button
        onClick={handleMyProfileClick}
        className="w-full lg:w-36 md:w-28 block px-[20px] py-4 hover:bg-black-25 focus:bg-black-25 focus:outline-none"
        type="button"
      >
        내 프로필
      </button>
      <button
        onClick={handleSignOut}
        className="w-full lg:w-36 md:w-28 block px-[20px] py-4 hover:bg-black-25 focus:bg-black-25 focus:outline-none"
        type="button"
      >
        로그아웃
      </button>
    </div>
  );
};

export const GnbSettingButton = () => {
  const [isOpenSetting, setIsOpenSetting] = useState<boolean>(false);
  const handleToggledSetting = () => {
    setIsOpenSetting(!isOpenSetting);
  };

  const settingRef = useRef<HTMLDivElement>(null);
  useClose(isOpenSetting, handleToggledSetting, settingRef);

  return (
    <div className="relative" ref={settingRef}>
      <button
        className="md:text-[14px] md:align-top lg:text-4 text-gray-F1 not-italic font-normal leading-normal"
        onClick={handleToggledSetting}
        type="button"
      >
        설정하기
      </button>
      {isOpenSetting && <SettingOptions handleClose={handleToggledSetting} />}
    </div>
  );
};
