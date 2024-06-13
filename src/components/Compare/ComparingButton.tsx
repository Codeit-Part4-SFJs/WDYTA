'use client';

import { useCompareItems } from '@/stores/useCompareItems';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CompareColor } from '@/shared/ui/Chip/CompareChip';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { Loading } from '@/shared/ui/Icon';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import {
  compareFirstOptions,
  compareSecondOptions,
  reCompareFirstOptions,
  reCompareSecondOptions,
} from '@/app/compare/queryOptions';
import { getDetailProduct } from '@/shared/@common/apis/product';
import { Table } from './Table';
import { AutoComplete } from './AutoComplete';
import { PRODUCT_ID_1_MOCK } from './mock/PRODUCT_ID_1_MOCK';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  favoriteCount: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  writerId: number;
  isFavorite: boolean;
  category: {
    id: number;
    name: string;
  };
  categoryMetric: {
    rating: number;
    favoriteCount: number;
    reviewCount: number;
  };
}

const ComparingButton = ({
  productId1,
  productId2,
  accessToken,
}: {
  productId1: number;
  productId2: number;
  accessToken: string;
}) => {
  const { data: product1 } = useSuspenseQuery(
    compareFirstOptions(productId1, accessToken),
  );

  const { data: product2 } = useSuspenseQuery(
    compareSecondOptions(productId2, accessToken),
  );

  const router = useRouter();
  const { firstItem, changingFirstItem, secondItem, changingSecondItem } =
    useCompareItems();
  const [isCompare, setIsCompare] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [firstName, setFirstName] = useState<string>(product1?.name);
  const [secondName, setSecondName] = useState<string>(product2?.name);

  // const userId = cookies().get('accessToken');

  // api로 product의 id를 이용해서 product1은 product의 name을 받아와야 하는 것이다.

  const handleSelectFirstProduct = (id: number) => {
    changingFirstItem(id);
  };

  const handleSelectSecondProduct = (id: number) => {
    changingSecondItem(id);
  };

  useEffect(() => {
    if (product1) {
      const fetchProductDetail = async () => {
        try {
          const response = await getDetailProduct(productId1, accessToken);
          const productDetail: Product = await response.json();
          changingFirstItem(productDetail.id);
          setFirstName(productDetail.name);
          console.log('firstItem: ', firstItem);
        } catch (error) {
          console.error('Failed to fetch product detail:', error);
        }
      };
      fetchProductDetail();
    }
  }, [productId1]);

  useEffect(() => {
    if (product2) {
      const fetchProductDetail = async () => {
        try {
          const response = await getDetailProduct(productId2, accessToken);
          const productDetail: Product = await response.json();
          changingSecondItem(productDetail.id);
          setSecondName(productDetail.name);
          console.log('secondItem: ', secondItem);
        } catch (error) {
          console.error('Failed to fetch product detail:', error);
        }
      };
      fetchProductDetail();
    }
  }, [productId2]);

  useEffect(() => {
    console.log('firstItem: ', firstItem);
    console.log('secondItem: ', secondItem);
  }, []);

  const handleCompareClick = () => {
    if (!firstItem || !secondItem) {
      return;
    }

    router.replace(`/compare?product1=${firstItem}&product2=${secondItem}`, {
      scroll: false,
    });
    setIsCompare(true);
    setIsLoad(true);
  };

  return (
    <>
      <div className="flex justify-center gap-5 w-full mt-[60px] h-[400px] mobile:flex-col mobile:items-center">
        <div className="flex flex-row gap-5 mobile:flex-col">
          <div className="flex flex-col items-start gap-[10px]">
            <p className="text-base text-white">상품 1</p>
            <AutoComplete
              color={CompareColor.GREEN}
              onSelectProduct={handleSelectFirstProduct}
              selectedProduct={firstName}
            />
          </div>
          <div className="flex flex-col items-start gap-[10px]">
            <p className="text-base text-white">상품 2</p>
            <AutoComplete
              onSelectProduct={handleSelectSecondProduct}
              selectedProduct={secondName}
            />
          </div>
        </div>
        <div className="mt-">
          <Button
            kind={ButtonKind.primary}
            customSize="w-[200px] h-[70px] mt-[34px] w-[200px] md:w-[164px] mobile:w-[288px]"
            onClick={() => handleCompareClick()}
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
      {isLoad && (
        <Table
          selectedFirstProductId={firstItem}
          selectedSecondProductId={secondItem}
          accessToken={accessToken}
        />
      )}
    </>
  );
};

export default ComparingButton;
