'use client';

import SocialLoginForm from '@/components/Oauth/SocialLoginForm';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const OauthSignUp = () => {
  const searchParams = useSearchParams();
  const authorizationCode = searchParams.get('code');

  useEffect(() => {
    if (!authorizationCode) {
      const clientId = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
      const redirectUri = 'http://localhost:3000/oauth/signup';

      window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
    }
  }, [authorizationCode]);

  if (authorizationCode) {
    return (
      <div className="flex justify-center mt-[228px] md:mt-[376px] lg:mt-[315px]">
        <SocialLoginForm code={authorizationCode} />
      </div>
    );
  }

  return null;
};

export default OauthSignUp;
