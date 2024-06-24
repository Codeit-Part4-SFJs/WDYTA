'use client';

import { RankingCard } from '@/components/Home/RankingCard/RankingCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import { rankingOptions } from '@/app/[category]/homeQueryOptions';
import {
  AdaptedRankingData,
  adaptRanking,
} from '@/shared/@common/utils/adaptRanking';

export const ReviewerRanking = () => {
  const { data: ReviewerRankingData } = useSuspenseQuery(rankingOptions());
  const rankingData: AdaptedRankingData[] = adaptRanking(ReviewerRankingData);

  return (
    <aside className="md:col-span-1 lg:col-span-3 p-4 text-white">
      <h2 className="text-[16px] text-gray-F1 font-normal mb-4 lg:mb-8 md:mt-7 lg:mt-7">
        리뷰어 랭킹
      </h2>
      <ul className="flex flex-row lg:flex-col gap-5 lg:gap-1 mobile:overflow-x-scroll md:overflow-x-scroll scrollbar-hide">
        {rankingData?.map((ranking) => (
          <RankingCard key={ranking.id} ranking={ranking} />
        ))}
      </ul>
    </aside>
  );
};
