import { AlertModal } from '@/components/@common/modal';
import { Modal } from '@/shared/ui/Modal';

const OauthSignUpAlertModal = () => {
  return (
    <Modal size="xsmall" closeIcon={false}>
      <AlertModal
        errorMessage="회원이 아닙니다"
        buttonText="회원가입 하기"
        path="/oauth/kakao/register"
      />
    </Modal>
  );
};

export default OauthSignUpAlertModal;
