import { ImageComponent } from '@/shared/ui/Img';
import { RankingChip, RankingColor } from '@/shared/ui/Chip/RankingChip';
import { Ranking } from '../types/RankingType';

interface RankingCardProps {
  ranking: Ranking;
  index: number;
}

export const RankingCard = ({ ranking, index }: RankingCardProps) => {
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
          <RankingChip ranking={index + 1} color={RankingColor.PINK} />
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
