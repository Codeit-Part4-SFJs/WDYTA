'use client';

import { useState, useEffect } from 'react';
import Icon from '@/shared/ui/Icon/Icon';

interface ThumbsChipProps {
  reviewID?: number;
  isLike: boolean;
  likeCount: number;
  onClick?: () => void;
}

const ThumbsChip = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  reviewID,
  isLike,
  likeCount,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick,
}: ThumbsChipProps) => {
  const [isLiked, setIsLiked] = useState(isLike);
  const [likedCount, setLikedCount] = useState<number | string>(likeCount);

  useEffect(() => {
    setIsLiked(isLike);
    setLikedCount(likeCount);
  }, [isLike, likeCount]);

  const likeIconImage = isLiked ? 'UpIcon' : 'UpNoColorIcon';
  const likeClassName = isLiked ? 'text-pink' : 'text-gray-9F';
  // 좋아요가 세자리 이상이면 text-[12px]로 변경
  let likeCountClassName = 'text-[14px]';
  const count = Number(likedCount);
  if (count >= 100) {
    likeCountClassName = 'text-[12px]';
  }

  // 좋아요가 1000 이상이면 1K+로 변경
  if (count >= 1000) {
    setLikedCount('1K+');
    likeCountClassName = 'text-[12px]';
  }
  if (count >= 2000) {
    setLikedCount('2K+');
    likeCountClassName = 'text-[12px]';
  }

  // 임의로 만들어둔 함수입니다!
  // API 연동 시 props로 함수 내려줘서 변경해야해요! (좋아요 누르면 post 요청하여 좋아요 수 증가, 좋아요 취소하면 delete 요청하여 좋아요 수 감소)
  const handleLike = () => {
    if (isLiked) {
      setLikedCount(count - 1);
    } else {
      setLikedCount(count + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex flex-col justify-center items-start gap-3 w-fit h-fit px-[12px] py-[6px] rounded-full bg-gray-25 border-solid border-2 border-gray-35">
      <div className="flex items-center gap-1">
        <button type="button" onClick={handleLike}>
          <Icon
            name={likeIconImage}
            className="w-[18px] h-[18px] fill-gray-9F"
          />
        </button>
        <span className={`font-normal ${likeClassName} ${likeCountClassName}`}>
          {likedCount}
        </span>
      </div>
    </div>
  );
};

export default ThumbsChip;
