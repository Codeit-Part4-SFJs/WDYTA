'use client';

import { Icon } from '@/shared/ui/Icon';
import { IconType } from '@/shared/ui/Icon/types/iconType';

interface SocialLoginProps {
  name: IconType;
  handleClick: () => void;
}

// 구글 API 수정 후 다시 해봐야함!
const handleGoogleClick = () => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const redirectUri = 'http://localhost:3000/socialLogin';
  const responseType = 'code';
  const scope = 'https://www.googleapis.com/auth/drive.metadata.readonly';

  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
};

const handleKakaoClick = () => {
  const clientId = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
  const redirectUri = 'http://localhost:3000/oauth';

  window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
};

const SNS_MAP: SocialLoginProps[] = [
  { name: 'GoogleIcon', handleClick: handleGoogleClick },
  { name: 'KakaoIcon', handleClick: handleKakaoClick },
];

const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-5 mt-[40px]">
      <span className="text-sm lg:text-base font-normal text-gray-6E">
        SNS로 바로 시작하기
      </span>
      <div className="flex gap-5">
        {SNS_MAP.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={item.handleClick}
            className="w-14 h-14 p-[14px] rounded-full border border-solid border-gray-6E flex items-center justify-center"
          >
            <Icon
              name={item.name}
              className="w-full h-full text-gray-6E cursor-pointer"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialLogin;
