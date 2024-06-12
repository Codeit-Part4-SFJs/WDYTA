import { Option } from '@/shared/ui/Dropdown/Sort';

export const PRODUCT_MENU = [
  '리뷰 남긴 상품',
  '등록한 상품',
  '찜한 상품',
] as const;

export const TAB_OPTIONS: Option[] = [
  { value: 'reviewedProduct', label: '리뷰 남긴 상품' },
  { value: 'createdProduct', label: '등록한 상품' },
  { value: 'favoriteProduct', label: '찜한 상품' },
] as const;
