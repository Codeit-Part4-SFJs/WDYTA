'use server';

import { cookies } from 'next/headers';

interface LoginActionProps {
  accessToken: string;
  user: {
    id: string;
  };
}

const loginAction = async (data: LoginActionProps) => {
  const { accessToken, user } = data;

  cookies().set('accessToken', accessToken);
  cookies().set('userId', user.id);
};

export default loginAction;
