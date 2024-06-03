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
export const ProfileCard = () => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(userData.id !== authData.id);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-[42px] pt-[40px] pb-[30px] px-[30px] md:gap-[25px] mobile:gap-[35px] lg:min-w-[340px] md:w-full mobile:w-full rounded-xl border border-solid bg-gray-25 border-gray-35">
      <ImageComponent
        type="profile"
        src={profileData.image}
        className="lg:w-[180px] lg:h-[180px] md:w-[120px] md:h-[120px] mobile:w-[120px] mobile:h-[120px]"
        alt="프로필 이미지"
      />
      <div className="flex flex-col items-center lg:gap-[20px] md:gap-[10px] mobile:gap-[10px] lg:w-[300px] lg:min-h-[66px] md:w-full mobile:w-full text-center">
        <p className="lg:text-[24px] md:text-[20px]  text-gray-F1">
          {profileData?.nickname}
        </p>
        <p className="text-gray-6E w-[300px] md:w-full mobile:w-full md:text-[14px] mobile:text-[14px]">
          {profileData?.description}
        </p>
      </div>
      <div className="flex justify-between lg:w-[184px] lg:h-[53px] md:w-[234px] md:h-[48px] mobile:w-[194px] mobile:h-[48px]">
        <div className="flex flex-col items-center">
          <div className="lg:text-[20px] md:text-[18px] text-gray-F1">762</div>
          <div className="lg:text-[16px] md:text-[14px] text-gray-9F">
            팔로워
          </div>
        </div>
        <div className="border border-solid border-gray-35" />
        <div className="flex flex-col items-center">
          <div className="lg:text-[20px] md:text-[18px] text-gray-F1">102</div>
          <div className="lg:text-[16px] md:text-[14px] text-gray-9F">
            팔로잉
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] mobile:w-full md:w-full">
        <Button
          type="submit"
          kind={ButtonKind.primary}
          customSize="lg:w-[295px] lg:w-[300px] h-[50px] md:h-[55px] lg:h-[65px] lg:text-[18px]"
          disabled={!isValid}
        >
          팔로우
        </Button>
        <Button
          type="submit"
          kind={ButtonKind.tertiary}
          customSize="lg:w-[295px] lg:w-[300px] h-[50px] md:h-[55px] lg:h-[65px] lg:text-[18px]"
          disabled={!isValid}
        >
          로그아웃
        </Button>
      </div>
    </section>
  );
};
