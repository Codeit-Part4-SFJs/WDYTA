import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';
import {
  getMyInfo,
  getUserFollowees,
  getUserFollowers,
  getUserInfo,
} from '@/shared/@common/apis';
import { ProductDataPage } from '@/components/Profile/types/productType';
import { FollowDataPage } from '@/components/Profile/types/followType';
import { ProfileKeys } from './queryKeyFactories';

export const productOptions = (
  currentProfileId: number,
  currentMenu: string,
  apiFunc: any,
) => {
  return infiniteQueryOptions<ProductDataPage>({
    queryKey: ProfileKeys.productCard(currentProfileId, currentMenu),
    queryFn: async ({ pageParam }) => {
      const response = await apiFunc(currentProfileId, pageParam);
      return response.json();
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const profileOptions = (userId: number, accessToken: string) => {
  return queryOptions({
    queryKey: ProfileKeys.user(Number(userId)),
    queryFn: async () => {
      const response = await getUserInfo(Number(userId), accessToken);
      return response.json();
    },
  });
};

export const followerOptions = (userId: number, type: string) => {
  return infiniteQueryOptions<FollowDataPage>({
    queryKey: ProfileKeys.userList(Number(userId), type),
    queryFn: async ({ pageParam }) => {
      const response = await getUserFollowers(
        Number(userId),
        Number(pageParam),
      );
      return response.json();
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const followeeOptions = (userId: number, type: string) => {
  return infiniteQueryOptions<FollowDataPage>({
    queryKey: ProfileKeys.userList(Number(userId), type),
    queryFn: async ({ pageParam }) => {
      const response = await getUserFollowees(
        Number(userId),
        Number(pageParam),
      );
      return response.json();
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const myProfileOptions = (accessToken: string) => {
  return queryOptions({
    queryKey: ProfileKeys.all,
    queryFn: async () => {
      const response = await getMyInfo(accessToken);
      return response.json();
    },
  });
};
