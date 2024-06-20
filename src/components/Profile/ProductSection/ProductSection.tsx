'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MenuDropdown } from '@/components/Profile/ProductSection/MenuDropdown';
import { ProductList } from '@/components/Profile/ProductSection/ProductList';
import { ProductMenuType } from '@/components/Profile/types/productType';
import { TAB_OPTIONS } from '@/components/Profile/constants/productMenu';
import useProductsQuery from '@/components/Profile/hooks/useProductsQuery';
import { useRouter, useSearchParams } from 'next/navigation';

const TAB_NAMES = {
  '리뷰 남긴 상품': 'reviewedProduct',
  '등록한 상품': 'createdProduct',
  '찜한 상품': 'favoriteProduct',
};

export const ProductSection = ({ loginedId }: { loginedId: number }) => {
  const router = useRouter();
  const userId = useSearchParams().get('userId');
  const currentMenu = useSearchParams().get('tab') ?? 'reviewedProduct';
  const currentProfileId = Number(userId) || Number(loginedId);

  const [activeMenu, setActiveMenu] =
    useState<ProductMenuType>('리뷰 남긴 상품');

  const { productData, fetchNextPage, isFetchingNextPage, content } =
    useProductsQuery(currentProfileId, currentMenu);

  const handleClickTab = (tab: ProductMenuType) => {
    setActiveMenu(tab);
    const selectedTab = TAB_OPTIONS.find((option) => option.label === tab);
    if (currentProfileId === loginedId) {
      router.replace(`/profile?tab=${selectedTab?.value}`, { scroll: false });
    } else {
      router.replace(
        `/profile/?userId=${currentProfileId}&tab=${selectedTab?.value}`,

        { scroll: false },
      );
    }
  };

  const { ref: triggerRef, inView } = useInView();

  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, isFetchingNextPage, inView]);

  const MENU_KEYS = Object.keys(TAB_NAMES) as ProductMenuType[];

  return (
    <section className="flex flex-col gap-[30px]">
      <div className="!p-0 lg:hidden">
        <MenuDropdown
          options={MENU_KEYS.map((menu) => ({
            value: menu,
            label: menu,
          }))}
          onSelect={(value: string) => {
            handleClickTab(value as ProductMenuType);
          }}
        >
          {activeMenu}
        </MenuDropdown>
      </div>
      <ul className="flex gap-[40px] text-gray-6E lg:text-xl text-lg mobile:hidden md:hidden">
        {MENU_KEYS.map((tab, index) => (
          <li key={tab}>
            <button
              type="button"
              className={`${currentMenu === TAB_OPTIONS[index].value ? 'text-white' : ''}`}
              onClick={() => handleClickTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <ProductList
        productData={productData}
        content={content}
        triggerRef={triggerRef}
      />
    </section>
  );
};
