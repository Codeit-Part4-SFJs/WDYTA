"use client";

import { useState } from "react";
import Icon from "@/shared/ui/Icon/Icon";

interface Props {
  reviewID?: number;
  isLike: boolean;
  likeCount: number;
}

const ThumbsChip = ({ reviewID, isLike, likeCount }: Props) => {
  const [isLiked, setIsLiked] = useState(isLike);
  const [likedCount, setLikedCount] = useState(likeCount);

  const likeIconImage = isLiked ? "UpIcon" : "UpNoColorIcon";
  const likeColor = isLiked ? "" : "#9FA6B2";
  const likeClassName = isLiked ? "text-[#FF2F9F]" : "text-[#9FA6B2]";
  //좋아요가 세자리 이상이면 text-[12px]로 변경
  let likeCountClassName = "text-[14px]";
  if (likedCount >= 100) {
    likeCountClassName = "text-[12px]";
  }

  //API 연동 시 변경해야함 (좋아요 누르면 post 요청하여 좋아요 수 증가, 좋아요 취소하면 delete 요청하여 좋아요 수 감소)
  const handleLike = () => {
    if (isLiked) {
      setLikedCount(likedCount - 1);
    } else {
      setLikedCount(likedCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex flex-col justify-center items-start gap-3 w-fit h-fit px-[12px] py-[6px] rounded-full bg-[#252530] border-solid border-2 border-[#353542]">
      <div className="flex items-center gap-1">
        <button onClick={handleLike}>
          <Icon
            name={likeIconImage}
            color={likeColor}
            iconSizeClass={"w-[18px] h-[18px]"}
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
