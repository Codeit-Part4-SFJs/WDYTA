import { cookies } from 'next/headers';

interface UserCookies {
  loginedId: string;
  accessToken: string;
}

export const getUserCookies = (): UserCookies => {
  const userIdCookie = cookies().get('userId');
  const accessTokenCookie = cookies().get('accessToken');

  const loginedId = userIdCookie?.value || '';
  const accessToken = accessTokenCookie?.value || '';

  return { loginedId, accessToken };
};
