import { ReviewEditModal } from '@/components/Detail/modal';
import { Modal } from '@/shared/ui/Modal';
import { cookies } from 'next/headers';

const ProductReviewEditModal = () => {
  const accessToken = cookies().get('accessToken')?.value ?? '';

  return (
    <Modal size="medium" closeIcon>
      <ReviewEditModal accessToken={accessToken} />
    </Modal>
  );
};

export default ProductReviewEditModal;
