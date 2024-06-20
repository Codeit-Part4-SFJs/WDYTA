import { AlertModal } from '@/components/@common/modal';
import { Modal } from '@/shared/ui/Modal';

const LoginAlertModal = () => {
  return (
    <Modal size="xsmall" closeIcon={false}>
      <AlertModal
        errorMessage="로그인 정보를 다시 확인해주세요"
        buttonText="로그인 다시하기"
      />
    </Modal>
  );
};

export default LoginAlertModal;
