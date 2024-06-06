'use client';

import { logoutAction } from '@/shared/@common/utils';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { ImageComponent } from '@/shared/ui/Img';
// import { useProfileStore } from '@/stores';
// import { useEffect, useState } from 'react';
import useUserInfoSuspenseQuery from './hooks/useUserInfoSuspenseQuery';
import useFollowMutation from './hooks/useFollowMutation';
import useUnFollowMutation from './hooks/useUnFollowMutation';
// import useUserFolloweeQuery from './hooks/useUserFolloweeQuery';
// import useUserInfoSuspenseQuery from './hooks/useUserInfoSuspenseQuery';

const PROFILE_DEFAULT_IMAGE =
  'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/185/1717575969372/profile.jpeg';
interface ProfileCardProps {
  loginedId?: number | null;
  accessToken: string;
  currentProfileId: number;
}

export const ProfileCard = ({
  loginedId,
  accessToken,
  currentProfileId,
}: ProfileCardProps) => {
  // const { setCurrentProfileUser } = useProfileStore();
  // const { data: followeeInfo } = useUserFolloweeQuery(Number(loginedId));
  const { data: userInfoData } = useUserInfoSuspenseQuery(
    Number(currentProfileId),
    accessToken,
  );
  const { mutate: responseFollowMutate } = useFollowMutation();
  const { mutate: responseUnFollowMutate } = useUnFollowMutation();
  const isFollowing = userInfoData?.isFollowing;
  const isMyProfile = currentProfileId === loginedId;

  const FollowBtnKind = isFollowing ? ButtonKind.tertiary : ButtonKind.primary;
  const FollowBtnText = isFollowing ? '팔로우 취소' : '팔로우';

  // console.log(followeeInfo);
  const handleClickFollow = () => {
    responseFollowMutate({ currentProfileId, accessToken });
  };
  const handleClickUnFollow = () => {
    responseUnFollowMutate({ currentProfileId, accessToken });
  };
  const handleSignOut = async () => {
    await logoutAction();
    window.location.reload();
  };

  const buttonCustomSize =
    'lg:w-[295px] lg:w-[300px] h-[50px] md:h-[55px] lg:h-[65px] lg:text-[18px]';
  return (
    <section className="flex flex-col items-center justify-center gap-[42px] pt-[40px] pb-[30px] px-[30px] md:gap-[25px] mobile:gap-[35px] lg:min-w-[340px] md:w-full mobile:w-full rounded-xl border border-solid bg-gray-25 border-gray-35">
      <ImageComponent
        type="profile"
        src={userInfoData?.image || PROFILE_DEFAULT_IMAGE}
        className="lg:w-[180px] lg:h-[180px] md:w-[120px] md:h-[120px] mobile:w-[120px] mobile:h-[120px]"
        alt="프로필 이미지"
      />
      <div className="flex flex-col items-center lg:gap-[20px] md:gap-[10px] mobile:gap-[10px] lg:w-[300px] lg:min-h-[66px] md:w-full mobile:w-full text-center">
        <p className="lg:text-[24px] md:text-[20px]  text-gray-F1">
          {userInfoData?.nickname}
        </p>
        <p className="text-gray-6E w-[300px] md:w-full mobile:w-full md:text-[14px] mobile:text-[14px]">
          {userInfoData?.description}
        </p>
      </div>
      <div className="flex justify-between lg:w-[184px] lg:h-[53px] md:w-[234px] md:h-[48px] mobile:w-[194px] mobile:h-[48px]">
        <div className="flex flex-col items-center">
          <div className="lg:text-[20px] md:text-[18px] text-gray-F1">
            {userInfoData?.followersCount || 0}
          </div>
          <div className="lg:text-[16px] md:text-[14px] text-gray-9F">
            팔로워
          </div>
        </div>
        <div className="border border-solid border-gray-35" />
        <div className="flex flex-col items-center">
          <div className="lg:text-[20px] md:text-[18px] text-gray-F1">
            {userInfoData?.followeesCount || 0}
          </div>
          <div className="lg:text-[16px] md:text-[14px] text-gray-9F">
            팔로잉
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] mobile:w-full md:w-full">
        {isMyProfile ? (
          <>
            <Button kind={ButtonKind.primary} customSize={buttonCustomSize}>
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
            kind={FollowBtnKind}
            customSize={buttonCustomSize}
          >
            {FollowBtnText}
          </Button>
        )}
      </div>
    </section>
  );
};
