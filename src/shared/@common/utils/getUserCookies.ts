import { cookies } from 'next/headers';

interface UserCookies {
  loginedId: number;
  accessToken: string;
}

export const getUserCookies = (): UserCookies => {
  const userIdCookie = cookies().get('userId');
  const accessTokenCookie = cookies().get('accessToken');

  const loginedId = Number(userIdCookie?.value) ?? null;
  const accessToken = accessTokenCookie?.value ?? '';

  return { loginedId, accessToken };
};
