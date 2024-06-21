import { AlertModal } from '@/components/@common/modal';
import { Modal } from '@/shared/ui/Modal';

const LoginAlert = () => {
  return (
    <Modal size="small" closeIcon={false}>
      <AlertModal errorMessage="로그인 후 이용해 주세요." buttonText="닫기" />
    </Modal>
  );
};

export default LoginAlert;
