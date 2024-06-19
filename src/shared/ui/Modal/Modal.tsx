'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { useCloseModal } from '@/shared/@common/hooks';
import { useRouter } from 'next/navigation';
import { Icon } from '@/shared/ui/Icon';

const SIZE_MAP = {
  xsmall:
    'w-[500px] mobile:w-[335px] pt-[70px] p-10 mobile:pt-[50px] mobile:p-5',
  small:
    'w-[500px] mobile:w-[335px] pt-[40px] pt-[60px] p-10 mobile:pt-10 mobile:p-5',
  medium:
    'w-[335px] md:w-[590px] lg:w-[620px] pt-10 p-5 md:p-10 lg:pt-[60px] lg:p-10',
  large:
    'w-[335px] md:w-[590px] lg:w-[620px] pt-[60px] p-10 mobile:pt-10 mobile:p-5',
};

interface ModalProps {
  children: ReactNode;
  closeIcon: boolean;
  size: 'xsmall' | 'small' | 'medium' | 'large';
}

export const Modal = ({ children, closeIcon, size }: ModalProps) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    router.back();
  };

  useCloseModal(handleClose, modalRef);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-[999] overflow-auto flex justify-center items-center bg-black bg-opacity-60 backdrop-blur">
      <div
        ref={modalRef}
        className={`${SIZE_MAP[size]} relative flex rounded-2xl bg-black-1C`}
      >
        <button
          className="absolute top-5 right-5 mobile:top-[15px] mobile:right-[15px]"
          onClick={handleClose}
          type="button"
        >
          {closeIcon && (
            <Icon
              name="CloseIcon"
              className="w-6 h-6 md:w-9 md:h-9 lg:w-10 lg:h-10 fill-gray-F1"
            />
          )}
        </button>
        {children}
      </div>
    </div>
  );
};
