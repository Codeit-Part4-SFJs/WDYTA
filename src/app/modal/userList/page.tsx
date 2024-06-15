import UserListModal from '@/components/Profile/modal/UserListModal';
import { Modal } from '@/shared/ui/Modal';

const UserList = () => {
  return (
    <Modal size="small" closeIcon>
      <UserListModal />
    </Modal>
  );
};

export default UserList;
