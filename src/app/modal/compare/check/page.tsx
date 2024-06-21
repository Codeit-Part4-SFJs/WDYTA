import { CheckModal } from '@/components/@common/modal/CheckModal';
import { Modal } from '@/shared/ui/Modal';

const CompareCheckModal = () => {
  return (
    <Modal size="small" closeIcon={false}>
      <CheckModal />
    </Modal>
  );
};

export default CompareCheckModal;
