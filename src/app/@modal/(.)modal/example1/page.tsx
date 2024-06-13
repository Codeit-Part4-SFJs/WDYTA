'use client';

import { ReviewModal } from '@/components/Detail/modal';
import { Modal } from '@/shared/ui/Modal';

const ExampleModal = () => {
  return (
    <Modal size="medium" closeIcon>
      <ReviewModal />
    </Modal>
  );
};

export default ExampleModal;
