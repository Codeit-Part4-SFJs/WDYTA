import React, { useEffect } from 'react';

/**
 * 외부 영역을 클릭하거나 esc 키를 눌렀을 때 모달을 닫는 훅
 *
 * @hook
 * @param {Function} handleClose 모달 닫기 함수
 * @param {React.RefObject} modalRef 모달에 대한 참조 객체
 */
export const useCloseModal = (
  handleClose: () => void,
  modalRef: React.RefObject<HTMLDivElement>,
) => {
  useEffect(() => {
    if (!modalRef.current) return undefined;

    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleClose, modalRef]);
};
