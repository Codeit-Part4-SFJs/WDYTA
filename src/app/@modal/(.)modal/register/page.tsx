import { AlertModal } from '@/components/@common/modal';
import { Modal } from '@/shared/ui/Modal';
import { useRouter } from 'next/navigation';

const RegisterAlertModal = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/register');
  };

  return (
    <Modal size="xsmall" closeIcon={false}>
      <AlertModal
        errorMessage="회원가입을 다시 시도해주세요"
        buttonText="회원가입 다시하기"
        handleButtonClick={handleButtonClick}
      />
    </Modal>
  );
};

export default RegisterAlertModal;
