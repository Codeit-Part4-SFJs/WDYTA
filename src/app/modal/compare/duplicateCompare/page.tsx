import { AlertModal } from '@/components/@common/modal';
import { Modal } from '@/shared/ui/Modal';

const CompareDuplicateCompareModal = () => {
  return (
    <Modal size="small" closeIcon>
      <AlertModal
        errorMessage="같은 상품을 비교하시다니.. 바보이신가요?"
        buttonText="닫기"
      />
    </Modal>
  );
};

export default CompareDuplicateCompareModal;
