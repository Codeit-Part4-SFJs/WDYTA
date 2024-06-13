import { AlertModal } from '@/components/@common/modal';
import { Modal } from '@/shared/ui/Modal';

const RegisterAlertModal = () => {
  return (
    <Modal size="xsmall" closeIcon={false}>
      <AlertModal
        errorMessage="회원가입을 다시 시도해주세요"
        buttonText="회원가입 다시하기"
        path="/register"
      />
    </Modal>
  );
};

export default RegisterAlertModal;
