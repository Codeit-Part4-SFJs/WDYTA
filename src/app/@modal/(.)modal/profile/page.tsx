import { AlertModal } from '@/components/@common/modal';
import { Modal } from '@/shared/ui/Modal';

const LoginAlarm = () => {
  return (
    <Modal size="small" closeIcon={false}>
      <AlertModal
        errorMessage="로그인 후 이용해 주세요."
        buttonText="닫기"
        path="/login"
      />
    </Modal>
  );
};

export default LoginAlarm;
