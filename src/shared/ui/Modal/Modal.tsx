'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { useCloseModal } from '@/shared/@common/hooks';
import { useRouter } from 'next/navigation';
import { Icon } from '@/shared/ui/Icon';

export const Modal = ({
  children,
  closeIcon,
}: {
  children: ReactNode;
  closeIcon: boolean;
}) => {
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
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-[999] overflow-auto flex justify-center items-center bg-black bg-opacity-60 backdrop-blur">
      <div
        ref={modalRef}
        className="w-auto h-auto mobile:p-[15px] md:p-[20px] lg:p-[20px] flex justify-start items-end flex-col rounded-2xl bg-black-1C"
      >
        <button onClick={handleClose} type="button">
          {closeIcon && (
            <Icon
              name="CloseIcon"
              className="mobile:w-[24px] mobile:h-[24px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px] fill-gray-F1"
            />
          )}
        </button>
        {children}
      </div>
    </div>
  );
};
