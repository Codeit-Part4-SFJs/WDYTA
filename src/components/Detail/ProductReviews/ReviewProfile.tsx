import { Icon } from '@/shared/ui/Icon';
import { ImageComponent } from '@/shared/ui/Img';
import Link from 'next/link';
import { ReviewProfileProps } from '@/components/Detail/types';
import { PROFILE_DEFAULT_IMAGE } from '@/components/Profile/constants/profileDefaultImage';

const createRatingColors = (rating: number) => {
  const ratingColors = new Array<string>(0);

  for (let i = 1; i <= 5; i += 1) {
    if (i <= rating) {
      ratingColors.push('fill-yellow');
    } else {
      ratingColors.push('fill-gray-6E');
    }
  }

  return ratingColors;
};

export const ReviewProfile = ({ rating, reviewUser }: ReviewProfileProps) => {
  const ratingColors = createRatingColors(rating);

  return (
    <Link
      className="lg:h-[42px] md:h-[36px] mobile:h-[36px] flex items-center gap-[10px]"
      href={`/profile?userId=${reviewUser.id}`}
    >
      <div className="shrink-0">
        <ImageComponent
          type="profile"
          src={`${reviewUser.image ?? PROFILE_DEFAULT_IMAGE}`}
          alt={`${reviewUser.nickname}의 프로필`}
        />
      </div>
      <div className="flex flex-col gap-[5px]">
        <div className="text-sm lg:text-base text-gray-F1 not-italic leading-normal font-normal">
          {reviewUser.nickname}
        </div>
        <div className="flex gap-[2px]">
          {ratingColors.map((color) => (
            <Icon
              key={Math.random()}
              name="StarIcon"
              className={`mobile:w-[12px] mobile:h-[12px] md:w-[15px] md:h-[15px] lg:w-[16px] lg:h-[16px] ${color}`}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};
