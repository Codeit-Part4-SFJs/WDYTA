'use client';

import SocialLoginForm from '@/components/Oauth/SocialLoginForm';
import { useSearchParams } from 'next/navigation';

const OauthSignUp = () => {
  const params = useSearchParams();
  const idToken = params.get('id_token');

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
