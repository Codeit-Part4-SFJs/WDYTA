'use server';

import { cookies } from 'next/headers';

const logoutAction = () => {
  cookies().delete('accessToken');
  cookies().delete('userId');
};

export default logoutAction;
