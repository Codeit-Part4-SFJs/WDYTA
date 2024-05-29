export enum RankingColor {
  PINK = 'PINK',
  GREEN = 'GREEN',
  GRAY = 'GRAY',
}

interface RankingChipProps {
  color: RankingColor;
  ranking: number;
}

const makeColorByRanking = {
  [RankingColor.PINK]: 'text-pink bg-pink',
  [RankingColor.GREEN]: 'text-green bg-green',
  [RankingColor.GRAY]: 'text-gray-9F bg-gray-9F',
};

export const RankingChip = ({ ranking, color }: RankingChipProps) => {
  return (
    <div
      className={`inline-flex items-center justify-center w-[26px] lg:w-[32px] h-[16px] lg:h-[18px] px-[6px] lg:px-[8px] py-[2px] rounded-full text-[10px] lg:text-[12px] font-normal bg-opacity-10 ${makeColorByRanking[color]}`}
    >
      {ranking}
      <span>등</span>
    </div>
  );
};
