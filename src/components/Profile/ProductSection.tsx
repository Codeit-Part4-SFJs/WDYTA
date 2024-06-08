'use client';

import { useState } from 'react';
import { MenuDropdown } from './MenuDropdown';
import { ProductList } from './ProductList';
import { ProductMenuType } from './types/productSectionType';
import { PRODUCT_MENU } from './constants/PRODUCT_MENU';
import useProductsQuery from './hooks/useProductsQuery';

interface ProductSectionProps {
  currentProfileId: number;
}

export const ProductSection = ({ currentProfileId }: ProductSectionProps) => {
  const [activeMenu, setActiveMenu] =
    useState<ProductMenuType>('리뷰 남긴 상품');

  const handleClickTab = (tab: ProductMenuType) => {
    setActiveMenu(tab);
  };
  const { productsList, content } = useProductsQuery(
    currentProfileId,
    activeMenu,
  );

  return (
    <section className="flex flex-col gap-[30px]">
      <div className="!p-0 lg:hidden">
        <MenuDropdown
          options={[
            { value: '리뷰 남긴 상품', label: '리뷰 남긴 상품' },
            { value: '등록한 상품', label: '등록한 상품' },
            { value: '찜한 상품', label: '찜한 상품' },
          ]}
          onSelect={(value: string) => {
            setActiveMenu(value as ProductMenuType);
          }}
        >
          {activeMenu}
        </MenuDropdown>
      </div>
      <ul className="flex gap-[40px] text-gray-6E lg:text-xl text-lg mobile:hidden md:hidden">
        {PRODUCT_MENU.map((tab) => (
          <li key={tab}>
            <button
              type="button"
              className={`${activeMenu === tab ? 'text-white' : ''}`}
              onClick={() => handleClickTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <ProductList productsList={productsList} content={content} />
    </section>
  );
};
