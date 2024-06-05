import { getDetailProduct } from '@/shared/@common/apis/product';
// import { cookies } from 'next/headers';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PRODUCT_ID_1_MOCK } from './mock/PRODUCT_ID_1_MOCK';
import { PRODUCT_LIST_MOCK } from './mock/PRODUCT_LIST_MOCK';
import { PRODUCT_ID_2_MOCK } from './mock/PRODUCT_ID_2_MOCK';

interface AutoDatas {
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

interface TableProps {
  selectedSecondProductId: number;
  selectedFirstProductId: number;
}

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

export const Table = ({
  selectedSecondProductId,
  selectedFirstProductId,
}: TableProps) => {
  // const userId = cookies().get('userId');
  // {category}/{product} 에서 선택되면 compare/{product}로 넘어와야 한다.

  const firstProduct = PRODUCT_ID_1_MOCK;
  const secondProduct = PRODUCT_ID_2_MOCK;

  const handleCompare = (first: number, second: number) => {
    if (first > second) {
      return '상품 1 승리';
    } else if (second > first) {
      return '상품 2 승리';
    } else if (second === first) {
      return '무승부';
    }
  };

  const handleCheckWinner = (category: AutoDatas) => {
    if (category) {
      category.categoryMetric.rating;
    }
  };

  return (
    <div className="border border-solid border-gray-35 rounded-xl w-[940px] h-[297px] bg-black-25 flex-shrink-0 md:w-[684px] md:h-[308px] md:text-sm mobile:w-[335px] mobile:h-[186px] mobile:text-xs">
      <table className="table-auto w-full h-full text-center">
        <thead className="w-full">
          <tr className="text-gray-9F h-[60px] md:h-[57px] mobile:h-11">
            <th className="w-1/4">기준</th>
            <th className="w-1/4">상품 1</th>
            <th className="w-1/4">상품 2</th>
            <th className="w-1/4">결과</th>
          </tr>
        </thead>
        <tbody className="h-full w-full">
          <tr className="text-white h-[calc(100%/3)]">
            <td className="text-gray-9F w-1/4">별점</td>
            <td className="w-1/4">{firstProduct.categoryMetric.rating}</td>
            <td className="w-1/4">{secondProduct.categoryMetric.rating}</td>
            <td
              className={`w-1/4 ${handleCompare(firstProduct.categoryMetric.rating, secondProduct.categoryMetric.rating) === '상품 2 승리' ? `text-pink` : `text-green`} `}
            >
              {handleCompare(
                firstProduct.categoryMetric.rating,
                secondProduct.categoryMetric.rating,
              )}
            </td>
          </tr>
          <tr className="text-white h-[calc(100%/3)]">
            <td className="text-gray-9F w-1/4">리뷰 개수</td>
            <td className="w-1/4">{firstProduct.categoryMetric.reviewCount}</td>
            <td className="w-1/4">
              {secondProduct.categoryMetric.reviewCount}
            </td>
            <td
              className={`w-1/4 ${handleCompare(firstProduct.categoryMetric.rating, secondProduct.categoryMetric.rating) === '상품 2 승리' ? `text-pink` : `text-green`} `}
            >
              {handleCompare(
                firstProduct.categoryMetric.reviewCount,
                secondProduct.categoryMetric.reviewCount,
              )}
            </td>
          </tr>
          <tr className="text-white h-[calc(100%/3)]">
            <td className="text-gray-9F w-1/4">찜 개수</td>
            <td className="w-1/4">
              {firstProduct.categoryMetric.favoriteCount}
            </td>
            <td className="w-1/4">
              {secondProduct.categoryMetric.favoriteCount}
            </td>
            <td
              className={`w-1/4 ${handleCompare(firstProduct.categoryMetric.rating, secondProduct.categoryMetric.rating) === '상품 2 승리' ? `text-pink` : `text-green`} `}
            >
              {handleCompare(
                firstProduct.categoryMetric.favoriteCount,
                secondProduct.categoryMetric.favoriteCount,
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
