'use client';

import { Icon } from '@/shared/ui/Icon';
import { useState } from 'react';

export const DetailFavoriteButton = ({ defaultFavorite }: any) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(defaultFavorite);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={handleClick} type="button">
      {isFavorite ? (
        <Icon
          name="SaveIcon"
          className="mobile:w-[24px] md:w-[24px] lg:w-[28px] mobile:h-[24px] md:h-[24px] lg:h-[28px] fill-red"
        />
      ) : (
        <Icon
          name="UnSaveIcon"
          className="mobile:w-[24px] md:w-[24px] lg:w-[28px] mobile:h-[24px] md:h-[24px] lg:h-[28px] fill-gray-6E"
        />
      )}
    </button>
  );
};
