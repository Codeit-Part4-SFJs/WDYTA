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
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FollowDataPage,
  FolloweeTypes,
  FollowerTypes,
} from '@/components/Profile/types/followType';
import { PROFILE_DEFAULT_IMAGE } from '../constants/profileDefaultImage';

interface UserListModalProps {
  accessToken: string;
  loginedId: number;
}
const UserListModal = ({ accessToken, loginedId }: UserListModalProps) => {
  const searchParams = useSearchParams();
  const userId = Number(searchParams.get('userId')) ?? loginedId;
  const pathname = usePathname();
  const isFollowerList = pathname === '/modal/userFollowerList';

  const {
    data: followListData,
    fetchNextPage,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery<FollowDataPage>(
    isFollowerList
      ? followerOptions(userId, pathname)
      : followeeOptions(userId, pathname),
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
    <div className="flex flex-col gap-[40px] lg:max-h-[660px] w-full">
      <h1 className="lg:text-2xl text-xl text-white">
        {`${userInfoData.nickname}님을 팔로우하는 유저`}
      </h1>
      <div className="flex flex-col gap-[25px] overflow-y-scroll lg:max-h-[515px] scrollbar-hide">
        {hasFollow ? (
          <>
            {followListData.pages.map((page) => (
              <ul key={page.nextCursor} className="flex flex-col gap-[25px]">
                {page.list.map((item: FolloweeTypes | FollowerTypes) => {
                  const user = isFollowerList
                    ? (item as FollowerTypes).follower
                    : (item as FolloweeTypes).followee;
                  return (
                    <li key={item.id} className="flex items-center gap-[20px]">
                      <ImageComponent
                        type="profile"
                        src={user.image || PROFILE_DEFAULT_IMAGE}
                        alt={user.nickname}
                      />
                      <div>
                        <h2 className="text-lg text-white">{user.nickname}</h2>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ))}
            <div ref={triggerRef} />
          </>
        ) : (
          <div>
            <Loading>팔로워 유저가 없습니다</Loading>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserListModal;
