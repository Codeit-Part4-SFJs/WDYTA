import { EditModal } from '@/components/Detail/modal';
import { Modal } from '@/shared/ui/Modal';
import { cookies } from 'next/headers';

const ProductEditModal = () => {
  const accessToken = cookies().get('accessToken')?.value ?? '';
  return (
    <Modal size="large" closeIcon>
      <EditModal accessToken={accessToken} />
    </Modal>
  );
};

export default ProductEditModal;
