'use client';

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

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <ComparisonResult
          firstProduct={firstProduct}
          secondProduct={secondProduct}
        />
      </div>
    </div>
  );
};
