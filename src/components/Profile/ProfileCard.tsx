'use client';

import { logoutAction } from '@/shared/@common/utils';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { ImageComponent } from '@/shared/ui/Img';
// import { useProfileStore } from '@/stores';
import { useEffect, useState } from 'react';
import useUserInfoSuspenseQuery from './hooks/useUserInfoSuspenseQuery';
import useFollowMutation from './hooks/useFollowMutation';
// import useUserFolloweeQuery from './hooks/useUserFolloweeQuery';
// import useUserInfoSuspenseQuery from './hooks/useUserInfoSuspenseQuery';

const authData = {
  id: 1,
};
const userData = {
  id: 2,
};
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

  console.log(userInfoData);
  // console.log(followeeInfo);
  const handleClickFollow = () => {
    responseFollowMutate({ currentProfileId, accessToken });
  };
  const handleSignOut = async () => {
    await logoutAction();
    window.location.reload();
  };

  // useEffect(() => {
  //   setCurrentProfileUser(Number(currentProfileId));
  // }, [currentProfileId, setCurrentProfileUser]);

  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(userData.id !== authData.id);
  }, []);

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
        {!userInfoData?.isFollowing && currentProfileId !== loginedId && (
          <Button
            onClick={handleClickFollow}
            type="submit"
            kind={ButtonKind.primary}
            customSize="lg:w-[295px] lg:w-[300px] h-[50px] md:h-[55px] lg:h-[65px] lg:text-[18px]"
            disabled={!isValid}
          >
            팔로우
          </Button>
        )}
        {userInfoData?.isFollowing && currentProfileId !== loginedId && (
          <Button
            type="submit"
            kind={ButtonKind.primary}
            customSize="lg:w-[295px] lg:w-[300px] h-[50px] md:h-[55px] lg:h-[65px] lg:text-[18px]"
            disabled={!isValid}
          >
            팔로우 취소
          </Button>
        )}
        {currentProfileId === loginedId && (
          <Button
            type="submit"
            kind={ButtonKind.primary}
            customSize="lg:w-[295px] lg:w-[300px] h-[50px] md:h-[55px] lg:h-[65px] lg:text-[18px]"
            disabled={!isValid}
          >
            프로필 편집
          </Button>
        )}
        {!!loginedId && (
          <Button
            onClick={handleSignOut}
            type="submit"
            kind={ButtonKind.tertiary}
            customSize="lg:w-[295px] lg:w-[300px] h-[50px] md:h-[55px] lg:h-[65px] lg:text-[18px]"
            disabled={!isValid}
          >
            로그아웃
          </Button>
        )}
      </div>
    </section>
  );
};
