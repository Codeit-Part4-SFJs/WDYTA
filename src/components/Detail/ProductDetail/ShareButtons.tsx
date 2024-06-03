import { Icon } from '@/shared/ui/Icon';

export const ShareButtons = () => {
  return (
    <div className="mobile:absolute mobile:right-0 mobile:top-[-34px] flex shrink-0 gap-[10px]">
      <button
        className="flex justify-center items-center bg-black-25 rounded-md mobile:w-[24px] mobile:h-[24px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]"
        type="button"
      >
        <Icon
          name="KakaoIcon"
          className="mobile:w-[14px] mobile:h-[14px] md:w-[14px] md:h-[14px] lg:w-[18px] lg:h-[18px] fill-gray-6E"
        />
      </button>
      <button
        className="flex justify-center items-center bg-black-25 rounded-md mobile:w-[24px] mobile:h-[24px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]"
        type="button"
      >
        <Icon
          name="ShareIcon"
          className="mobile:w-[14px] mobile:h-[14px] md:w-[14px] md:h-[14px] lg:w-[18px] lg:h-[18px] fill-gray-6E"
        />
      </button>
    </div>
  );
};
