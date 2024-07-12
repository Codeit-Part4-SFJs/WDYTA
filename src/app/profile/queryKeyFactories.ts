export const profileKeys = {
  all: ['user'] as const,
  user: (userId: number | null) => [...profileKeys.all, { userId }] as const,
  followList: (userId: number, type: string) =>
    [...profileKeys.user(userId), { type }] as const,
  productCard: (userId: number, tab: string) =>
    [...profileKeys.user(userId), { tab }] as const,
};
