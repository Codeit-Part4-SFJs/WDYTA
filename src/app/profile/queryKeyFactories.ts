export const ProfileKeys = {
  all: ['user'] as const,
  user: (userId: number) => [...ProfileKeys.all, userId] as const,
  userList: (userId: number, follow: string) =>
    [...ProfileKeys.user(userId), { follow }] as const,
  productCard: (userId: number, tab: string) =>
    [...ProfileKeys.user(userId), { tab }] as const,
};
