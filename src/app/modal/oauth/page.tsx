'use client';

import { AlertModal } from '@/components/@common/modal';
import { Modal } from '@/shared/ui/Modal';
import { useRouter } from 'next/navigation';

const OauthAlertModal = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/login');
  };

  return (
    <Modal size="xsmall" closeIcon={false}>
      <AlertModal
        errorMessage="소셜 로그인을 다시 시도해주세요"
        buttonText="소셜 로그인 다시하기"
        handleButtonClick={handleButtonClick}
      />
    </Modal>
  );
};

export default OauthAlertModal;
