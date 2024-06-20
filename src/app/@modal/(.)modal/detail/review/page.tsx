import { ReviewModal } from '@/components/Detail/modal';
import { Modal } from '@/shared/ui/Modal';
import { cookies } from 'next/headers';

const ProductReviewModal = () => {
  const accessToken = cookies().get('accessToken')?.value ?? '';
  return (
    <Modal size="medium" closeIcon>
      <ReviewModal accessToken={accessToken} />
    </Modal>
  );
};

export default ProductReviewModal;
