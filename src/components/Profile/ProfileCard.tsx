'use client';

import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { ImageComponent } from '@/shared/ui/Img';
import { useEffect, useState } from 'react';

const profileData = {
  description:
    '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
  image:
    'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/158/1716804166536/KakaoTalk_20240527_185342395.jpg',
  nickname: '다살거야',
};
const authData = {
  id: 1,
};
const userData = {
  id: 2,
};
const ProfileCard = () => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (userData.id === authData.id) {
      setIsValid(false);
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-[30px]  bg-gray-25 w-[335px] h-[466px] lg:w-[340px] lg:h-[603px] md:w-[509px] md:h-[451] rounded-xl border border-solid border-gray-35">
      <ImageComponent
        type="profile"
        src={profileData.image}
        className="lg:w-[180px] lg:h-[180px]"
        alt="프로필 이미지"
      />
      <div className=" flex flex-col items-center lg:gap-[20px] w-[300px] min-h-[66px] text-center">
        <p className="text-[24px] text-gray-F1">{profileData?.nickname}</p>
        <p className="text-gray-6E w-[300px] h-[70px] line-clamp-3">
          {profileData?.description}
        </p>
      </div>
      <div className="flex justify-between lg:w-[184px] lg:h-[53px]">
        <div className="flex flex-col items-center">
          <div className="lg:text-[20px] text-gray-F1">762</div>
          <div className="lg:text-[16px] text-gray-9F">팔로워</div>
        </div>
        <div className="border border-solid border-gray-35" />
        <div className="flex flex-col items-center">
          <div className="lg:text-[20px] text-gray-F1">102</div>
          <div className="lg:text-[16px] text-gray-9F">팔로잉</div>
        </div>
      </div>
      <Button
        type="submit"
        kind={ButtonKind.primary}
        customSize={`${!isValid ? 'cursor-not-allowed' : 'cursor-pointer'} w-[295px] md:w-[449px] lg:w-[300px] h-[50px] md:h-[55px] lg:h-[65px] lg:text-[18px]`}
        disabled={!isValid}
      >
        팔로우
      </Button>
    </div>
  );
};

export default ProfileCard;
