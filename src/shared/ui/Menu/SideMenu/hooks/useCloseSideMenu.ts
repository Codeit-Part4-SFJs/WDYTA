import React, { useEffect } from "react";

/**
 * 외부 영역을 클릭하거나 esc 키를 눌렀을 때 SideMenu를 닫는 훅
 *
 * @hook
 * @param {boolean} isOpenSideMenu SideMenu의 열림 유무
 * @param {Function} setIsOpenSideMenu 같이 SideMenu의 열림 상태를 관리하는 함수
 * @param {React.RefObject} sideMenuRef SideMenu 영역
 */

export default function useCloseSideMenu(
  isOpenSideMenu: boolean,
  handleClose: () => void,
  sideMenuRef: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(e.target as Node)
      ) {
        handleClose();
      }
    };
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpenSideMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpenSideMenu, handleClose, sideMenuRef]);
}
