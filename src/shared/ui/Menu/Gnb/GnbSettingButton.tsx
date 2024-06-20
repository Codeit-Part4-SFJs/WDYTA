'use client';

import { useClose } from '@/shared/@common/hooks';
import { logoutAction } from '@/shared/@common/utils';
import Link from 'next/link';
import { useState, useRef } from 'react';

const SettingOptions = () => {
  const handleSignOut = async () => {
    await logoutAction();
    window.location.reload();
  };

  return (
    <div className="z-50 top-[30px] lg:right-[0px] md:right-[0px] mobile:hidden md:block lg:block absolute overflow-hidden bg-black-1C rounded-lg border border-solid border-black-25 text-gray-F1 not-italic font-normal leading-normal md:text-[14px] lg:text-4 text-center">
      <Link
        className="block lg:w-36 md:w-28 px-[20px] py-4 hover:bg-black-25 focus:bg-black-25 focus:outline-none border-b border-solid border-black-25"
        href="/profile"
      >
        내 프로필
      </Link>
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
      {isOpenSetting && <SettingOptions />}
    </div>
  );
};
