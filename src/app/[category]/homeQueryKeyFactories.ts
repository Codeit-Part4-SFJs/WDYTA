export const homeProductKeys = {
  all: ['products'] as const,
  homeProducts: (keyword: string, category: number, order: string) =>
    [...homeProductKeys.all, { keyword }, { category }, { order }] as const,
};

export const homeRankingKeys = {
  all: ['ranking'] as const,
};
