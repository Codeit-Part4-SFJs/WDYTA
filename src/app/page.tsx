import CategoryChip from "@/shared/ui/Chip/CategoryChip";
import CategoryFilterChip from "@/shared/ui/Chip/CategoryFilterChip";
import CompareAChip from "@/shared/ui/Chip/CompareAChip";
import CompareBChip from "@/shared/ui/Chip/CompareBChip";
import RankingChip from "@/shared/ui/Chip/RankingChip";
import ThumbsChip from "@/shared/ui/Chip/ThumbsChip";
import { RankingColor } from "@/shared/ui/Chip/RankingChip";

export default function Home() {
  return (
    <div>
      <RankingChip ranking={1} color={RankingColor.PINK} />
      <RankingChip ranking={2} color={RankingColor.GREEN} />
      <RankingChip ranking={3} color={RankingColor.GRAY} />
      {[...Array(11)].map((_, index) => (
        <CategoryChip key={index} categoryID={index + 1} />
      ))}
      <CategoryFilterChip categoryID={0} />
      {[...Array(11)].map((_, index) => (
        <CategoryFilterChip key={index} categoryID={index + 1} />
      ))}
      <ThumbsChip reviewID={1} isLike={false} likeCount={99} />
      <CompareAChip productName="IPhone 14 Pro Max" />
      <CompareBChip productName="Galaxy S22 Ultra" />
    </div>
  );
}

// export default function Home() {
//   return <div>홈페이지입니다~</div>;
// }
