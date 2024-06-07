'use client';

import { Sort } from '@/shared/ui/Dropdown/Sort';
import { useState } from 'react';
import ProductCard from '../@common/ProductCard';
import useReviewedProductQuery from './hooks/useReviewedProductQuery';
import useCreatedProductQuery from './hooks/useCreatedProductQuery';
import useFavoriteProduct from './hooks/useFavoriteProductQuery';

interface UserProductData {
  updatedAt: string;
  createdAt: string;
  writerId: number;
  categoryId: number;
  favoriteCount: number;
  reviewCount: number;
  rating: number;
  image: string;
  name: string;
  id: number;
}

const productMenu = ['리뷰 남긴 상품', '등록한 상품', '찜한 상품'];

interface ProductSectionProps {
  currentProfileId: number;
}
export const ProductSection = ({ currentProfileId }: ProductSectionProps) => {
  const [activeMenu, setActiveMenu] = useState('리뷰 남긴 상품');

  const handleClickTab = (tab: string) => {
    setActiveMenu(tab);
  };
  const { data: reviewedProductsData } =
    useReviewedProductQuery(currentProfileId);
  const reviewedProductsList = reviewedProductsData?.list || [];

  const { data: createdProductsData } =
    useCreatedProductQuery(currentProfileId);

  console.log(createdProductsData);
  const createdProductsList = createdProductsData?.list || [];

  const { data: favoriteProductsData } = useFavoriteProduct(currentProfileId);
  const favoriteProductsList = favoriteProductsData?.list || [];

  // 리팩토링 예정
  const renderProductCards = () => {
    switch (activeMenu) {
      case '리뷰 남긴 상품':
        return (
          <>
            {reviewedProductsList.map((reviewedProduct: UserProductData) => (
              <ProductCard
                key={reviewedProduct?.id}
                product={reviewedProduct}
              />
            ))}
          </>
        );
      case '등록한 상품':
        return (
          <>
            {createdProductsList.map((createdProduct: UserProductData) => (
              <ProductCard key={createdProduct?.id} product={createdProduct} />
            ))}
          </>
        );
      case '찜한 상품':
        return (
          <>
            {favoriteProductsList.map((favoriteProduct: UserProductData) => (
              <ProductCard
                key={favoriteProduct?.id}
                product={favoriteProduct}
              />
            ))}
          </>
        );
      default:
        return null;
    }
  };
  return (
    <section className="flex flex-col gap-[30px]">
      <div className="!p-0 lg:hidden">
        <Sort
          options={[
            { value: '리뷰 남긴 상품', label: '리뷰 남긴 상품' },
            { value: '등록한 상품', label: '등록한 상품' },
            { value: '찜한 상품', label: '찜한 상품' },
          ]}
          onSelect={(value) => {
            setActiveMenu(value);
          }}
          defaultValue="리뷰 남긴 상품"
        />
      </div>
      <ul className="flex gap-[40px] text-gray-6E lg:text-[20px] text-[18px] mobile:hidden md:hidden">
        {productMenu.map((tab) => (
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

      <div className="grid lg:grid-cols-3 md:grid-cols-2 mobile:grid-cols-2 gap-[20px] ">
        {renderProductCards()}
      </div>
    </section>
  );
};
