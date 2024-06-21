import { AlertModal } from '@/components/@common/modal';
import { Modal } from '@/shared/ui/Modal';

const CompareDuplicateModal = () => {
  return (
    <Modal size="small" closeIcon>
      <AlertModal
        errorMessage="이미 비교 대상에 포함되어 있습니다."
        buttonText="닫기"
      />
    </Modal>
  );
};

export default CompareDuplicateModal;
