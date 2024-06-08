import { ProfilePageComponent } from '@/components/Profile';
import { getUserCookies } from '@/shared/@common/utils/getUserCookies';

export default function Profile() {
  const { loginedId, accessToken } = getUserCookies();
  return (
    <ProfilePageComponent
      currentProfileId={loginedId}
      loginedId={loginedId}
      accessToken={accessToken}
    />
  );
}
