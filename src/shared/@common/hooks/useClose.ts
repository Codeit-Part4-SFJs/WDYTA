import React, { useEffect } from 'react';

/**
 * 외부 영역을 클릭하거나 esc 키를 눌렀을 때 Modal, DropDown, SideMenu, HamburgerMenu를 닫는 훅
 *
 * @hook
 * @param {boolean} isOpenElement Modal, DropDown, SideMenu, HamburgerMenu의 열림 유무 상태
 * @param {Function} setIsOpenElement 같이 Modal, DropDown, SideMenu, HamburgerMenu의 열림 상태를 관리하는 함수
 * @param {React.RefObject} elementRef Modal, DropDown, SideMenu, HamburgerMenu 영역
 */

export default function useClose(
  isOpenElement: boolean,
  handleClose: () => void,
  elementRef: React.RefObject<HTMLDivElement>,
) {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(e.target as Node)
      ) {
        handleClose();
      }
    };
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpenElement) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpenElement, handleClose, elementRef]);
}
