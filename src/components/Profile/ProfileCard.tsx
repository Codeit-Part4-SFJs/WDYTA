'use client';

import { logoutAction } from '@/shared/@common/utils';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { ImageComponent } from '@/shared/ui/Img';
import useFollowMutation from '@/components/Profile/hooks/useFollowMutation';
import useUnFollowMutation from '@/components/Profile/hooks/useUnFollowMutation';
import { PROFILE_DEFAULT_IMAGE } from '@/components/Profile/constants/profileDefaultImage';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSuspenseQuery } from '@tanstack/react-query';
import { profileOptions } from '@/app/profile/queryOptions';
import Link from 'next/link';
import { TAB_NAMES_ORIGIN } from './constants/productMenu';

interface ProfileCardProps {
  loginedId: number | null;
  accessToken: string;
}

export const ProfileCard = ({ loginedId, accessToken }: ProfileCardProps) => {
  const router = useRouter();
  const userId = useSearchParams()?.get('userId');
  const tab = useSearchParams()?.get('tab') ?? TAB_NAMES_ORIGIN.reviewedProduct;
  const currentProfileId = Number(userId) || Number(loginedId);
  const isMyProfile = Number(userId) === Number(loginedId) || !userId;

  const { data: userInfoData } = useSuspenseQuery(
    profileOptions(currentProfileId, accessToken),
  );
  const {
    image,
    nickname,
    description,
    isFollowing,
    followersCount,
    followeesCount,
  } = userInfoData;

  const followMutation = useFollowMutation({ currentProfileId, accessToken });
  const unFollowMutation = useUnFollowMutation({
    currentProfileId,
    accessToken,
  });

  const followBtnKind = isFollowing ? ButtonKind.tertiary : ButtonKind.primary;
  const followBtnText = isFollowing ? '팔로우 취소' : '팔로우';

  const handleClickFollow = () => {
    if (!accessToken) {
      router.push(`/modal/common/loginAlert?userId=${currentProfileId}`, {
        scroll: false,
      });
      return;
    }
    followMutation.mutate({ isFollowing });
  };
  const handleClickUnFollow = () => {
    unFollowMutation.mutate({ isFollowing });
  };
  const handleSignOut = async () => {
    await logoutAction();
    window.location.reload();
  };

  const buttonCustomSize =
    'lg:w-[295px] lg:w-full h-[50px] md:h-[55px] lg:h-[65px] lg:text-[18px]';
  return (
    <section className="flex flex-col items-center justify-center gap-[42px] pt-[40px] pb-[30px] px-[30px] md:gap-[25px] mobile:gap-[35px] lg:w-[340px] md:w-full mobile:w-full rounded-xl border border-solid bg-gray-25 border-gray-35">
      <ImageComponent
        type="profile"
        src={image ?? PROFILE_DEFAULT_IMAGE}
        className="lg:w-[180px] lg:h-[180px] md:w-[120px] md:h-[120px] mobile:w-[120px] mobile:h-[120px]"
        alt="프로필 이미지"
      />
      <div className="flex flex-col items-center lg:gap-[20px] md:gap-[10px] mobile:gap-[10px] w-full lg:min-h-[66px] text-center">
        <p className="lg:text-[24px] md:text-[20px]  text-gray-F1">
          {nickname}
        </p>
        <p className="text-gray-6E w-full md:text-[14px] mobile:text-[14px]">
          {description}
        </p>
      </div>
      <div className="flex justify-between lg:w-[160px] lg:h-[53px] md:w-[234px] md:h-[48px] mobile:w-[194px] mobile:h-[48px]">
        <div className="flex flex-col items-center">
          <Link
            href={`/modal/profile/userFollowList?userId=${currentProfileId}&tab=${tab}&type=follower`}
            scroll={false}
          >
            <div className="lg:text-[20px] md:text-[18px] text-gray-F1 cursor-pointer">
              {followersCount}
            </div>
          </Link>
          <div className="lg:text-[16px] md:text-[14px] text-gray-9F">
            팔로워
          </div>
        </div>
        <div className="border border-solid border-gray-35" />
        <div className="flex flex-col items-center">
          <Link
            href={`/modal/profile/userFollowList?userId=${currentProfileId}&tab=${tab}&type=followee`}
            scroll={false}
          >
            <div className="lg:text-[20px] md:text-[18px] text-gray-F1 cursor-pointer">
              {followeesCount}
            </div>
          </Link>
          <div className="lg:text-[16px] md:text-[14px] text-gray-9F">
            팔로잉
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] lg:w-full mobile:w-full md:w-full">
        {isMyProfile ? (
          <>
            <Button
              onClick={() =>
                router.push(
                  `/modal/profile/profileEdit?userId=${currentProfileId}&tab=${tab}`,
                  { scroll: false },
                )
              }
              kind={ButtonKind.primary}
              customSize={buttonCustomSize}
            >
              프로필 편집
            </Button>
            <Button
              onClick={handleSignOut}
              kind={ButtonKind.tertiary}
              customSize={buttonCustomSize}
            >
              로그아웃
            </Button>
          </>
        ) : (
          <Button
            onClick={!isFollowing ? handleClickFollow : handleClickUnFollow}
            kind={followBtnKind}
            customSize={buttonCustomSize}
          >
            {followBtnText}
          </Button>
        )}
      </div>
    </section>
  );
};
