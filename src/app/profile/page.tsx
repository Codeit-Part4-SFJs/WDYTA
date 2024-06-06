import { ProfilePageComponent } from '@/components/Profile';
import { cookies } from 'next/headers';

export default function Profile() {
  const userIdCookie = cookies().get('userId');
  const accessTokenCookie = cookies().get('accessToken');
  const userId = userIdCookie ? userIdCookie.value : null;
  const accessToken = accessTokenCookie ? accessTokenCookie.value : '';

  console.log(userId);
  return (
    <ProfilePageComponent
      currentProfileId={userId}
      loginedId={userId}
      accessToken={accessToken}
    />
  );
}
