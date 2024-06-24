import { ReviewEditModal } from '@/components/Detail/modal';
import { Modal } from '@/shared/ui/Modal';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ProductReviewEditModal = () => {
  const accessToken = cookies().get('accessToken')?.value ?? '';

  if (!accessToken) {
    redirect('/modal/common/loginAlert');
  }

  return (
    <Modal size="medium" closeIcon>
      <ReviewEditModal accessToken={accessToken} />
    </Modal>
  );
};

export default ProductReviewEditModal;
