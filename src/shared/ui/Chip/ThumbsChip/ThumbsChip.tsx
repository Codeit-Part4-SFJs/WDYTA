'use client';

import { Icon } from '@/shared/ui/Icon';

interface ThumbsChipProps {
  isLike: boolean;
  likeCount: number;
}

export const ThumbsChip = ({ isLike, likeCount }: ThumbsChipProps) => {
  const likeIconImage = isLike ? 'UpIcon' : 'UpNoColorIcon';
  const likeClassName = isLike ? 'text-pink' : 'text-gray-9F';
  // 좋아요가 세자리 이상이면 text-[12px]로 변경
  let likeCountClassName = 'text-[14px]';

  if (likeCount >= 100) {
    likeCountClassName = 'text-[12px]';
  }

  // 좋아요가 1000 이상이면 1K+로 변경
  const formatted1000toK = (count: number) => {
    if (count < 1000) {
      return count;
    }
    return `${Math.round(count / 1000)}K+`;
  };

  return (
    <div className="flex flex-col justify-center items-start gap-3 w-fit h-fit px-[12px] py-[6px] rounded-full bg-gray-25 border-solid border-2 border-gray-35">
      <div className="flex items-center gap-1">
        <Icon name={likeIconImage} className="w-[18px] h-[18px] fill-gray-9F" />
        <span className={`font-normal ${likeClassName} ${likeCountClassName}`}>
          {formatted1000toK(likeCount)}
        </span>
      </div>
    </div>
  );
};
