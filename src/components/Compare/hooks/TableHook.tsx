import React from 'react';

interface ComparisonResultProps {
  firstProduct: {
    name: string;
    rating: number;
    reviewCount: number;
    favoriteCount: number;
  };
  secondProduct: {
    name: string;
    rating: number;
    reviewCount: number;
    favoriteCount: number;
  };
}

const ComparisonResult: React.FC<ComparisonResultProps> = ({
  firstProduct,
  secondProduct,
}) => {
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

  let finalResult: string;
  let winResult: number | undefined;
  let resultText: string;

  if (firstProductWins > secondProductWins) {
    finalResult = firstProduct.name;
    winResult = firstProductWins;
    resultText = 'text-green';
  } else if (secondProductWins > firstProductWins) {
    finalResult = secondProduct.name;
    winResult = secondProductWins;
    resultText = 'text-pink';
  } else {
    finalResult = '무승부입니다';
    resultText = 'text-white';
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col h-[300px] items-center justify-center gap-5 md:max-w-[200px] mobile:max-w-[200px]">
        <p className={`${resultText} lg:text-2xl text-xl`}>
          {finalResult}
          {winResult !== undefined && (
            <span className="text-white"> 상품이 승리하였습니다!</span>
          )}
        </p>
        {winResult !== undefined && (
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
            {renderRow('별점', firstProduct.rating, secondProduct.rating)}
            {renderRow(
              '리뷰 개수',
              firstProduct.reviewCount,
              secondProduct.reviewCount,
            )}
            {renderRow(
              '찜 개수',
              firstProduct.favoriteCount,
              secondProduct.favoriteCount,
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonResult;
