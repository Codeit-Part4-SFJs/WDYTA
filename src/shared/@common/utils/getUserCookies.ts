import { cookies } from 'next/headers';

export const getUserCookies = () => {
  const userIdCookie = cookies().get('userId');
  const accessTokenCookie = cookies().get('accessToken');
  const loginedId = userIdCookie?.value ? Number(userIdCookie?.value) : null;
  const accessToken = accessTokenCookie?.value ?? '';

  return { loginedId, accessToken };
};
