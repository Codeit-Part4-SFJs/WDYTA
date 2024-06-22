'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MenuDropdown } from '@/components/Profile/ProductSection/MenuDropdown';
import { ProductList } from '@/components/Profile/ProductSection/ProductList';
import { ProductMenuType } from '@/components/Profile/types/productType';
import {
  PRODUCT_TAB,
  PRODUCT_TAB_OPTIONS,
} from '@/components/Profile/constants/productMenu';
import useProductsQuery from '@/components/Profile/hooks/useProductsQuery';
import { useRouter, useSearchParams } from 'next/navigation';

export const ProductSection = ({ loginedId }: { loginedId: number | null }) => {
  const router = useRouter();
  const userId = useSearchParams()?.get('userId');
  const currentMenu = useSearchParams()?.get('tab') ?? 'reviewedProduct';
  const currentProfileId = Number(userId) || Number(loginedId);

  const [activeMenu, setActiveMenu] = useState('리뷰 남긴 상품');

  const { productData, fetchNextPage, isFetchingNextPage, content } =
    useProductsQuery(currentProfileId, currentMenu);

  const handleClickTab = (tab: ProductMenuType) => {
    setActiveMenu(tab);
    const selectedTab = PRODUCT_TAB_OPTIONS.find(
      (option) => option.label === tab,
    );
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

  return (
    <section className="flex flex-col gap-[30px]">
      <div className="!p-0 lg:hidden">
        <MenuDropdown
          options={PRODUCT_TAB_OPTIONS}
          onSelect={(label: string) => {
            handleClickTab(label as ProductMenuType);
          }}
        >
          {activeMenu}
        </MenuDropdown>
      </div>
      <ul className="flex gap-[40px] text-gray-6E lg:text-xl text-lg mobile:hidden md:hidden">
        {PRODUCT_TAB.map((tab, index) => (
          <li key={tab}>
            <button
              type="button"
              className={`${currentMenu === PRODUCT_TAB_OPTIONS[index].value ? 'text-white' : ''}`}
              onClick={() => handleClickTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <ProductList productData={productData} content={content} />

      <div ref={triggerRef} />
    </section>
  );
};
