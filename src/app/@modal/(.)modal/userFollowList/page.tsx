import UserListModal from '@/components/Profile/modal/UserListModal';
import { SkeletonUserListModal } from '@/components/Profile/skeleton';
import { getUserCookies } from '@/shared/@common/utils/getUserCookies';
import { Modal } from '@/shared/ui/Modal';
import { Suspense } from 'react';

const UserFollowList = () => {
  const { accessToken, loginedId } = getUserCookies();

  return (
    <Modal size="small" closeIcon>
      <Suspense fallback={<SkeletonUserListModal />}>
        <UserListModal accessToken={accessToken} loginedId={loginedId} />
      </Suspense>
    </Modal>
  );
};

export default UserFollowList;
