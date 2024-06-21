'use client';

import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-10">
      <Image src="/404.gif" alt="404 페이지" width={750} height={750} />
      <Button
        kind={ButtonKind.primary}
        customSize="lg:text-lg mobile:w-[295px] w-[550px] h-[50px] md:h-[55px] lg:h-[65px]"
        onClick={() => {
          router.push('/');
        }}
      >
        홈으로 가기
      </Button>
    </div>
  );
}
