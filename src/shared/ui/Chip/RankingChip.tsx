interface Props {
  ranking: number;
}

export default function RankingChip({ ranking }: Props) {
  let rankingClassName = "";
  if (ranking === 1) {
    rankingClassName = "text-pink bg-pink bg-opacity-10";
  } else if (ranking === 2) {
    rankingClassName = "text-green bg-green bg-opacity-10";
  } else if (ranking >= 3 && ranking <= 6) {
    rankingClassName = "text-gray-9F bg-gray-9F bg-opacity-10";
  }

  return (
    <div
      className={`inline-flex items-center justify-center w-[26px] md:w-[32px] h-[16px] md:h-[18px] px-[6px] md:px-[8px] py-[2px] rounded-full text-[10px] md:text-[12px] ${rankingClassName}`}
    >
      {ranking}
      <span>등</span>
    </div>
  );
}
