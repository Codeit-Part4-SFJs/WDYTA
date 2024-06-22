'use client';

import { useEffect, useState } from 'react';
import useSignInMutation from '@/components/Oauth/hooks/useSignInMutation';
import { Loading } from '@/shared/ui/Icon';

const Oauth = () => {
  const [idToken, setIdToken] = useState('');
  const signInMutation = useSignInMutation('google', idToken);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const token = params.get('id_token') || '';
    setIdToken(token);

    if (token) {
      const loginData = {
        redirectUri: `${process.env.NEXT_PUBLIC_FE_URL}/oauth/google`,
        token,
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
