export const ProfileKeys = {
  all: ['user'] as const,
  user: (userId: number | null) => [...ProfileKeys.all, userId] as const,
  followList: (userId: number, type: string) =>
    [...ProfileKeys.user(userId), { type }] as const,
  productCard: (userId: number, tab: string) =>
    [...ProfileKeys.user(userId), { tab }] as const,
};
