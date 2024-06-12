import { queryOptions } from '@tanstack/react-query';
import { getMyInfo, getUserInfo } from '@/shared/@common/apis';
import { ProfileKeys } from './queryKeyFactories';

export const productOptions = (
  currentProfileId: number,
  currentMenu: string,
  apiFunc: any,
) => {
  return queryOptions({
    queryKey: ProfileKeys.productCard(currentProfileId, currentMenu),
    queryFn: async () => {
      if (!currentProfileId) return null;
      const response = await apiFunc(currentProfileId);
      return response.json();
    },
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

export const myProfileOptions = (accessToken: string) => {
  return queryOptions({
    queryKey: ProfileKeys.all,
    queryFn: async () => {
      const response = await getMyInfo(accessToken);
      return response.json();
    },
  });
};
