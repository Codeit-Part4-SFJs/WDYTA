"use client";

import { usePathname } from "next/navigation";
import IconComponent from "@/shared/ui/Icon/Icon";
import Link from "next/link";
import { useRef, useState } from "react";
import { GnbHamburgerMenuOptionProps } from "@/shared/types/GnbType";
import useClose from "@/shared/@common/hooks/useClose";

const GnbHamburgerMenu = () => {
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] =
    useState<boolean>(false);
  const handleToggledHamburgerMenu = () => {
    setIsOpenHamburgerMenu(!isOpenHamburgerMenu);
  };

  return (
    <>
      {isOpenHamburgerMenu ? (
        <div className="md:hidden lg:hidden bg-black-25 rounded-sm hover:cursor-pointer">
          <IconComponent
            name="MenuIcon"
            className="mobile:w-[24px] mobile:h-[24px] md:hidden lg:hidden fill-gray-9F"
          />
        </div>
      ) : (
        <button
          onClick={handleToggledHamburgerMenu}
          className="md:hidden lg:hidden"
          type="button"
        >
          <IconComponent
            name="MenuIcon"
            className="mobile:w-[24px] mobile:h-[24px] md:hidden lg:hidden fill-gray-9F"
          />
        </button>
      )}
      {isOpenHamburgerMenu && (
        <GnbHamburgerMenuOption
          isOpenHamburgerMenu={isOpenHamburgerMenu}
          handleToggledHamburgerMenu={handleToggledHamburgerMenu}
        />
      )}
    </>
  );
};

const GnbHamburgerMenuOption = ({
  isOpenHamburgerMenu,
  handleToggledHamburgerMenu,
}: GnbHamburgerMenuOptionProps) => {
  // TO DO: 로그인 기능 구현 이후 로그인 유무에 따른 분기처리 추가 예정, 현재는 임시로 만든 상태!
  const isLoggedIn = false;

  const pathname = usePathname();
  const MenuOptionRef = useRef<HTMLDivElement>(null);
  useClose(isOpenHamburgerMenu, handleToggledHamburgerMenu, MenuOptionRef);

  const linkClass =
    "block w-52 p-4 hover:bg-black-25 focus:bg-black-25 focus:outline-none";

  return (
    <div
      className="mobile:block md:hidden lg:hidden absolute z-50 top-[78px] left-0 w-52 overflow-hidden bg-black-1C rounded-lg border border-solid border-black-25 text-gray-F1 not-italic font-normal leading-normal text-[14px] text-center"
      ref={MenuOptionRef}
    >
      {pathname === "/Login" && (
        <Link className={linkClass} href="/Register">
          회원가입
        </Link>
      )}
      {pathname === "/Register" && (
        <Link className={linkClass} href="/Login">
          로그인
        </Link>
      )}
      {pathname !== "/Login" &&
        pathname !== "/Register" &&
        (isLoggedIn ? (
          <div>
            <Link
              className={`${linkClass} border-b border-solid border-black-25`}
              href="/Compare"
            >
              비교하기
            </Link>
            <Link className={linkClass} href="/Profile">
              내 프로필
            </Link>
          </div>
        ) : (
          <div>
            <Link
              className={`${linkClass} border-b border-solid border-black-25`}
              href="/Login"
            >
              로그인
            </Link>
            <Link className={linkClass} href="/Register">
              회원가입
            </Link>
          </div>
        ))}
    </div>
  );
};

export default GnbHamburgerMenu;
