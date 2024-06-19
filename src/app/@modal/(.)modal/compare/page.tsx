import { CompareModal } from '@/components/@common/modal/CompareModal';
import { Modal } from '@/shared/ui/Modal';
import { cookies } from 'next/headers';

const CompareChangeModal = ({
  searchParams,
}: {
  searchParams: { productId: number };
}) => {
  const { productId } = searchParams;
  const accessToken = cookies().get('accessToken')?.value ?? '';
  return (
    <Modal size="large" closeIcon>
      <CompareModal productId={productId} accessToken={accessToken} />
    </Modal>
  );
};

export default CompareChangeModal;
