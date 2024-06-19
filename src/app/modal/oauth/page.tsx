import { AlertModal } from '@/components/@common/modal';
import { Modal } from '@/shared/ui/Modal';

const OauthAlertModal = () => {
  return (
    <Modal size="xsmall" closeIcon={false}>
      <AlertModal
        errorMessage="소셜 로그인을 다시 시도해주세요"
        buttonText="소셜 로그인 다시하기"
        path="/login"
      />
    </Modal>
  );
};

export default OauthAlertModal;
