'use client';

import { usePathname } from 'next/navigation';
import { Icon } from '@/shared/ui/Icon';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useClose } from '@/shared/@common/hooks';

const GnbHamburgerMenuOption = () => {
  // TO DO: 로그인 기능 구현 이후 로그인 유무에 따른 분기처리 추가 예정, 현재는 임시로 만든 상태!
  const isLoggedIn = true;

  const pathname = usePathname();

  const linkClass =
    'block w-36 p-4 hover:bg-black-25 focus:bg-black-25 focus:outline-none';

  return (
    <div className="mobile:block md:hidden lg:hidden absolute z-50 top-[50px] left-[20px] w-36 overflow-hidden bg-black-1C rounded-lg border border-solid border-black-25 text-gray-F1 not-italic font-normal leading-normal text-[14px] text-center">
      {pathname === '/login' && (
        <Link className={linkClass} href="/register">
          회원가입
        </Link>
      )}
      {pathname === '/register' && (
        <Link className={linkClass} href="/login">
          로그인
        </Link>
      )}
      {pathname !== '/login' &&
        pathname !== '/register' &&
        (isLoggedIn ? (
          <div>
            <Link
              className={`${linkClass} border-b border-solid border-black-25`}
              href="/compare"
            >
              비교하기
            </Link>
            <Link
              className={`${linkClass} border-b border-solid border-black-25`}
              href="/profile"
            >
              내 프로필
            </Link>
            <button className={linkClass} type="button">
              로그아웃
            </button>
          </div>
        ) : (
          <div>
            <Link
              className={`${linkClass} border-b border-solid border-black-25`}
              href="/login"
            >
              로그인
            </Link>
            <Link className={linkClass} href="/register">
              회원가입
            </Link>
          </div>
        ))}
    </div>
  );
};

export const GnbHamburgerMenu = () => {
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] =
    useState<boolean>(false);
  const handleToggledHamburgerMenu = () => {
    setIsOpenHamburgerMenu(!isOpenHamburgerMenu);
  };

  const hamburgerMenuRef = useRef<HTMLDivElement>(null);
  useClose(isOpenHamburgerMenu, handleToggledHamburgerMenu, hamburgerMenuRef);

  return (
    <div
      ref={hamburgerMenuRef}
      className="md:hidden lg:hidden flex justify-center items-center"
    >
      <button
        onClick={handleToggledHamburgerMenu}
        className={`${isOpenHamburgerMenu && 'bg-black-25 rounded-sm'} md:hidden lg:hidden`}
        type="button"
      >
        <Icon
          name="MenuIcon"
          className="mobile:w-[24px] mobile:h-[24px] md:hidden lg:hidden fill-gray-9F"
        />
      </button>
      {isOpenHamburgerMenu && <GnbHamburgerMenuOption />}
    </div>
  );
};
