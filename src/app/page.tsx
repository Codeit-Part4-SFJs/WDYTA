import CategoryChip from "@/shared/ui/Chip/CategoryChip";
import RankingChip from "@/shared/ui/Chip/RankingChip";

export default function Home() {
  return (
    <div>
      <RankingChip ranking={1} />
      <RankingChip ranking={2} />
      <RankingChip ranking={3} />
      <CategoryChip categoryID={1} />
    </div>
  );
}
