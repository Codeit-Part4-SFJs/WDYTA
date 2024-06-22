'use client';

import useSignInMutation from '@/components/Oauth/hooks/useSignInMutation';
import { Loading } from '@/shared/ui/Icon';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const Oauth = () => {
  const searchParams = useSearchParams();
  const authorizationCode = searchParams.get('code');

  const signInMutation = useSignInMutation('kakao');

  useEffect(() => {
    if (authorizationCode) {
      const loginData = {
        redirectUri: `${process.env.NEXT_PUBLIC_FE_URL}/oauth/kakao`,
        token: authorizationCode,
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
