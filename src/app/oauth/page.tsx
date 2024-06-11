'use client';

import useSignInMutation from '@/components/Oauth/hooks/useSignInMutation';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const Oauth = () => {
  const searchParams = useSearchParams();
  const authorizationCode = searchParams.get('code');

  const signInMutation = useSignInMutation('kakao'); // 이거 나중에 변경할거임

  useEffect(() => {
    if (authorizationCode) {
      const loginData = {
        redirectUri: 'http://localhost:3000/oauth',
        token: authorizationCode,
      };
      signInMutation.mutate(loginData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Oauth;
