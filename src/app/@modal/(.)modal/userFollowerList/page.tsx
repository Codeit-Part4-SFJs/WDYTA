import UserListModal from '@/components/Profile/modal/UserListModal';
import { getUserCookies } from '@/shared/@common/utils/getUserCookies';
import { Modal } from '@/shared/ui/Modal';

const UserFollowerList = () => {
  const { accessToken, loginedId } = getUserCookies();
  return (
    <Modal size="small" closeIcon>
      <UserListModal accessToken={accessToken} loginedId={loginedId} />
    </Modal>
  );
};

export default UserFollowerList;
