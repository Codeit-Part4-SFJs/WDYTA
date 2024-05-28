'use client';

import { Button, ButtonKind } from '@/shared/ui/Button/Button/Button';
import { Floating } from '@/shared/ui/Button/Floating/Floating';
import Loading from '@/shared/ui/Icon/Loading';
import { Input } from '@/shared/ui/Input';
import { useState } from 'react';

const Compare = () => {
  const [isCompare, setIsCompare] = useState(false);

  return (
    <>
      <div className="flex justify-center gap-5 w-full mt-[60px] h-[400px] mobile:flex-col mobile:items-center">
        <div className="flex flex-row gap-5 mobile:flex-col">
          <div className="flex flex-col items-start gap-[10px]">
            <p className="text-base text-white">상품 1</p>
            <Input inputSize="xsmall" />
          </div>
          <div className="flex flex-col items-start gap-[10px]">
            <p className="text-base text-white">상품 2</p>
            <Input inputSize="xsmall" />
          </div>
        </div>
        <div className="mt-">
          <Button
            kind={ButtonKind.primary}
            customSize="w-[200px] h-[70px] mt-[34px] w-[200px] md:w-[164px] mobile:w-[288px]"
            onClick={() => setIsCompare(!isCompare)}
          >
            비교하기
          </Button>
        </div>
      </div>
      {isCompare && (
        <div className="flex flex-col items-center gap-5">
          <Loading />
          <p className=" text-xl align-center text-gray-6E">Loading...</p>
        </div>
      )}

      <Floating />
    </>
  );
};

export default Compare;
