import { Modal } from '@/shared/ui/Modal';
import { AddModal } from '@/components/Home/modal/AddModal';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ProductAddModal = () => {
  const accessToken = cookies().get('accessToken')?.value ?? '';
  const userId = cookies().get('userId')?.value ?? '';

  if (!accessToken) {
    redirect('/modal/common/loginAlert');
  }

  return (
    <Modal size="medium" closeIcon>
      <AddModal accessToken={accessToken} userId={userId} title="상품 추가" />
    </Modal>
  );
};

export default ProductAddModal;
