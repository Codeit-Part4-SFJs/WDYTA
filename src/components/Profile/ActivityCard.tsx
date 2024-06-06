'use client';

import { CategoryChip } from '@/shared/ui/Chip/CategoryChip';
import { Icon } from '@/shared/ui/Icon';
import { useUserInfoStore } from '@/stores';
import { ActivityCardProps } from './types/userActivityType';

export const ActivityCard = ({ title, icon }: ActivityCardProps) => {
  const currentUserInfo = useUserInfoStore((state: any) => state.userInfoData);
  console.log('a', currentUserInfo);
  if (!currentUserInfo) {
    return null;
  }
  const { averageRating, reviewCount, mostFavoriteCategory } = currentUserInfo;
  console.log(currentUserInfo);
  return (
    <div className="flex flex-col flex-1 grow justify-center items-center gap-[20px] rounded-xl lg:max-w-[300px] lg:h-[128px] md:max-w-full md:h-[119px] mobile:w-[105px] mobile:h-[119px] bg-gray-25">
      <p className="text-[14px] lg:text-[16px] text-gray-9F">{title}</p>
      <div className="flex items-center gap-[5px] text-gray-F1 h-[20px] md:h-[24px] lg:h-[24px]">
        {icon && (
          <>
            <Icon
              name={icon}
              className="w-[20px] md:w-[20px] lg:w-[24px] fill-yellow"
            />
            <p
              className={`lg:text-[24px] md:text-[20px] mobile:text-[20px] ${
                icon === 'ReviewIcon' ? 'lg:leading-none' : ''
              }`}
            >
              {icon === 'StarIcon' ? averageRating : reviewCount}
            </p>
          </>
        )}
        {!icon && <CategoryChip categoryID={mostFavoriteCategory?.id} />}
      </div>
    </div>
  );
};
