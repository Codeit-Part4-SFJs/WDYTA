import { ImageComponent } from '@/shared/ui/Img';
import { RankingChip } from '@/shared/ui/Chip/RankingChip';
import { AdaptedRankingData } from '@/shared/@common/utils/adaptRanking';
import Link from 'next/link';

interface RankingCardProps {
  ranking: AdaptedRankingData;
}

export const RankingCard = ({ ranking }: RankingCardProps) => {
  // 1000 이상의 숫자를 1K+ 형태로 변환하는 함수
  const formatted1000toK = (count: number) => {
    if (count < 1000) {
      return count;
    }
    return `${Math.round(count / 1000)}K+`;
  };

  return (
    // 프로필 페이지 주소로 이동하는 <Link> 태그
    <div className="flex-none w-47 flex items-center gap-[10px] mb-7">
      <Link href={`/profile?userId=${ranking.id}`}>
        <ImageComponent
          type="profile"
          // 임시로 설정해둔 기본 프로필 이미지 경로 (추후 변경 예정)
          src={ranking?.image ?? '/icon/profile.png'}
          alt={ranking.nickname}
          className="w-12 h-12 rounded-full"
        />
      </Link>
      <div className="flex flex-col items-start gap-1 lg:gap-2">
        <div className="flex items-center gap-[5px]">
          <RankingChip rankNumber={ranking.rank} color={ranking.color} />
          <span className="text-gray-F1 text-[16px] font-normal text-ellipsis whitespace-nowrap inline-block overflow-hidden text-overflow-ellipsis max-w-[80px]">
            <Link href={`/profile?userId=${ranking.id}`}>
              {ranking.nickname}
            </Link>
          </span>
        </div>
        <div className="flex gap-3 text-[12px] font-light text-gray-6E">
          <span>팔로워 {formatted1000toK(ranking.followersCount)}</span>
          <span>리뷰 {formatted1000toK(ranking.reviewCount)}</span>
        </div>
      </div>
    </div>
  );
};
