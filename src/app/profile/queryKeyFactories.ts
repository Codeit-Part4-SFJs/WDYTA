export const ProfileKeys = {
  all: ['user'] as const,
  user: (userId: number) => [...ProfileKeys.all, userId] as const,
  userList: (userId: number, type: string) =>
    [...ProfileKeys.user(userId), { type }] as const,
  productCard: (userId: number, tab: string) =>
    [...ProfileKeys.user(userId), { tab }] as const,
};
