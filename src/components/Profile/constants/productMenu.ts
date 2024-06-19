import { Option } from '@/shared/ui/Dropdown/Sort';

export const TAB_NAMES_ORIGIN = {
  reviewedProduct: 'reviewedProduct',
  createdProduct: 'createdProduct',
  favoriteProduct: 'favoriteProduct',
};

export type TabNamesType = keyof typeof TAB_NAMES_ORIGIN;

export const TAB_NAMES: Record<TabNamesType, string> = {
  reviewedProduct: '리뷰 남긴 상품',
  createdProduct: '등록한 상품',
  favoriteProduct: '찜한 상품',
};
export const PRODUCT_TAB = [
  '리뷰 남긴 상품',
  '등록한 상품',
  '찜한 상품',
] as const;

export const PRODUCT_TAB_OPTIONS: Option[] = Object.entries(TAB_NAMES).map(
  ([value, label]) => ({
    value,
    label,
  }),
);
