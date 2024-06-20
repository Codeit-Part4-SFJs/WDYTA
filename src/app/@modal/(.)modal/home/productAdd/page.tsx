import { ProductModal } from '@/components/@common/modal/ProductModal';
import { Modal } from '@/shared/ui/Modal';
import { cookies } from 'next/headers';

const ProductAddModal = () => {
  const accessToken = cookies().get('accessToken')?.value ?? '';
  return (
    <Modal size="medium" closeIcon>
      <ProductModal accessToken={accessToken} title="상품 추가" />
    </Modal>
  );
};

export default ProductAddModal;
