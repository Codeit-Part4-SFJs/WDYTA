import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'react';
import LoadingIcon from '../../../../public/icon/newLoading.svg';
import { LoadingProps } from './types/iconType';

export const Loading = ({
  iconClassName,
  textClassName,
  children,
}: PropsWithChildren<LoadingProps>) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <LoadingIcon
        className={twMerge(
          'mobile:w-[50px] mobile:h-[32px] w-[50px] h-[32px] lg:w-[50px] lg:h-[40px] fill-gray-6E',
          iconClassName,
        )}
      />
      <p
        className={twMerge(
          'mobile:text-lg md:text-lg lg:text-xl text-gray-6E ',
          textClassName,
        )}
      >
        {children}
      </p>
    </div>
  );
};
