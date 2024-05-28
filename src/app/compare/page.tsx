'use client';

import { Table } from '@/components/Compare/Table';
import { Button, ButtonKind } from '@/shared/ui/Button/Button/Button';
import { Floating } from '@/shared/ui/Button/Floating/Floating';
import Loading from '@/shared/ui/Icon/Loading';
import { Input } from '@/shared/ui/Input';
import { useEffect, useState } from 'react';

const Compare = () => {
  const [isCompare, setIsCompare] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (isCompare) {
      setIsLoad(true);
    }
  }, [isCompare]);

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
      {isLoad && (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col h-[300px] items-center justify-center gap-5 md:max-w-[200px] mobile:max-w-[200px] ">
            <p className="text-white lg:text-2xl text-xl">
              Air Pods Max 상품이 승리하였습니다!
            </p>
            <p className="text-gray-9F lg:text-base text-xs">
              3가지 항목 중 2가지 항목에서 우세합니다.
            </p>
          </div>
          <div className="mb-[100px]">
            <Table />
          </div>
        </div>
      )}

      <Floating />
    </>
  );
};

export default Compare;
