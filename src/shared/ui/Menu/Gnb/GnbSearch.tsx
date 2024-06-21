'use client';

import { useRef, useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  GnbSearchBarProps,
  GnbSearchButtonProps,
  SearchInput,
} from '@/shared/ui/Menu/Gnb/types/gnbType';
import { Icon } from '@/shared/ui/Icon';
import { useClose } from '@/shared/@common/hooks';
import { useRouter, useParams, usePathname } from 'next/navigation';
import { useSearchStore } from '@/stores/useSearchStore';

const GnbSearchBar = ({
  isOpenMobileSearchBar,
  handleToggledSearchBar,
}: GnbSearchBarProps) => {
  const { register, handleSubmit, setValue } = useForm<SearchInput>();
  const router = useRouter();
  const params = useParams<{ category: string }>();
  const category = params?.category;
  const pathname = usePathname();
  // 검색어 상태 관리
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);
  const clearSearchTerm = useSearchStore((state) => state.clearSearchTerm);

  const onSubmit: SubmitHandler<SearchInput> = (data) => {
    const { search } = data;
    setSearchTerm(search);
    if (!category) {
      router.replace(`/no_category?keyword=${search}`, {
        scroll: false,
      });
      return;
    }
    router.replace(`/${category}?keyword=${search}`);
  };

  const searchBarRef = useRef<HTMLDivElement>(null);
  useClose(isOpenMobileSearchBar, handleToggledSearchBar, searchBarRef);

  // 페이지 이동 시 검색어 초기화
  useEffect(() => {
    clearSearchTerm();
    setValue('search', '');
  }, [pathname, clearSearchTerm, setValue]);

  // 검색어 입력 시 검색어 상태 업데이트
  useEffect(() => {
    setValue('search', searchTerm);
  }, [searchTerm, setValue]);

  return (
    <div
      ref={searchBarRef}
      className={`${isOpenMobileSearchBar ? 'block mobile:absolute mobile:z-10 mobile:right-[20px] md:ml-auto lg:ml-auto' : 'mobile:hidden md:block md:ml-auto lg:ml-auto lg:block'}`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mobile:w-[291px] md:w-[300px] lg:w-[320px] mobile:h-[48px] md:h-[50px] lg:h-[50px] flex items-center justify-start rounded-[28px] bg-black-25"
      >
        <label
          htmlFor="search"
          className="mobile:pl-[15px] mobile:py-4 md:pl-5 md:py-4 lg:pl-5 lg:py-4"
        >
          <Icon name="SearchIcon" className="w-[24px] h-[24px] fill-gray-9F" />
        </label>
        <input
          className="mobile:px-[15px] mobile:py-4 md:pl-[10px] md:pr-[20px] md:py-4 lg:pl-[10px] lg:pr-[20px] lg:py-4 placeholder:text-gray-6E placeholder:text-[14px] placeholder:not-italic placeholder:font-normal placeholder:leading-normal text-gray-F1 text-[14px] not-italic font-normal leading-normal w-full h-full bg-black-25 rounded-r-[28px] outline-none"
          // 최대 글자 수도 임시로 정함, 변경 가능!
          maxLength={30}
          autoComplete="off"
          id="search"
          placeholder="상품 이름을 검색해 보세요"
          type="text"
          {...register('search', {
            required: true,
            // 정규식 등등 새로운 규칙 추가 가능! 지금은 임시로 설정함, 필요시 추가 가능!
            maxLength: 30,
          })}
        />
      </form>
    </div>
  );
};

const GnbSearchButton = ({ handleToggledSearchBar }: GnbSearchButtonProps) => {
  return (
    <button
      className="mobile:block md:hidden lg:hidden"
      type="button"
      onClick={handleToggledSearchBar}
    >
      <Icon name="SearchIcon" className="w-[24px] h-[24px] fill-gray-9F" />
    </button>
  );
};

export const GnbSearch = () => {
  const [isOpenMobileSearchBar, setIsOpenMobileSearchBar] =
    useState<boolean>(false);
  const handleToggledSearchBar = () => {
    setIsOpenMobileSearchBar(!isOpenMobileSearchBar);
  };

  return (
    <>
      <GnbSearchButton handleToggledSearchBar={handleToggledSearchBar} />
      <GnbSearchBar
        isOpenMobileSearchBar={isOpenMobileSearchBar}
        handleToggledSearchBar={handleToggledSearchBar}
      />
    </>
  );
};
