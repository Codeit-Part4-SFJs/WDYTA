import { ImageComponent } from '@/shared/ui/Img';
import { RankingChip, RankingColor } from '@/shared/ui/Chip/RankingChip';
import { AdaptedRankingData } from '@/shared/@common/utils/adaptRanking';
// import { Ranking } from '../types/RankingType';

interface RankingCardProps {
  // ranking: Ranking;
  ranking: AdaptedRankingData;
  index: number;
  color: RankingColor;
}

export const RankingCard = ({ ranking, index, color }: RankingCardProps) => {
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
          <RankingChip rankNumber={index + 1} color={color} />
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
