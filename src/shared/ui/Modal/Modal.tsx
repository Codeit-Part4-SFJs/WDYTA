'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { useCloseModal } from '@/shared/@common/hooks';
import { useRouter } from 'next/navigation';

export const Modal = ({ children }: { children: ReactNode }) => {
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
    <div>
      <div ref={modalRef}>{children}</div>
    </div>
  );
};
