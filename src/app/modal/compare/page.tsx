import { CompareModal } from '@/components/@common/modal/CompareModal';
import { Modal } from '@/shared/ui/Modal';
import { cookies } from 'next/headers';

const CompareProductModal = ({
  searchParams,
}: {
  searchParams: { productId: number };
}) => {
  const { productId } = searchParams;
  const accessToken = cookies().get('accessToken')?.value ?? '';
  return (
    <Modal size="xsmall" closeIcon={false}>
      <CompareModal productId={productId} accessToken={accessToken} />
    </Modal>
  );
};

export default CompareProductModal;
