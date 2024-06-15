import UserListModal from '@/components/Profile/modal/UserListModal';
import { getUserCookies } from '@/shared/@common/utils/getUserCookies';
import { Modal } from '@/shared/ui/Modal';

const UserFollowingList = () => {
  const { loginedId, accessToken } = getUserCookies();

  return (
    <Modal size="small" closeIcon>
      <UserListModal accessToken={accessToken} loginedId={loginedId} />
    </Modal>
  );
};

export default UserFollowingList;
