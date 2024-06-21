'use client';

import useSignInMutation from '@/components/Oauth/hooks/useSignInMutation';
import { Loading } from '@/shared/ui/Icon';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Oauth = () => {
  const searchParams = useSearchParams();
  const authorizationCode = searchParams.get('code');
  const [tokenData, setTokenData] = useState('');

  const signInMutation = useSignInMutation('google');

  const router = useRouter();

  useEffect(() => {
    const fetchToken = async () => {
      if (!authorizationCode) return;

      try {
        const params = new URLSearchParams({
          code: authorizationCode,
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
          client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '',
          redirect_uri: `${process.env.NEXT_PUBLIC_FE_URL}/oauth/google`,
          grant_type: 'authorization_code',
        });

        const response = await fetch('https://oauth2.googleapis.com/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString(),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const data = await response.json();
        setTokenData(data.access_token);
      } catch {
        router.push('/modal/oauth', { scroll: false });
      }
    };

    fetchToken();
  }, [authorizationCode, router]);

  useEffect(() => {
    if (tokenData) {
      const loginData = {
        redirectUri: `${process.env.NEXT_PUBLIC_FE_URL}/oauth/google`,
        token: tokenData,
      };
      signInMutation.mutate(loginData);
    }
  }, [signInMutation, tokenData]);

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <Loading textClassName="text-center">
        로그인 중입니다. <br /> 잠시만 기다려주세요!
      </Loading>
    </div>
  );
};

export default Oauth;
