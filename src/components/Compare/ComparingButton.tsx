'use client';

import { useCompareItems } from '@/stores/useCompareItems';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CompareColor } from '@/shared/ui/Chip/CompareChip';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { useSuspenseQuery } from '@tanstack/react-query';
import {
  compareFirstOptions,
  compareSecondOptions,
} from '@/app/compare/queryOptions';
import { getDetailProduct } from '@/shared/@common/apis/product';
import { Table } from './Table';
import { AutoComplete } from './AutoComplete';
import { ComparingButtonProps, ProductDetailData } from './types';

export const ComparingButton = ({
  productId1,
  productId2,
  accessToken,
}: ComparingButtonProps) => {
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
  const [firstName, setFirstName] = useState(product1?.name);
  const [secondName, setSecondName] = useState(product2?.name);
  const [tableData, setTableData] = useState<{
    firstItem: number | null;
    secondItem: number | null;
  }>({ firstItem: null, secondItem: null });

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
          if (!productId1) return;
          const response = await getDetailProduct(productId1, accessToken);
          const productDetail: ProductDetailData = await response.json();
          changingFirstItem(productDetail.id);
          setFirstName(productDetail.name);
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
          if (!productId2) return;
          const response = await getDetailProduct(productId2, accessToken);
          const productDetail: ProductDetailData = await response.json();
          changingSecondItem(productDetail.id);
          setSecondName(productDetail.name);
        } catch (error) {
          console.error('Failed to fetch product detail:', error);
        }
      };
      fetchProductDetail();
    }
  }, [productId2]);

  const handleCompareClick = () => {
    if (!firstItem || !secondItem) {
      return;
    }

    router.replace(`/compare?product1=${firstItem}&product2=${secondItem}`, {
      scroll: false,
    });
    setIsCompare(true);
    setTableData({ firstItem, secondItem });
  };

  return (
    <>
      <div className="flex justify-center gap-5 w-full mt-[60px] mobile:h-[400px] mobile:flex-col mobile:items-center">
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
            onClick={handleCompareClick}
          >
            비교하기
          </Button>
        </div>
      </div>
      {isCompare && tableData.firstItem && tableData.secondItem && (
        <div className="flex flex-col items-center gap-5">
          <Table
            selectedFirstProductId={tableData.firstItem}
            selectedSecondProductId={tableData.secondItem}
            accessToken={accessToken}
          />
        </div>
      )}
    </>
  );
};
