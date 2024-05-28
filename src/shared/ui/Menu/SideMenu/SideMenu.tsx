'use client';

import { useRef } from 'react';
import DEFAULT_CATEGORIES from '@/shared/ui/Menu/SideMenu/constant/DEFAULT_CATEGORIES';
import {
  Categories,
  SideMenuProps,
} from '@/shared/ui/Menu/SideMenu/types/categoryType';
import { SideMenuTab } from '@/shared/ui/Menu/SideMenu/SideMenuTab';
import { useSideMenuStore } from '@/stores';
import { useClose } from '@/shared/@common/hooks';

/**
 * 메인 페이지의 page.tsx에서 API 요청해서 카테고리 데이터 받아오고 page.tsx에서 사용하면됨
 *
 * @param categories '/categories'로 GET 요청해서 받은 데이터
 */

export const SideMenu = ({ categories }: SideMenuProps) => {
  const categoryList: Categories = categories ?? DEFAULT_CATEGORIES;

  const isOpenSideMenu = useSideMenuStore((state) => state.isOpenSideMenu);
  const setIsOpenSideMenu = useSideMenuStore(
    (state) => state.setIsOpenSideMenu,
  );

  // SideMenu 영역 지정
  const sideMenuRef = useRef<HTMLDivElement>(null);
  // SideMenu 닫힘 버튼 구현 대신 외부영역 및 ESC로 닫는 훅 호출
  useClose(isOpenSideMenu, setIsOpenSideMenu, sideMenuRef);

  const commonClass = 'py-[25px] px-[10px] h-full bg-black-1C';
  const openClass = `${commonClass} mobile:absolute mobile:z-10 mobile:w-[180px] md:w-[180px] lg:w-[220px]`;
  const closeClass = `${commonClass} hidden md:block lg:block md:w-[180px] lg:w-[220px]`;

  return (
    <div ref={sideMenuRef} className={isOpenSideMenu ? openClass : closeClass}>
      <div className="p-[20px] not-italic font-normal text-gray-F1 mobile:text-sm md:text-sm lg:text-base">
        카테고리
      </div>
      <ul className="flex flex-col items-start shrink-0 gap-1 bg-black-1C">
        {categoryList.map((item) => {
          return (
            <SideMenuTab
              key={item.id}
              category={item.name}
              categoryId={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
};
