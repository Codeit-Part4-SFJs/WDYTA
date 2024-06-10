export const productKeys = {
  all: ['products'] as const,
  detail: (productId: number) =>
    [...productKeys.all, 'detail', productId] as const,
};
