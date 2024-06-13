import { SkeletonRankingTitle } from './SkeletonRankingTitle';
import { SkeletonRankingCard } from './SkeletonRankingCard';

export const SkeletonReviewerRanking = () => {
  return (
    <aside className="md:col-span-1 lg:col-span-3 p-4">
      <SkeletonRankingTitle />
      <div className="flex flex-row lg:flex-col gap-5 lg:gap-1 overflow-hidden">
        <SkeletonRankingCard />
        <SkeletonRankingCard />
        <SkeletonRankingCard />
        <SkeletonRankingCard />
        <SkeletonRankingCard />
        <SkeletonRankingCard />
      </div>
    </aside>
  );
};
