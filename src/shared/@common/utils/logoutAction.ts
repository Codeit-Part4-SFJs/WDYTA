'use server';

import { cookies } from 'next/headers';

export const logoutAction = () => {
  cookies().delete('accessToken');
  cookies().delete('userId');
};
