import Link from 'next/link';
import { GnbSettingButton } from '@/shared/ui/Menu/Gnb/GnbSettingButton';
import { GnbUserProps } from '@/shared/ui/Menu/Gnb/types/gnbType';
import { GnbCompareButton } from './GnbCompareButton';

const flexClass =
  'mobile:hidden md:flex lg:flex md:justify-end lg:justify-end md:gap-[30px] lg:gap-[60px] md:w-[127px] lg:w-[171px]';
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
      <GnbCompareButton />
      <GnbSettingButton />
    </div>
  );
};

export const GnbUser = ({ isLoggedIn }: GnbUserProps) => {
  return (
    <div className="mobile:hidden">
      {isLoggedIn ? <GnbUserFeature /> : <GnbUserSign />}
    </div>
  );
};
