"use client";

import { usePathname } from "next/navigation";
import IconComponent from "../../Icon/Icon";
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
        <IconComponent
          name="MenuIcon"
          className="mobile:w-[24px] mobile:h-[24px] md:hidden lg:hidden fill-gray-9F"
        />
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
  const isLoggedIn = false;

  const pathname = usePathname();
  const MenuOptionRef = useRef<HTMLDivElement>(null);
  useClose(isOpenHamburgerMenu, handleToggledHamburgerMenu, MenuOptionRef);

  const linkClass = "block w-52 p-2.5 hover:bg-black-25";

  return (
    <div
      className="mobile:block md:hidden lg:hidden absolute z-50 w-52 overflow-hidden bg-black-1C rounded-lg text-gray-F1 not-italic font-normal leading-normal text-[14px] text-center"
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
            <Link className={linkClass} href="/Compare">
              비교하기
            </Link>
            <Link className={linkClass} href="/Profile">
              내 프로필
            </Link>
          </div>
        ) : (
          <div>
            <Link className={linkClass} href="/Login">
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
