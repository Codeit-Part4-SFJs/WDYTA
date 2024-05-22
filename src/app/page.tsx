import CategoryChip from "@/shared/ui/Chip/CategoryChip";
import CategoryFilterChip from "@/shared/ui/Chip/CategoryFilterChip";
import RankingChip from "@/shared/ui/Chip/RankingChip";
import ThumbsChip from "@/shared/ui/Chip/ThumbsChip";

export default function Home() {
  return (
    <div>
      <RankingChip ranking={1} />
      <RankingChip ranking={2} />
      <RankingChip ranking={3} />
      {[...Array(11)].map((_, i) => (
        <CategoryChip key={i} categoryID={i + 1} />
      ))}
      <CategoryFilterChip categoryID={1} />
      <CategoryFilterChip categoryID={0} />
      <ThumbsChip isLike={false} likeCount={99} />
    </div>
  );
}
