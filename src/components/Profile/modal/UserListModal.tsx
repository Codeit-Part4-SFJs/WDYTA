'use client';

import { followerOptions, profileOptions } from '@/app/profile/queryOptions';
import { Loading } from '@/shared/ui/Icon';
import { ImageComponent } from '@/shared/ui/Img';
import {
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getClientCookies } from '@/shared/@common/utils';
import { PROFILE_DEFAULT_IMAGE } from '../constants/profileDefaultImage';

const UserListModal = () => {
  const searchParams = useSearchParams();
  const { accessToken } = getClientCookies();
  const userId = Number(searchParams.get('userId'));

  const {
    data: followerData,
    fetchNextPage,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery(followerOptions(userId));
  const { data: userInfoData } = useSuspenseQuery(
    profileOptions(userId, accessToken),
  );

  const hasFollower = followerData.pages[0].list.length;
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
        {hasFollower ? (
          <>
            {followerData.pages.map((page) => (
              <ul className="flex flex-col gap-[25px]">
                {page.list.map((item) => (
                  <li key={item.id} className="flex items-center gap-[20px]">
                    <ImageComponent
                      type="profile"
                      src={item.follower.image || PROFILE_DEFAULT_IMAGE}
                      alt={item.follower.nickname}
                    />
                    <div>
                      <h2 className="text-lg text-white">
                        {item.follower.nickname}
                      </h2>
                    </div>
                  </li>
                ))}
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
