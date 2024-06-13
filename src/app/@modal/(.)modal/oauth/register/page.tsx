import { AlertModal } from '@/components/@common/modal';
import { Modal } from '@/shared/ui/Modal';
import { useRouter } from 'next/navigation';

const OauthSignUpAlertModal = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/oauth/register');
  };

  return (
    <Modal size="xsmall" closeIcon={false}>
      <AlertModal
        errorMessage="회원이 아닙니다"
        buttonText="회원가입 하기"
        handleButtonClick={handleButtonClick}
      />
    </Modal>
  );
};

export default OauthSignUpAlertModal;
