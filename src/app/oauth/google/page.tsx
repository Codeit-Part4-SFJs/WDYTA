'use client';

import { useEffect } from 'react';
import useSignInMutation from '@/components/Oauth/hooks/useSignInMutation';
import { Loading } from '@/shared/ui/Icon';

const Oauth = () => {
  const { hash } = window.location;
  const params = new URLSearchParams(hash.substring(1));
  const idToken = params.get('id_token');
  const signInMutation = useSignInMutation('google');

  useEffect(() => {
    if (idToken) {
      const loginData = {
        redirectUri: `${process.env.NEXT_PUBLIC_FE_URL}/oauth/google`,
        token: idToken,
      };
      signInMutation.mutate(loginData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <Loading textClassName="text-center">
        로그인 중입니다. <br /> 잠시만 기다려주세요!
      </Loading>
    </div>
  );
};

export default Oauth;
