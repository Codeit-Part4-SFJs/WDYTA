'use server';

import { cookies } from 'next/headers';

const logoutAction = async () => {
  cookies().delete('accessToken');
  cookies().delete('userId');
};

export default logoutAction;
