import { GnbHamburgerMenu } from '@/shared/ui/Menu/Gnb/GnbHamburgerMenu';
import { GnbLogo } from '@/shared/ui/Menu/Gnb/GnbLogo';
import { GnbSearch } from '@/shared/ui/Menu/Gnb/GnbSearch';
import { GnbUser } from '@/shared/ui/Menu/Gnb/GnbUser';
import { cookies } from 'next/headers';

export const Gnb = () => {
  const userId = cookies().get('userId');
  const isLoggedIn = !!userId?.value;

  return (
    <header className="fixed top-0 z-50 flex justify-center bg-black-1C w-full border-b border-solid border-black-25">
      <div className="mobile:h-[70px] mobile:px-5 mobile:py-[23px] mobile:gap-[20px] md:px-[30px] md:py-[22px] md:gap-[30px] md:h-[80px] lg:gap-[60px] lg:h-[100px] lg:px-[120px] lg:py-[22px] flex items-center justify-between w-full min-w-[375px] max-w-[1920px]">
        <GnbHamburgerMenu isLoggedIn={isLoggedIn} />
        <GnbLogo />
        <GnbSearch />
        <GnbUser isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
};
