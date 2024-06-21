'use client';

import { useState, useEffect } from 'react';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { useRouter } from 'next/navigation';
import { convertIdToCategory } from '@/shared/@common/utils';
import { ProductDetailData } from './types';

interface TableProps {
  firstProduct: ProductDetailData;
  secondProduct: ProductDetailData;
}

export const ComparisonResult = ({
  firstProduct,
  secondProduct,
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

  const router = useRouter();
  const [winner, setWinner] = useState<ProductDetailData>(initialProduct);
  const [finalResult, setFinalResult] = useState('');
  const [winResult, setWinResult] = useState(0);
  const [resultText, setResultText] = useState('');

  const handleCompare = (first: number, second: number) => {
    if (first > second) {
      return '상품 1 승리';
    }
    if (second > first) {
      return '상품 2 승리';
    }
    return '무승부';
  };

  const getComparisonClass = (result: string) => {
    if (result === '상품 1 승리') {
      return 'text-green';
    }
    if (result === '상품 2 승리') {
      return 'text-pink';
    }
    return 'text-gray';
  };

  useEffect(() => {
    const comparisonResults = [
      handleCompare(firstProduct.rating, secondProduct.rating),
      handleCompare(firstProduct.reviewCount, secondProduct.reviewCount),
      handleCompare(firstProduct.favoriteCount, secondProduct.favoriteCount),
    ];

    const firstProductWins = comparisonResults.filter(
      (result) => result === '상품 1 승리',
    ).length;
    const secondProductWins = comparisonResults.filter(
      (result) => result === '상품 2 승리',
    ).length;

    if (firstProductWins > secondProductWins) {
      setWinner(firstProduct);
      setFinalResult(firstProduct.name);
      setWinResult(firstProductWins);
      setResultText('text-green');
    } else if (secondProductWins > firstProductWins) {
      setWinner(secondProduct);
      setFinalResult(secondProduct.name);
      setWinResult(secondProductWins);
      setResultText('text-pink');
    } else {
      setWinResult(0);
      setFinalResult('무승부입니다');
      setResultText('text-white');
    }
  }, [firstProduct, secondProduct]);

  const label = ['별점', '리뷰 개수', '찜 개수'];
  const firstValue = [
    firstProduct.rating,
    firstProduct.reviewCount,
    firstProduct.favoriteCount,
  ];
  const secondValue = [
    secondProduct.rating,
    secondProduct.reviewCount,
    secondProduct.favoriteCount,
  ];
  const handleMoveProduct = () => {
    const category = convertIdToCategory(winner.categoryId);
    router.push(`/${category}/${winner.id}`);
  };

  const handleMoveProductList = () => {
    router.push(`/`);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col mt-[150px] mobile:mt-[60px] items-center justify-center gap-5 md:max-w-[200px] mobile:max-w-[200px]">
        <p className={`${resultText} lg:text-2xl text-xl`}>
          {finalResult}
          {winResult > 0 && (
            <span className="text-white"> 상품이 승리하였습니다!</span>
          )}
        </p>
        {winResult > 0 && (
          <p className="text-gray-9F lg:text-base text-xs">
            3가지 항목 중 {winResult}가지 항목에서 우세합니다.
          </p>
        )}
      </div>
      <div className="mb-[100px]" />
      <div className="border border-solid border-gray-35 rounded-xl w-[940px] h-[297px] bg-black-25 flex-shrink-0 md:w-[684px] md:h-[308px] md:text-sm mobile:w-[335px] mobile:h-[186px] mobile:text-xs">
        <table className="table-auto w-full h-full text-center">
          <thead className="w-full">
            <tr className="text-gray-9F h-[60px] md:h-[57px] mobile:h-11">
              <th className="w-1/4">기준</th>
              <th className="w-1/4">{firstProduct.name}</th>
              <th className="w-1/4">{secondProduct.name}</th>
              <th className="w-1/4">결과</th>
            </tr>
          </thead>
          <tbody className="h-full w-full">
            <tr className="text-white h-[calc(100%/3)]">
              <td className="text-gray-9F w-1/4">{label[0]}</td>
              <td className="w-1/4">{firstValue[0]}</td>
              <td className="w-1/4">{secondValue[0]}</td>
              <td
                className={`w-1/4 ${getComparisonClass(handleCompare(firstValue[0], secondValue[0]))}`}
              >
                {handleCompare(firstValue[0], secondValue[0])}
              </td>
            </tr>
            <tr className="text-white h-[calc(100%/3)]">
              <td className="text-gray-9F w-1/4">{label[1]}</td>
              <td className="w-1/4">{firstValue[1]}</td>
              <td className="w-1/4">{secondValue[1]}</td>
              <td
                className={`w-1/4 ${getComparisonClass(handleCompare(firstValue[1], secondValue[1]))}`}
              >
                {handleCompare(firstValue[1], secondValue[1])}
              </td>
            </tr>
            <tr className="text-white h-[calc(100%/3)]">
              <td className="text-gray-9F w-1/4">{label[2]}</td>
              <td className="w-1/4">{firstValue[2]}</td>
              <td className="w-1/4">{secondValue[2]}</td>
              <td
                className={`w-1/4 ${getComparisonClass(handleCompare(firstValue[2], secondValue[2]))}`}
              >
                {handleCompare(firstValue[2], secondValue[2])}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        {winner.id ? (
          <Button
            kind={ButtonKind.secondary}
            customSize=" mb-[60px] w-[180px] h-[60px] text-[12px] mobile:w-[335px]"
            onClick={handleMoveProduct}
          >
            이 상품 보러 가기
          </Button>
        ) : (
          <Button
            kind={ButtonKind.secondary}
            customSize="mb-[60px] w-[180px] h-[60px] text-[12px] mobile:w-[335px]"
            onClick={handleMoveProductList}
          >
            다른 상품 보러 가기
          </Button>
        )}
      </div>
    </div>
  );
};
