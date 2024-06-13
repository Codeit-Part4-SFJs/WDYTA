'use client';

import { ReviewModal } from '@/components/Detail/modal';
import { Modal } from '@/shared/ui/Modal';

const ExampleModal = () => {
  return (
    <Modal size="medium" closeIcon>
      <ReviewModal accessToken="" categoryId={4} name="dkssud" />
    </Modal>
  );
};

export default ExampleModal;
