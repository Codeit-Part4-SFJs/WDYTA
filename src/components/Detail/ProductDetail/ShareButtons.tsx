'use client';

import { useState } from 'react';
import { Icon } from '@/shared/ui/Icon';
import { Toast } from '@/components/@common';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    Kakao: any;
  }
}

interface ShareButtonsProps {
  productName: string;
}

export const ShareButtons = ({ productName }: ShareButtonsProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const order = searchParams?.get('order');

  const url = order
    ? `${process.env.NEXT_PUBLIC_FE_URL}${pathname}?order=${order}`
    : `${process.env.NEXT_PUBLIC_FE_URL}${pathname}`;

  const handleKakaoClick = () => {
    if (!window.Kakao?.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    }

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'WDYTA',
        description: `지금 ${productName} 상품을 비교해보세요`,
        imageUrl:
          'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/168/1719131911147/123IMG_3465.png',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '상품 비교하러 가기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  const [copyUrlStatus, setCopyUrlStatus] = useState('idle');

  const handleUrlButtonClick = async (copyUrl: string) => {
    setCopyUrlStatus('fetching');
    try {
      await navigator.clipboard.writeText(copyUrl);
      setCopyUrlStatus('success');
      setTimeout(() => {
        setCopyUrlStatus('idle');
      }, 3000);
    } catch (error) {
      setCopyUrlStatus('error');
      setTimeout(() => {
        setCopyUrlStatus('idle');
      }, 3000);
    }
  };

  return (
    <div className="relative mobile:absolute mobile:right-0 mobile:top-[-34px] flex shrink-0 gap-[10px]">
      <button
        onClick={handleKakaoClick}
        className="flex justify-center items-center bg-black-25 rounded-md mobile:w-[24px] mobile:h-[24px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]"
        type="button"
      >
        <Icon
          name="KakaoIcon"
          className="mobile:w-[14px] mobile:h-[14px] md:w-[14px] md:h-[14px] lg:w-[18px] lg:h-[18px] fill-gray-6E"
        />
      </button>
      <button
        className="flex justify-center items-center bg-black-25 rounded-md mobile:w-[24px] mobile:h-[24px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] disabled:cursor-not-allowed"
        type="button"
        disabled={copyUrlStatus !== 'idle'}
        onClick={() => handleUrlButtonClick(url)}
      >
        <Icon
          name="ShareIcon"
          className="mobile:w-[14px] mobile:h-[14px] md:w-[14px] md:h-[14px] lg:w-[18px] lg:h-[18px] fill-gray-6E"
        />
      </button>
      {copyUrlStatus === 'success' && (
        <div className="absolute mobile:top-[-70px] right-0 md:top-[-70px] lg:top-[-80px]">
          <Toast text="URL이 복사되었습니다" />
        </div>
      )}
      {copyUrlStatus === 'error' && (
        <div className="absolute mobile:top-[-70px] right-0 md:top-[-70px] lg:top-[-80px]">
          <Toast text="URL 복사에 실패했습니다" />
        </div>
      )}
    </div>
  );
};
