import { Ranking } from '@/components/Home/types/RankingType';
import { RankingColor } from '@/shared/ui/Chip/RankingChip';

export interface AdaptedRankingData {
  id: number;
  rank: number;
  nickname: string;
  image: string;
  followersCount: number;
  reviewCount: number;
  color: RankingColor;
}

const getColorByRank = (rank: number): RankingColor => {
  switch (rank) {
    case 1:
      return RankingColor.PINK;
    case 2:
      return RankingColor.GREEN;
    default:
      return RankingColor.GRAY;
  }
};

export const adaptRanking = (data: Ranking[]): AdaptedRankingData[] => {
  return data?.slice(0, 6).map((item, index) => ({
    id: item.id,
    rank: index + 1,
    nickname: item.nickname,
    image: item.image,
    followersCount: item.followersCount,
    reviewCount: item.reviewCount,
    color: getColorByRank(index + 1),
  }));
};
