export const compareQueryKeys = {
  all: ['compare'] as const,
  firstProduct: (product1: number | undefined) =>
    [...compareQueryKeys.all, { product1 }] as const,
  secondProduct: (product2: number | undefined) =>
    [...compareQueryKeys.all, { product2 }] as const,
};
