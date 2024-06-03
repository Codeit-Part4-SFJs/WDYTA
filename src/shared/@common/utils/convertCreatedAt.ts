export const convertCreatedAt = (createdAt: string) => {
  const convertedCreatedAt = createdAt.slice(0, 10);

  return convertedCreatedAt;
};
