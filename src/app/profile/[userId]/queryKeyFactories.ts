export const ProfileKeys = {
  all: ['user'] as const,
  user: (userId: number) => [...ProfileKeys.all, userId] as const,
  productCard: (userId: number, queryKey: string) =>
    [...ProfileKeys.user(userId), queryKey] as const,
};
