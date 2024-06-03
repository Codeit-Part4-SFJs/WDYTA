// import { useState } from 'react';

export const Table = () => {
  // interface AutoDatas {
  //   id: number;
  //   name: string;
  //   description: string;
  //   image: string;
  //   rating: number;
  //   reviewCount: number;
  //   favoriteCount: number;
  //   categoryId: number;
  //   createdAt: string;
  //   updatedAt: string;
  //   writerId: number;
  //   isFavorite: boolean;
  //   category: {
  //     id: number;
  //     name: string;
  //   };
  //   categoryMetric: {
  //     rating: number;
  //     favoriteCount: number;
  //     reviewCount: number;
  //   };
  // }

  // const [compareItems, setCompareItems] = useState<AutoDatas[]>([]);
  // let categories = '';

  // const handleCheckWinner = (category: AutoDatas) => {
  //   if (category) {
  //     category.categoryMetric.rating;
  //   }
  // };

  return (
    <div className="w-[940px] h-[297px] bg-black-25 flex-shrink-0 md:w-[684px] md:h-[308px] md:text-sm mobile:w-[335px] mobile:h-[186px] mobile:text-xs">
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
            <td className="w-1/4">상품 1 별점</td>
            <td className="w-1/4">상품 2 별점</td>
            <td className="w-1/4">별점 결과</td>
          </tr>
          <tr className="text-white h-[calc(100%/3)]">
            <td className="text-gray-9F w-1/4">리뷰 개수</td>
            <td className="w-1/4">상품 1 리뷰 개수</td>
            <td className="w-1/4">상품 2 리뷰 개수</td>
            <td className="w-1/4">리뷰 개수 결과</td>
          </tr>
          <tr className="text-white h-[calc(100%/3)]">
            <td className="text-gray-9F w-1/4">찜 개수</td>
            <td className="w-1/4">상품 1 찜 개수</td>
            <td className="w-1/4">상품 2 찜 개수</td>
            <td className="w-1/4">찜 개수 결과</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
