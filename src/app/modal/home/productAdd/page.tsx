import { Modal } from '@/shared/ui/Modal';
import { AddModal } from '@/components/Home/modal/AddModal';
import { cookies } from 'next/headers';

const ProductAddModal = () => {
  const accessToken = cookies().get('accessToken')?.value ?? '';
  return (
    <Modal size="medium" closeIcon>
      <AddModal accessToken={accessToken} title="상품 추가" />
    </Modal>
  );
};

export default ProductAddModal;
