import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';
import {
  getMyInfo,
  getUserFollowers,
  getUserInfo,
} from '@/shared/@common/apis';
import {
  FollowerDataPage,
  ProductDataPage,
} from '@/components/Profile/types/productType';
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

export const followerOptions = (userId: number) => {
  return infiniteQueryOptions<FollowerDataPage>({
    queryKey: ProfileKeys.follower(Number(userId)),
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

export const myProfileOptions = (accessToken: string) => {
  return queryOptions({
    queryKey: ProfileKeys.all,
    queryFn: async () => {
      const response = await getMyInfo(accessToken);
      return response.json();
    },
  });
};
