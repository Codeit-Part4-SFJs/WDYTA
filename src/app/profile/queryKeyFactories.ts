export const ProfileKeys = {
  all: ['user'] as const,
  user: (userId: number) => [...ProfileKeys.all, userId] as const,
  follower: (userId: number) =>
    [...ProfileKeys.user(userId), 'follower'] as const,
  productCard: (userId: number, tab: string) =>
    [...ProfileKeys.user(userId), { tab }] as const,
};
