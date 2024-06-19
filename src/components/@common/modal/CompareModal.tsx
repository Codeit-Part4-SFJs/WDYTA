'use client';

import { ProductDetailData } from '@/components/Compare/types';
import { getDetailProduct } from '@/shared/@common/apis/product';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { useCompareItems } from '@/stores/useCompareItems';
import { useEffect, useState } from 'react';

export const CompareModal = ({
  productId,
  accessToken,
}: {
  productId: number;
  accessToken: string;
}) => {
  const initialProduct: ProductDetailData = {
    id: 0,
    name: '',
    description: '',
    image: '',
    rating: 0,
    reviewCount: 0,
    favoriteCount: 0,
    categoryId: 0,
    createdAt: '',
    updatedAt: '',
    writerId: 0,
    isFavorite: false,
    category: {
      id: 0,
      name: '',
    },
    categoryMetric: {
      rating: 0,
      favoriteCount: 0,
      reviewCount: 0,
    },
  };
  const [selected, setSelected] = useState<string | number>();
  const [firstItemData, setFirstItemData] =
    useState<ProductDetailData>(initialProduct);
  const [secondItemData, setSecondItemData] =
    useState<ProductDetailData>(initialProduct);
  const [productData, setProductData] =
    useState<ProductDetailData>(initialProduct);

  const firstItem =
    typeof window !== 'undefined'
      ? Number(sessionStorage.getItem(`CompareItems.state.firstItem`))
      : 0;
  const secondItem =
    typeof window !== 'undefined'
      ? Number(sessionStorage.getItem(`CompareItems.state.secondItem`))
      : 0;

  const handleClicked = (button: string | number) => {
    setSelected(button);
  };

  useEffect(() => {
    const getCompares = async () => {
      try {
        console.log(firstItem, secondItem, productId);
        const response1 = await getDetailProduct(firstItem, accessToken);
        const response2 = await getDetailProduct(secondItem, accessToken);
        const response3 = await getDetailProduct(productId, accessToken);

        const data1: ProductDetailData = await response1.json();
        const data2: ProductDetailData = await response2.json();
        const data3: ProductDetailData = await response3.json();
        setFirstItemData(data1);
        setSecondItemData(data2);
        setProductData(data3);
      } catch (error) {
        console.error('데이터 받아오기 오류');
      }
    };
    getCompares();
  }, []);

  const handleChange = () => {
    alert('클릭되었습니다');
  };

  const ButtonSize = `w-[420px] mobile:w-[295px] h-[65px] md:h-[55px] mobile:h-[50px] py-6 md:self-stretch flex-shrink-0 `;
  const selectedStyle = `border-pink`;
  return (
    <div className="mobile:w-[335px] w-[500px] mobile:h-[336px] md:h-[400px] lg:h-[453px] flex flex-col justify-center items-center ">
      <p className=" text-2xl md:text-xl mobile:text-xl text-white">
        지금 보신 {productData.name}
      </p>
      <p className=" text-2xl md:text-xl mobile:text-xl text-white">
        어떤 상품과 비교할까요?
      </p>
      <div className="flex flex-col gap-5 items-start my-10">
        <Button
          kind={ButtonKind.secondary}
          customSize={`${ButtonSize} border border-solid ${selected === firstItemData.name ? selectedStyle : 'border-gray-35'}`}
          onClick={() => handleClicked(firstItemData.name)}
        >
          {firstItemData.name}
        </Button>
        <Button
          kind={ButtonKind.secondary}
          customSize={`${ButtonSize} border border-solid ${selected === secondItemData.name ? selectedStyle : 'border-gray-35'}`}
          onClick={() => handleClicked(secondItemData.name)}
        >
          {secondItemData.name}
        </Button>
      </div>
      <Button
        kind={ButtonKind.primary}
        customSize={`${ButtonSize}`}
        onClick={handleChange}
      >
        교체하기
      </Button>
    </div>
  );
};
