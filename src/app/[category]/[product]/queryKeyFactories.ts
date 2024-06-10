export const productKeys = {
  all: ['products'] as const,
  detail: (productId: number) =>
    [...productKeys.all, 'detail', productId] as const,
  reviews: (productId: number, filter: string) =>
    [...productKeys.detail(productId), 'reviews', { filter }] as const,
};
