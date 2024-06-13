'use client';

import { ReviewModal } from '@/components/Detail/modal';
import { Modal } from '@/shared/ui/Modal';

const ExampleModal = () => {
  return (
    <Modal size="medium" closeIcon>
      <ReviewModal
        accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY0LCJ0ZWFtSWQiOiI0LTE5IiwiaWF0IjoxNzE4MjAxMTg5LCJpc3MiOiJzcC1tb2dhem9hIn0.IUV_94s1EqzVlA98DJf0F6QQKeIwxGoQttB2jrFbWeg"
        categoryId={7}
        name="Sony WH-1000XM3"
      />
    </Modal>
  );
};

export default ExampleModal;
