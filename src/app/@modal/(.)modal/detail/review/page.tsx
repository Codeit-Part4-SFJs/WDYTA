import { ReviewModal } from '@/components/Detail/modal';
import { Modal } from '@/shared/ui/Modal';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ProductReviewModal = () => {
  const accessToken = cookies().get('accessToken')?.value ?? '';

  if (!accessToken) {
    redirect('/modal/common/loginAlert');
  }

  return (
    <Modal size="medium" closeIcon>
      <ReviewModal accessToken={accessToken} />
    </Modal>
  );
};

export default ProductReviewModal;
