import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { PRODUCT_ID_1_MOCK } from './mock/PRODUCT_ID_1_MOCK';
import { PRODUCT_ID_2_MOCK } from './mock/PRODUCT_ID_2_MOCK';

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
  const firstProduct: Product = PRODUCT_ID_1_MOCK;
  const secondProduct: Product = PRODUCT_ID_2_MOCK;

  const handleCompare = (first: number, second: number) => {
    if (first > second) {
      return '상품 1 승리';
    } else if (second > first) {
      return '상품 2 승리';
    }
    return '무승부';
  };

  const getComparisonClass = (result: string) => {
    if (result === '상품 1 승리') {
      return 'text-green';
    } else if (result === '상품 2 승리') {
      return 'text-pink';
    }
    return 'text-gray';
  };

  const renderRow = (
    label: string,
    firstValue: number,
    secondValue: number,
  ) => {
    const comparisonResult = handleCompare(firstValue, secondValue);
    return (
      <tr className="text-white h-[calc(100%/3)]">
        <td className="text-gray-9F w-1/4">{label}</td>
        <td className="w-1/4">{firstValue}</td>
        <td className="w-1/4">{secondValue}</td>
        <td className={`w-1/4 ${getComparisonClass(comparisonResult)}`}>
          {comparisonResult}
        </td>
      </tr>
    );
  };

  const comparisonResults = [
    handleCompare(
      firstProduct.categoryMetric.rating,
      secondProduct.categoryMetric.rating,
    ),
    handleCompare(
      firstProduct.categoryMetric.reviewCount,
      secondProduct.categoryMetric.reviewCount,
    ),
    handleCompare(
      firstProduct.categoryMetric.favoriteCount,
      secondProduct.categoryMetric.favoriteCount,
    ),
  ];

  const firstProductWins = comparisonResults.filter(
    (result) => result === '상품 1 승리',
  ).length;
  const secondProductWins = comparisonResults.filter(
    (result) => result === '상품 2 승리',
  ).length;

  const finalResult =
    firstProductWins > secondProductWins
      ? '상품 1'
      : secondProductWins > firstProductWins
        ? '상품 2'
        : '무승부';

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col h-[300px] items-center justify-center gap-5 md:max-w-[200px] mobile:max-w-[200px] ">
          <p className="text-white lg:text-2xl text-xl">
            {finalResult} 상품이 승리하였습니다!
          </p>
          <p className="text-gray-9F lg:text-base text-xs">
            3가지 항목 중 2가지 항목에서 우세합니다.
          </p>
        </div>
        <div className="mb-[100px]" />
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
              {renderRow(
                '별점',
                firstProduct.categoryMetric.rating,
                secondProduct.categoryMetric.rating,
              )}
              {renderRow(
                '리뷰 개수',
                firstProduct.categoryMetric.reviewCount,
                secondProduct.categoryMetric.reviewCount,
              )}
              {renderRow(
                '찜 개수',
                firstProduct.categoryMetric.favoriteCount,
                secondProduct.categoryMetric.favoriteCount,
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Button
        kind={ButtonKind.primary}
        customSize=" mb-[60px] w-[180px] h-[60px] text-[12px] mobile:w-[120px]"
      >
        다른 상품 비교해보기
      </Button>
      <Button
        kind={ButtonKind.primary}
        customSize=" mb-[60px] w-[180px] h-[60px] text-[12px] mobile:w-[120px]"
      >
        이 상품 보러 가기
      </Button>
    </div>
  );
};
