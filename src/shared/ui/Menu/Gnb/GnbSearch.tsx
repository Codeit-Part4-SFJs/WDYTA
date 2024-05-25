"use client";

import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  GnbSearchBarProps,
  GnbSearchButtonProps,
  SearchInput,
} from "@/shared/types/GnbType";
import IconComponent from "@/shared/ui/Icon/Icon";
import useClose from "@/shared/@common/hooks/useClose";

const GnbSearch = () => {
  const [isOpenMobileSearchBar, setIsOpenMobileSearchBar] =
    useState<boolean>(false);
  const handleToggledSearchBar = () => {
    setIsOpenMobileSearchBar(!isOpenMobileSearchBar);
  };

  return (
    <>
      <GnbSearchButton
        isOpenMobileSearchBar={isOpenMobileSearchBar}
        handleToggledSearchBar={handleToggledSearchBar}
      />
      <GnbSearchBar
        isOpenMobileSearchBar={isOpenMobileSearchBar}
        handleToggledSearchBar={handleToggledSearchBar}
      />
    </>
  );
};

const GnbSearchBar = ({
  isOpenMobileSearchBar,
  handleToggledSearchBar,
}: GnbSearchBarProps) => {
  const { register, handleSubmit } = useForm<SearchInput>();
  const onSubmit: SubmitHandler<SearchInput> = (data) => {
    console.log(data);
    // TO DO: 검색 기능 추후 추가 요망
  };

  const searchBarRef = useRef<HTMLDivElement>(null);
  useClose(isOpenMobileSearchBar, handleToggledSearchBar, searchBarRef);

  return (
    <div
      ref={searchBarRef}
      className={`${isOpenMobileSearchBar ? "block" : "mobile:hidden md:block lg:block"}`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mobile:w-[291px] md:w-[300px] lg:w-[300px] mobile:h-[48px] md:h-[50px] lg:h-[50px] flex items-center justify-start rounded-[28px] bg-black-25"
      >
        <label
          htmlFor="search"
          className="mobile:pl-[15px] mobile:py-4 md:pl-5 md:py-4 lg:pl-5 lg:py-4"
        >
          <IconComponent
            name="SearchIcon"
            className="w-[24px] h-[24px] fill-gray-9F"
          />
        </label>
        <input
          className="mobile:px-[15px] mobile:py-4 md:pl-[10px] md:pr-[20px] md:py-4 lg:pl-[10px] lg:pr-[20px] lg:py-4 placeholder:text-gray-6E placeholder:text-[14px] placeholder:not-italic placeholder:font-normal placeholder:leading-normal text-gray-F1 text-[14px] not-italic font-normal leading-normal w-full h-full bg-black-25 rounded-r-[28px] outline-none"
          // 최대 글자 수도 임시로 정함, 변경 가능!
          maxLength={30}
          autoComplete="off"
          id="search"
          placeholder="상품 이름을 검색해 보세요"
          type="text"
          {...register("search", {
            required: true,
            // 정규식 등등 새로운 규칙 추가 가능! 지금은 임시로 설정함, 필요시 추가 가능!
            maxLength: 30,
          })}
        />
      </form>
    </div>
  );
};

const GnbSearchButton = ({
  isOpenMobileSearchBar,
  handleToggledSearchBar,
}: GnbSearchButtonProps) => {
  return (
    <button
      className={`${isOpenMobileSearchBar ? "hidden" : "mobile:block md:hidden lg:hidden"}`}
      type="button"
      onClick={handleToggledSearchBar}
    >
      <IconComponent
        name="SearchIcon"
        className="w-[24px] h-[24px] fill-gray-9F"
      />
    </button>
  );
};

export default GnbSearch;
