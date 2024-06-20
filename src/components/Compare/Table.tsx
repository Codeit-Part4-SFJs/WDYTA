'use client';

// import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { getDetailProduct } from '@/shared/@common/apis/product';
import { useEffect, useState } from 'react';
import { ComparisonResult } from './ComparisonResult';
import { ProductDetailData } from './types';

interface TableProps {
  selectedSecondProductId: number;
  selectedFirstProductId: number;
  accessToken: string;
}

export const Table = ({
  selectedSecondProductId,
  selectedFirstProductId,
  accessToken,
}: TableProps) => {
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

  const [firstProduct, setFirstProduct] =
    useState<ProductDetailData>(initialProduct);
  const [secondProduct, setSecondProduct] =
    useState<ProductDetailData>(initialProduct);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response1 = await getDetailProduct(
          selectedFirstProductId,
          accessToken,
        );
        const response2 = await getDetailProduct(
          selectedSecondProductId,
          accessToken,
        );
        const data1: ProductDetailData = await response1.json();
        const data2: ProductDetailData = await response2.json();
        setFirstProduct(data1);
        setSecondProduct(data2);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      }
    };

    fetchProducts();
  }, [selectedFirstProductId, selectedSecondProductId, accessToken]);

  console.log(selectedFirstProductId, selectedSecondProductId);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <ComparisonResult
          firstProduct={{
            name: firstProduct.name,
            rating: firstProduct.rating,
            reviewCount: firstProduct.reviewCount,
            favoriteCount: firstProduct.favoriteCount,
          }}
          secondProduct={{
            name: secondProduct.name,
            rating: secondProduct.rating,
            reviewCount: secondProduct.reviewCount,
            favoriteCount: secondProduct.favoriteCount,
          }}
        />
        <div className="mt-10">
          {/* <Button
            kind={ButtonKind.secondary}
            customSize=" mb-[60px] w-[180px] h-[60px] text-[12px] mobile:w-[120px]"
          >
            이 상품 보러 가기
          </Button> */}
        </div>
      </div>
    </div>
  );
};
