'use client';

import {
  followeeOptions,
  followerOptions,
  profileOptions,
} from '@/app/profile/queryOptions';
import { Loading } from '@/shared/ui/Icon';
import { ImageComponent } from '@/shared/ui/Img';
import {
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FollowDataPage,
  Followee,
  Follower,
} from '@/components/Profile/types/followType';
import { PROFILE_DEFAULT_IMAGE } from '../constants/profileDefaultImage';

interface UserListModalProps {
  accessToken: string;
  loginedId: number;
}
const UserListModal = ({ accessToken, loginedId }: UserListModalProps) => {
  const searchParams = useSearchParams();
  const userId = Number(searchParams.get('userId')) ?? loginedId;
  const followType = searchParams.get('type') ?? 'follower';
  const isFollowerList = followType === 'follower';

  const {
    data: followListData,
    fetchNextPage,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery<FollowDataPage>(
    isFollowerList
      ? followerOptions(userId, followType)
      : followeeOptions(userId, followType),
  );

  const { data: userInfoData } = useSuspenseQuery(
    profileOptions(userId, accessToken),
  );

  const hasFollow = followListData.pages[0].list.length;
  const { ref: triggerRef, inView } = useInView();

  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, isFetchingNextPage, inView]);

  return (
    <div className="flex flex-col gap-[40px] lg:h-[520px] md:h-[440px] mobile:h-[440px] w-full">
      <h1 className="lg:text-2xl text-xl text-white">
        {isFollowerList
          ? `${userInfoData.nickname}님을 팔로우하는 유저`
          : `${userInfoData.nickname}님이 팔로우하는 유저`}
      </h1>
      <div className="flex flex-col gap-[25px] overflow-y-scroll h-full scrollbar-hide">
        {hasFollow ? (
          <>
            {followListData.pages.map((page) => (
              <ul
                key={page.nextCursor}
                className="flex flex-col lg:gap-[25px] gap-[20px]"
              >
                {page.list.map((item: Followee | Follower) => {
                  const user = isFollowerList
                    ? (item as Follower).follower
                    : (item as Followee).followee;
                  return (
                    <li key={item.id} className="flex items-center gap-[20px] ">
                      <ImageComponent
                        type="profile"
                        src={user.image || PROFILE_DEFAULT_IMAGE}
                        alt={user.nickname}
                      />
                      <div>
                        <h2 className="lg:text-lg text-base text-white">
                          {user.nickname}
                        </h2>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ))}
            <div ref={triggerRef} />
          </>
        ) : (
          <div className="flex justify-center items-center h-full">
            <Loading>팔로워 유저가 없습니다</Loading>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserListModal;
