export enum RankingColor {
  PINK,
  GREEN,
  GRAY,
}

interface RankingProps {
  color: RankingColor;
  ranking: number;
}

const makeColorByRanking = {
  [RankingColor.PINK]: "text-pink bg-pink",
  [RankingColor.GREEN]: "text-green bg-green",
  [RankingColor.GRAY]: "text-gray-9F bg-gray-9F",
};

const RankingChip = ({ ranking, color }: RankingProps) => {
  return (
    <div
      className={`inline-flex items-center justify-center w-[26px] lg:w-[32px] h-[16px] lg:h-[18px] px-[6px] lg:px-[8px] py-[2px] rounded-full text-[10px] lg:text-[12px] font-normal bg-opacity-10 ${makeColorByRanking[color]}`}
    >
      {ranking}
      <span>등</span>
    </div>
  );
};

export default RankingChip;
