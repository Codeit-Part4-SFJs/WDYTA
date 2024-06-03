import Link from 'next/link';
import { GnbSettingButton } from '@/shared/ui/Menu/Gnb/GnbSettingButton';

const flexClass = 'mobile:hidden md:flex lg:flex md:gap-[30px] lg:gap-[60px] ';
const LinkClass =
  'mobile:hidden md:text-[14px] lg:text-4 text-gray-F1 not-italic font-normal leading-normal';

const GnbUserSign = () => {
  return (
    <div className={flexClass}>
      <Link className={LinkClass} href="/login">
        로그인
      </Link>
      <Link className={LinkClass} href="/register">
        회원가입
      </Link>
    </div>
  );
};

const GnbUserFeature = () => {
  return (
    <div className={flexClass}>
      <Link className={LinkClass} href="/compare">
        비교하기
      </Link>
      <GnbSettingButton />
    </div>
  );
};

export const GnbUser = () => {
  // TO DO: 로그인 기능 구현 이후 로그인 유무에 따른 분기처리 추가 예정, 현재는 임시로 만든 상태!
  const isLoggedIn = true;

  return (
    <div className="mobile:hidden">
      {isLoggedIn ? <GnbUserFeature /> : <GnbUserSign />}
    </div>
  );
};
