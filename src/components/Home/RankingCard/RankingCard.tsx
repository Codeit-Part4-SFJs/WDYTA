import { ImageComponent } from '@/shared/ui/Img';
import { RankingChip } from '@/shared/ui/Chip/RankingChip';
import { AdaptedRankingData } from '@/shared/@common/utils/adaptRanking';

interface RankingCardProps {
  ranking: AdaptedRankingData;
}

export const RankingCard = ({ ranking }: RankingCardProps) => {
  return (
    <div className="flex-none w-47 flex items-center gap-[10px] mb-7">
      <ImageComponent
        type="profile"
        src={ranking.image}
        alt={ranking.nickname}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex flex-col items-start gap-1 lg:gap-2">
        <div className="flex items-center gap-[5px]">
          <RankingChip rankNumber={ranking.rank} color={ranking.color} />
          <span className="text-gray-F1 text-[16px] font-normal text-ellipsis whitespace-nowrap inline-block overflow-hidden text-overflow-ellipsis max-w-[80px]">
            {ranking.nickname}
          </span>
        </div>
        <div className="flex gap-3 text-[12px] font-light text-gray-6E">
          <span>팔로워 {ranking.followersCount}</span>
          <span>리뷰 {ranking.reviewCount}</span>
        </div>
      </div>
    </div>
  );
};
