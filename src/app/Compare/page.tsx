"use client";

import Button, { ButtonKind } from "@/shared/ui/Button/Button";
import Floating from "@/shared/ui/Button/Floating";
import Loading from "@/shared/ui/Icon/Loading";
import Input from "@/shared/ui/Input";
import Gnb from "@/shared/ui/Menu/Gnb/Gnb";
import { useState } from "react";

const Compare = () => {
  const [isCompare, setIsCompare] = useState(false);

  return (
    <>
      <Gnb />
      <div className="flex justify-center gap-5 m-[60px] h-[400px] ">
        <div className="flex flex-row gap-5">
          <div className="flex flex-col items-start gap-[10px] lg:w-[240px]">
            <p className="text-base text-white">상품 1</p>
            <Input inputSize="small"></Input>
          </div>
          <div className="flex flex-col items-start gap-[10px] lg:w-[240px]">
            <p className="text-base text-white">상품 2</p>
            <Input inputSize="small"></Input>
          </div>
        </div>
        <div className="mt-">
          <Button
            kind={ButtonKind.primary}
            customSize="w-[200px] h-[70px] mt-[34px] lg:w-[288px]"
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

      <Floating location="right-[90px] bottom-[180px]" />
    </>
  );
};

export default Compare;
