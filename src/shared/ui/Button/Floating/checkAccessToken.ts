'use server';

import { cookies } from 'next/headers';

export const checkAccessTokenExists = () => {
  const accessToken = cookies().get('accessToken')?.value;
  return !!accessToken; // accessToken이 있으면 true, 없으면 false 반환
};
