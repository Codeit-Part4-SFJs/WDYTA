import { EditModal } from '@/components/Detail/modal';
import { Modal } from '@/shared/ui/Modal';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ProductEditModal = () => {
  const accessToken = cookies().get('accessToken')?.value ?? '';

  if (!accessToken) {
    redirect('/modal/common/loginAlert');
  }

  return (
    <Modal size="large" closeIcon>
      <EditModal accessToken={accessToken} />
    </Modal>
  );
};

export default ProductEditModal;
