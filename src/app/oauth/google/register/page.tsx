'use client';

import SocialLoginForm from '@/components/Oauth/SocialLoginForm';
import { useEffect } from 'react';

const OauthSignUp = () => {
  const { hash } = window.location;
  const params = new URLSearchParams(hash.substring(1));
  const idToken = params.get('id_token');

  useEffect(() => {
    if (!idToken) {
      const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
      const redirectUri = `${process.env.NEXT_PUBLIC_FE_URL}/oauth/google/register`;

      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=id_token&scope=openid&nonce=${
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
      }`;
    }
  }, [idToken]);

  if (idToken) {
    return (
      <div className="flex justify-center mt-[228px] md:mt-[376px] lg:mt-[315px]">
        <SocialLoginForm provider="google" code={idToken} />
      </div>
    );
  }

  return null;
};

export default OauthSignUp;
