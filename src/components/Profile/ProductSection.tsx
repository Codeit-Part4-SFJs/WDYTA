'use client';

import { Sort } from '@/shared/ui/Dropdown/Sort';
import { useState } from 'react';
import ProductCard from '../@common/ProductCard';

const productMenu = ['리뷰 남긴 상품', '등록한 상품', '찜한 상품'];

const data1 = {
  updatedAt: '2024-05-29T15:11:37.143Z',
  createdAt: '2024-05-29T15:11:37.143Z',
  writerId: 1,
  categoryId: 1,
  favoriteCount: 34,
  reviewCount: 129,
  rating: 4.7,
  image:
    'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/158/1716804166536/KakaoTalk_20240527_185342395.jpg',
  name: 'stringxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  id: 1,
};

const data2 = {
  updatedAt: '2024-05-29T15:11:37.143Z',
  createdAt: '2024-05-29T15:11:37.143Z',
  writerId: 1,
  categoryId: 1,
  favoriteCount: 34,
  reviewCount: 129,
  rating: 4.7,
  image:
    'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/158/1717172068396/macbookkkk.jpg',
  name: 'stringxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  id: 1,
};

export const ProductSection = () => {
  const [activeMenu, setActiveMenu] = useState('리뷰 남긴 상품');

  const handleClickTab = (tab: string) => {
    setActiveMenu(tab);
  };

  // 리팩토링 예정
  const renderProductCards = () => {
    switch (activeMenu) {
      case '리뷰 남긴 상품':
        return (
          <>
            <ProductCard product={data1} />
            <ProductCard product={data2} />
            <ProductCard product={data1} />
            <ProductCard product={data2} />
            <ProductCard product={data1} />
            <ProductCard product={data2} />
            <ProductCard product={data1} />
            <ProductCard product={data2} />
          </>
        );
      case '등록한 상품':
        return (
          <>
            <ProductCard product={data2} />
            <ProductCard product={data1} />
            <ProductCard product={data2} />
            <ProductCard product={data1} />
            <ProductCard product={data2} />
            <ProductCard product={data1} />
            <ProductCard product={data2} />
            <ProductCard product={data1} />
          </>
        );
      case '찜한 상품':
        return (
          <>
            <ProductCard product={data1} />
            <ProductCard product={data1} />
            <ProductCard product={data1} />
            <ProductCard product={data1} />
            <ProductCard product={data1} />
            <ProductCard product={data1} />
            <ProductCard product={data1} />
            <ProductCard product={data1} />
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

      <div className="grid lg:grid-cols-3 md:grid-cols-2 mobile:grid-cols-2  gap-[20px]">
        {renderProductCards()}
      </div>
    </section>
  );
};
