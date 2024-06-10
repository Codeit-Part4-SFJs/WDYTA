import { ProfilePageComponent } from '@/components/Profile';
import { getUserCookies } from '@/shared/@common/utils/getUserCookies';

export default function Profile() {
  const { loginedId } = getUserCookies();
  return <ProfilePageComponent userId={Number(loginedId)} />;
}
