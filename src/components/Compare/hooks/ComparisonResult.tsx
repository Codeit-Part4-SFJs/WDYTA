import { useState, useEffect } from 'react';

interface TableProps {
  firstProduct: Product;
  secondProduct: Product;
}

interface Product {
  name: string;
  rating: number;
  reviewCount: number;
  favoriteCount: number;
}

export const ComparisonResult = ({
  firstProduct,
  secondProduct,
}: TableProps) => {
  const [finalResult, setFinalResult] = useState<string>('');
  const [winResult, setWinResult] = useState<number>(0);
  const [resultText, setResultText] = useState<string>('');

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
      setFinalResult(firstProduct.name);
      setWinResult(firstProductWins);
      setResultText('text-green');
    } else if (secondProductWins > firstProductWins) {
      setFinalResult(secondProduct.name);
      setWinResult(secondProductWins);
      setResultText('text-pink');
    } else {
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
    </div>
  );
};
