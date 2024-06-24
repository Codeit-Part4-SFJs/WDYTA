import EditModal from '@/components/Profile/modal/EditModal';
import { getUserCookies } from '@/shared/@common/utils/getUserCookies';
import { Modal } from '@/shared/ui/Modal';
import { redirect } from 'next/navigation';

const ProfileEdit = () => {
  const { accessToken, loginedId } = getUserCookies();

  if (!accessToken) {
    redirect('/modal/common/loginAlert');
  }

  return (
    <Modal size="large" closeIcon>
      <EditModal accessToken={accessToken} loginedId={loginedId} />
    </Modal>
  );
};

export default ProfileEdit;
