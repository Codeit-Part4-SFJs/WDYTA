import { AlertModal } from '@/components/@common/modal';
import { Modal } from '@/shared/ui/Modal';

const AuthAlertModal = () => {
  return (
    <Modal size="xsmall" closeIcon={false}>
      <AlertModal
        errorMessage="이미 로그인된 상태입니다"
        buttonText="홈으로 가기"
        path="/"
      />
    </Modal>
  );
};

export default AuthAlertModal;
