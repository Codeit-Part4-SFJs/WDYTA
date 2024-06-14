import EditModal from '@/components/Profile/modal/EditModal';
import { Modal } from '@/shared/ui/Modal';

const ProfileEdit = () => {
  return (
    <Modal size="xsmall" closeIcon>
      <EditModal />
    </Modal>
  );
};

export default ProfileEdit;
