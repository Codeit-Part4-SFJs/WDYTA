import EditModal from '@/components/Profile/modal/EditModal';
import { getUserCookies } from '@/shared/@common/utils/getUserCookies';
import { Modal } from '@/shared/ui/Modal';

const ProfileEdit = () => {
  const { accessToken } = getUserCookies();
  return (
    <Modal size="large" closeIcon>
      <EditModal accessToken={accessToken} />
    </Modal>
  );
};

export default ProfileEdit;
