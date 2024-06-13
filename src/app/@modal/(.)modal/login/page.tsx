import { AlertModal } from '@/components/@common/modal';
import { Modal } from '@/shared/ui/Modal';
import { useRouter } from 'next/navigation';

const LoginAlertModal = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/login');
  };

  return (
    <Modal size="xsmall" closeIcon={false}>
      <AlertModal
        errorMessage="로그인 정보를 다시 확인해주세요"
        buttonText="로그인 다시하기"
        handleButtonClick={handleButtonClick}
      />
    </Modal>
  );
};

export default LoginAlertModal;
